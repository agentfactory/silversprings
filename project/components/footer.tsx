import Link from "next/link";
import { Facebook, Instagram, Palette } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Palette className="h-6 w-6 text-green-600" />
              <span className="font-semibold text-lg">Silver Spring Studio</span>
            </div>
            <p className="text-sm text-gray-600">
              A peaceful, welcoming environment dedicated to cultivating a vibrant and inclusive community of artists.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-green-600">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-green-600">About</Link></li>
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-green-600">Services</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-green-600">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Silver Spring Studio</li>
              <li>(Adjacent to the Silver Spring Barn)</li>
              <li>1705 Robertson Rd</li>
              <li>Nepean, ON K2H 8H6</li>
              <li>Phone: (613) 404-9394</li>
              <li>Email: silverspringstudio@ocapdd.on.ca</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Studio Hours</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Monday - Friday: 9:00AM - 4:30PM</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Silver Spring Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}