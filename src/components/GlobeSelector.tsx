import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

interface Country {
  code: string;
  name: string;
  flag: string;
  minInvestment: string;
  feature: string;
  lat: number;
  lng: number;
  color: string;
}

const countries: Country[] = [
  { code: 'portugal', name: 'Portugal', flag: '🇵🇹', minInvestment: '€280,000', feature: 'EU Access', lat: 39.4, lng: -8.2, color: '#16a34a' },
  { code: 'spain', name: 'Spain', flag: '🇪🇸', minInvestment: '€500,000', feature: 'Schengen Zone', lat: 40.4, lng: -3.7, color: '#dc2626' },
  { code: 'greece', name: 'Greece', flag: '🇬🇷', minInvestment: '€250,000', feature: 'EU Residency', lat: 39.1, lng: 21.8, color: '#2563eb' },
  { code: 'cyprus', name: 'Cyprus', flag: '🇨🇾', minInvestment: '€300,000', feature: 'EU Passport', lat: 35.1, lng: 33.4, color: '#d97706' },
  { code: 'malta', name: 'Malta', flag: '🇲🇹', minInvestment: '€150,000', feature: 'EU Member', lat: 35.9, lng: 14.5, color: '#7c3aed' },
  { code: 'uk', name: 'United Kingdom', flag: '🇬🇧', minInvestment: '£2,000,000', feature: 'Tier 1 Visa', lat: 51.5, lng: -0.1, color: '#0c4a6e' },
  { code: 'newzealand', name: 'New Zealand', flag: '🇳🇿', minInvestment: 'NZ$3,000,000', feature: 'Residency', lat: -40.9, lng: 174.9, color: '#065f46' },
  { code: 'australia', name: 'Australia', flag: '🇦🇺', minInvestment: 'AU$5,000,000', feature: 'Permanent Visa', lat: -25.3, lng: 133.8, color: '#92400e' },
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

const GlobeSelector = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const markersRef = useRef<THREE.Mesh[]>([]);
  const animFrameRef = useRef<number>(0);
  const isDraggingRef = useRef(false);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const autoRotateRef = useRef(true);
  const targetRotRef = useRef({ x: 0.1, y: 0 });
  const currentRotRef = useRef({ x: 0.1, y: 0 });

  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);

  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.8;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Ambient + directional light
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const sun = new THREE.DirectionalLight(0xffd4a0, 1.4);
    sun.position.set(5, 3, 5);
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0x8ab4f8, 0.3);
    fill.position.set(-5, -3, -5);
    scene.add(fill);

    // Stars
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(3000);
    for (let i = 0; i < 3000; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 100;
      starPositions[i + 1] = (Math.random() - 0.5) * 100;
      starPositions[i + 2] = (Math.random() - 0.5) * 100;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, transparent: true, opacity: 0.6 });
    scene.add(new THREE.Points(starGeo, starMat));

    // Globe - ocean
    const globeGeo = new THREE.SphereGeometry(1, 64, 64);
    const globeMat = new THREE.MeshPhongMaterial({
      color: 0x0c4a6e,
      emissive: 0x0a2a3d,
      specular: 0x1e90ff,
      shininess: 40,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);
    globeRef.current = globe;

    // Atmosphere glow
    const atmGeo = new THREE.SphereGeometry(1.06, 64, 64);
    const atmMat = new THREE.MeshPhongMaterial({
      color: 0x4fc3f7,
      transparent: true,
      opacity: 0.08,
      side: THREE.FrontSide,
    });
    scene.add(new THREE.Mesh(atmGeo, atmMat));

    // Graticule (latitude/longitude grid lines)
    const linesMat = new THREE.LineBasicMaterial({ color: 0x1e4976, transparent: true, opacity: 0.25 });
    for (let lat = -80; lat <= 80; lat += 20) {
      const pts = [];
      for (let lng = 0; lng <= 360; lng += 3) {
        pts.push(latLngToVector3(lat, lng - 180, 1.002));
      }
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), linesMat));
    }
    for (let lng = -180; lng < 180; lng += 30) {
      const pts = [];
      for (let lat = -90; lat <= 90; lat += 3) {
        pts.push(latLngToVector3(lat, lng, 1.002));
      }
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), linesMat));
    }

    // Continent outlines using procedural patches (simplified continents as ellipsoidal patches)
    const landColor = 0x1a5c3a;
    const landMat = new THREE.MeshPhongMaterial({ color: landColor, emissive: 0x0d3d26, shininess: 5 });

    // Land masses as sphere segments
    const landPatches = [
      // Europe
      { lat: 50, lng: 15, latSize: 20, lngSize: 30 },
      // Africa
      { lat: 5, lng: 22, latSize: 55, lngSize: 40 },
      // Asia
      { lat: 50, lng: 90, latSize: 40, lngSize: 90 },
      // North America
      { lat: 50, lng: -100, latSize: 40, lngSize: 60 },
      // South America
      { lat: -15, lng: -60, latSize: 40, lngSize: 30 },
      // Australia
      { lat: -25, lng: 135, latSize: 25, lngSize: 30 },
      // SE Asia / Indonesia
      { lat: 5, lng: 115, latSize: 15, lngSize: 35 },
      // Greenland
      { lat: 72, lng: -42, latSize: 15, lngSize: 25 },
      // Scandinavia
      { lat: 65, lng: 17, latSize: 14, lngSize: 15 },
      // UK
      { lat: 54, lng: -2, latSize: 6, lngSize: 6 },
      // Japan
      { lat: 37, lng: 137, latSize: 12, lngSize: 6 },
      // New Zealand
      { lat: -42, lng: 172, latSize: 10, lngSize: 6 },
      // Middle East
      { lat: 25, lng: 45, latSize: 15, lngSize: 25 },
      // India
      { lat: 22, lng: 80, latSize: 20, lngSize: 18 },
      // Central America
      { lat: 15, lng: -87, latSize: 10, lngSize: 15 },
    ];

    landPatches.forEach(({ lat, lng, latSize, lngSize }) => {
      const pts: THREE.Vector3[] = [];
      const steps = 24;
      for (let i = 0; i <= steps; i++) {
        for (let j = 0; j <= steps; j++) {
          const la = lat - latSize / 2 + (latSize * i) / steps;
          const lo = lng - lngSize / 2 + (lngSize * j) / steps;
          pts.push(latLngToVector3(la, lo, 1.001));
        }
      }
      const geo = new THREE.BufferGeometry();
      const verts: number[] = [];
      const idxs: number[] = [];
      pts.forEach(p => verts.push(p.x, p.y, p.z));
      for (let i = 0; i < steps; i++) {
        for (let j = 0; j < steps; j++) {
          const a = i * (steps + 1) + j;
          const b = a + 1;
          const c = a + steps + 1;
          const d = c + 1;
          idxs.push(a, b, c, b, d, c);
        }
      }
      geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
      geo.setIndex(idxs);
      geo.computeVertexNormals();
      scene.add(new THREE.Mesh(geo, landMat));
    });

    // Markers for each country
    const markers: THREE.Mesh[] = [];
    countries.forEach((country) => {
      const pos = latLngToVector3(country.lat, country.lng, 1.05);
      // Pin sphere
      const markerGeo = new THREE.SphereGeometry(0.028, 16, 16);
      const markerMat = new THREE.MeshPhongMaterial({
        color: parseInt(country.color.replace('#', '0x')),
        emissive: parseInt(country.color.replace('#', '0x')),
        emissiveIntensity: 0.3,
        shininess: 80,
      });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.copy(pos);
      marker.userData = { country };
      scene.add(marker);
      markers.push(marker);

      // Pulse ring
      const ringGeo = new THREE.RingGeometry(0.035, 0.05, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: parseInt(country.color.replace('#', '0x')),
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      ring.userData = { isRing: true, baseColor: parseInt(country.color.replace('#', '0x')) };
      scene.add(ring);
    });
    markersRef.current = markers;

    // Animation loop
    let t = 0;
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      t += 0.016;

      if (autoRotateRef.current) {
        targetRotRef.current.y += 0.002;
      }

      // Smooth rotation
      currentRotRef.current.x += (targetRotRef.current.x - currentRotRef.current.x) * 0.08;
      currentRotRef.current.y += (targetRotRef.current.y - currentRotRef.current.y) * 0.08;

      globe.rotation.x = currentRotRef.current.x;
      globe.rotation.y = currentRotRef.current.y;

      // Sync land/grid/markers with globe
      scene.children.forEach(child => {
        if (child !== globe && child !== camera && !(child instanceof THREE.AmbientLight) && !(child instanceof THREE.DirectionalLight) && !(child instanceof THREE.Points)) {
          if (child instanceof THREE.Mesh || child instanceof THREE.Line || child instanceof THREE.Points) {
            child.rotation.x = globe.rotation.x;
            child.rotation.y = globe.rotation.y;
          }
        }
      });

      // Pulse markers
      markers.forEach((marker, i) => {
        const scale = 1 + Math.sin(t * 2 + i) * 0.15;
        marker.scale.setScalar(scale);
      });

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animFrameRef.current);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Mouse handlers
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDraggingRef.current = true;
    autoRotateRef.current = false;
    prevMouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!mountRef.current || !cameraRef.current || !sceneRef.current) return;

    // Update mouse for raycasting
    const rect = mountRef.current.getBoundingClientRect();
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    // Drag rotation
    if (isDraggingRef.current) {
      const dx = e.clientX - prevMouseRef.current.x;
      const dy = e.clientY - prevMouseRef.current.y;
      targetRotRef.current.y += dx * 0.008;
      targetRotRef.current.x += dy * 0.008;
      targetRotRef.current.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotRef.current.x));
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    }

    // Raycast for hover
    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const hits = raycasterRef.current.intersectObjects(markersRef.current);
    if (hits.length > 0) {
      const country = hits[0].object.userData.country as Country;
      setHoveredCountry(country);
      mountRef.current.style.cursor = 'pointer';
    } else {
      setHoveredCountry(null);
      mountRef.current.style.cursor = isDraggingRef.current ? 'grabbing' : 'grab';
    }
  }, []);

  const onMouseUp = useCallback((_e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    // Check for click on marker
    if (!cameraRef.current || !sceneRef.current) return;
    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const hits = raycasterRef.current.intersectObjects(markersRef.current);
    if (hits.length > 0) {
      const country = hits[0].object.userData.country as Country;
      setSelectedCountry(country);
    }

    // Resume auto-rotate after 3s
    setTimeout(() => { autoRotateRef.current = true; }, 3000);
  }, []);

  const onMouseLeave = useCallback(() => {
    isDraggingRef.current = false;
    setHoveredCountry(null);
    setTimeout(() => { autoRotateRef.current = true; }, 3000);
  }, []);

  const selectCountry = useCallback((country: Country) => {
    setSelectedCountry(country);
    // Rotate globe to face that country
    const targetY = -(country.lng * Math.PI) / 180;
    const targetX = -(country.lat * Math.PI) / 180 * 0.4;
    targetRotRef.current = { x: targetX, y: targetY };
    autoRotateRef.current = false;
    setTimeout(() => { autoRotateRef.current = true; }, 5000);
  }, []);

  const displayCountry = hoveredCountry || selectedCountry;

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-primary-950 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Explore Your <span className="text-gold-400">Destination</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Drag the globe to explore. Click a marker or select a country card to see investment details.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
          {/* 3D Globe */}
          <div className="relative">
            <div
              ref={mountRef}
              className="w-full rounded-2xl overflow-hidden"
              style={{ height: '520px', cursor: 'grab' }}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
            />

            {/* Globe instructions */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm text-white/70 text-xs px-4 py-2 rounded-full border border-white/10">
                🌍 Drag to rotate · Click markers to select
              </div>
            </div>

            {/* Hover tooltip */}
            {hoveredCountry && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 text-sm font-medium pointer-events-none">
                {hoveredCountry.flag} {hoveredCountry.name}
              </div>
            )}
          </div>

          {/* Right Panel */}
          <div className="flex flex-col gap-6">
            {/* Selected Country Info Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 transition-all duration-500">
              <div className="flex items-center gap-4 mb-5">
                <div className="text-5xl">{displayCountry.flag}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    <span className="text-gold-400 text-sm font-medium">{displayCountry.feature}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{displayCountry.name}</h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-slate-400 text-xs mb-1">Min. Investment</div>
                  <div className="text-white font-bold text-lg">{displayCountry.minInvestment}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-slate-400 text-xs mb-1">Program Type</div>
                  <div className="text-white font-bold text-lg">Golden Visa</div>
                </div>
              </div>

              <Link
                to={`/country/${displayCountry.code}`}
                className="w-full bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Explore {displayCountry.name} Program</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Country Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {countries.map((country) => {
                const isSelected = selectedCountry.code === country.code;
                return (
                  <button
                    key={country.code}
                    onClick={() => selectCountry(country)}
                    className={`
                      relative rounded-xl p-3 text-center border transition-all duration-200 cursor-pointer
                      ${isSelected
                        ? 'bg-gold-500/20 border-gold-400 shadow-lg shadow-gold-500/20'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25'
                      }
                    `}
                  >
                    <div className="text-2xl mb-1">{country.flag}</div>
                    <div className={`text-xs font-semibold leading-tight ${isSelected ? 'text-gold-400' : 'text-slate-300'}`}>
                      {country.name}
                    </div>
                    <div className="text-slate-500 text-[10px] mt-0.5 truncate">{country.minInvestment}</div>
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-gold-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeSelector;
