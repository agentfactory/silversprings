"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Paintbrush, Scissors, Flower2, UtensilsCrossed, Clock, Users, Heart, Palette } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: "Visual Arts",
    description: "Express yourself through painting, drawing, and mixed media. Our experienced instructors provide guidance while encouraging individual creativity.",
    features: [
      "Painting workshops",
      "Drawing classes",
      "Mixed media exploration",
      "Art therapy sessions"
    ]
  },
  {
    icon: Scissors,
    title: "Crafting",
    description: "Discover the joy of creating handmade items using various materials and techniques. Perfect for all skill levels.",
    features: [
      "Paper crafts",
      "Textile arts",
      "Jewelry making",
      "Seasonal projects"
    ]
  },
  {
    icon: Flower2,
    title: "Gardening",
    description: "Connect with nature while learning sustainable gardening practices. Experience the therapeutic benefits of growing plants.",
    features: [
      "Plant care basics",
      "Seasonal planting",
      "Garden maintenance",
      "Herb gardening"
    ]
  },
  {
    icon: UtensilsCrossed,
    title: "Cooking",
    description: "Learn culinary skills and enjoy preparing delicious meals together in our fully equipped kitchen.",
    features: [
      "Basic cooking skills",
      "Healthy meal prep",
      "Baking workshops",
      "Group cooking sessions"
    ]
  }
];

const features = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose from morning, afternoon, or evening sessions to fit your schedule."
  },
  {
    icon: Users,
    title: "Small Group Sizes",
    description: "Intimate class settings ensure personalized attention and support."
  },
  {
    icon: Heart,
    title: "Inclusive Environment",
    description: "Programs adapted to accommodate various abilities and skill levels."
  },
  {
    icon: Palette,
    title: "Quality Materials",
    description: "All necessary supplies and equipment provided for each session."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our range of creative activities designed to inspire, engage, and empower. 
            All programs are adaptable to different ability levels and interests.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <service.icon className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/contact">Register Interest</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our programs and how we can accommodate your needs.
          </p>
          <Button asChild variant="outline" size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}