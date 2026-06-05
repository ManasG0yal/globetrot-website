import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'United States',
      program: 'Portugal Golden Visa',
      rating: 5,
      content: 'Globetrot Migration made our Portuguese residency journey seamless. Their expertise and personal attention exceeded our expectations. We now have our residency cards and are loving life in Lisbon!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b098?w=80&h=80&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Ahmed Al-Rashid',
      country: 'UAE',
      program: 'Spain Golden Visa',
      rating: 5,
      content: 'Professional, transparent, and efficient. The team guided us through every step of the Spanish Golden Visa process. Our family is now enjoying the benefits of EU residency.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Maria Chen',
      country: 'Singapore',
      program: 'Greece Golden Visa',
      rating: 5,
      content: 'The Greek Golden Visa program was perfect for our investment goals. Globetrot\'s team made the complex process simple and stress-free. Highly recommend their services!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'James Mitchell',
      country: 'Canada',
      program: 'Malta Residency',
      rating: 5,
      content: 'Outstanding service from start to finish. The team\'s knowledge of Malta\'s residency program and attention to detail made our application successful on the first try.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Elena Volkov',
      country: 'Russia',
      program: 'Cyprus Investment',
      rating: 5,
      content: 'We chose Cyprus for our EU residency and Globetrot delivered exactly what they promised. Professional, reliable, and always available to answer our questions.',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Robert Kim',
      country: 'South Korea',
      program: 'UK Investor Visa',
      rating: 5,
      content: 'The UK Investor Visa process was complex, but Globetrot\'s expertise made it manageable. Their team is truly world-class. We\'re now proud UK residents.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-accent-500 fill-accent-500' : 'text-neutral-300'}`}
      />
    ));
  };

  return (
    <section className="section-spacing bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Real stories from families who have successfully secured their global mobility goals with our guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {renderStars(testimonial.rating)}
                </div>
                <Quote className="w-8 h-8 text-primary-200 flex-shrink-0" />
              </div>
              
              <p className="text-neutral-600 text-base mb-6 leading-relaxed flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-neutral-100"
                />
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-neutral-500">
                    {testimonial.country}
                  </p>
                  <p className="text-xs text-primary-600 font-medium mt-0.5">
                    {testimonial.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 max-w-3xl mx-auto border border-primary-100">
            <p className="text-primary-900 font-bold text-lg mb-2">
              Ready to join our success stories?
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              Over 1,200 families have trusted us with their global mobility journey. 
              Your success story could be next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
