export interface Country {
  code: string;
  name: string;
  flag: string;
  title: string;
  description: string;
  benefits: string[];
  requirements: {
    minInvestment: string;
    timeframe: string;
    requirements: string[];
  };
  visa: {
    type: string;
    duration: string;
    citizenship: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  qualifications: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  content: string;
  rating: number;
  image?: string;
}