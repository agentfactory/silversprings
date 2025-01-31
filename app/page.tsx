import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Paintbrush, Scissors, Flower2, UtensilsCrossed } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Creative Space for All</h1>
          <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto">
            A fee-for-service creative arts program for ages 16-100, operating under OCAPDD.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Open Monday through Saturday • Passport Funding Accepted
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/contact">Join Our Community</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
              <Link href="/passport-info">Learn About Passport Funding</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p>Open Monday - Saturday<br />Closed Sundays</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Registration</h3>
              <p>Register for events through<br /><Link href="https://mycommunityhub.ca" className="text-teal-600 hover:underline">My Community Hub</Link></p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Funding Options</h3>
              <p>We accept Passport funding<br />Contact us to learn more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Creative Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Paintbrush,
                title: "Visual Arts",
                description: "Explore painting, drawing, and various visual art forms in our welcoming studio space."
              },
              {
                icon: Scissors,
                title: "Crafting",
                description: "Discover your creativity through hands-on crafting activities and projects."
              },
              {
                icon: Flower2,
                title: "Gardening",
                description: "Experience the joy of growing and nurturing plants in our community garden."
              },
              {
                icon: UtensilsCrossed,
                title: "Cooking",
                description: "Learn essential cooking skills and enjoy preparing meals together."
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <service.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Creative Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the joy of creating in a supportive and inclusive environment.
          </p>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}