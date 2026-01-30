# Globetrot Migration Website

A professional, modern website for Globetrot Migration Services - providing comprehensive immigration consulting and Golden Visa programs worldwide.

## 🚀 Features

- **Modern React + TypeScript** - Built with latest technologies
- **Responsive Design** - Perfect on all devices
- **10+ Country Programs** - Detailed Golden Visa information
- **Contact Form with Email** - Direct lead generation to your email
- **Professional Design** - Trust-building for premium services
- **SEO Optimized** - Better search engine visibility
- **Fast Loading** - Optimized performance

## 📧 Email Setup (IMPORTANT)

The contact form sends emails directly to your inbox. You need to set up EmailJS:

### 1. Create EmailJS Account
- Go to [emailjs.com](https://emailjs.com)
- Create a free account
- Set up an email service (Gmail, Outlook, etc.)

### 2. Create Email Template
Create a template with these variables:
```
From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Country: {{country}}
Investment Budget: {{investment_amount}}
Interested Countries: {{preferred_countries}}
How they heard: {{how_heard}}
Submitted: {{submission_date}}

Message:
{{message}}
```

### 3. Get Your Keys
- Service ID (from your email service)
- Template ID (from your template)
- Public Key (from your account settings)

### 4. Set Environment Variables
Create a `.env` file in the project root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🛠 Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up email environment variables (see above)
4. Start development server: `npm run dev`
5. Open http://localhost:3000

### Build for Production
```bash
npm run build
```

## 🌍 Deployment Options

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Connect Vercel to your GitHub repo
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Option 2: Netlify
1. Push to GitHub  
2. Connect Netlify to your GitHub repo
3. Add environment variables in Netlify dashboard
4. Deploy automatically

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to your web server
3. Configure environment variables on your server

## 📝 Customization

### Adding New Countries
Edit `/src/pages/ServicesPage.tsx` to add new countries to the list.

### Updating Contact Information
Edit `/src/components/Footer.tsx` and `/src/pages/ContactPage.tsx`.

### Adding Team Members
Edit `/src/pages/AboutPage.tsx` in the team section.

### Updating Testimonials
Edit `/src/components/Testimonials.tsx` with real client testimonials.

## 🎨 Design System

### Colors
- Primary Blue: `#0284c7`
- Gold Accent: `#f59e0b`
- Dark Gray: `#0f172a`

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold weights
- Body: Regular weight

## 📊 Analytics Setup

Add Google Analytics by including the tracking code in `index.html`.

## 🔧 Technical Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Email**: EmailJS
- **Routing**: React Router

## 📞 Support

For technical support or modifications, contact your developer.

## 📄 License

Private - All rights reserved by Globetrot Migration Services.