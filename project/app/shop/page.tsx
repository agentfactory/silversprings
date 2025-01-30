import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Temporary sample data until Supabase is connected
const products = [
  {
    id: 1,
    name: "Handmade Ceramic Bowl",
    description: "Beautiful hand-crafted ceramic bowl with unique glaze patterns.",
    price: 45.00,
    image_url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    artists: { name: "Emma Rodriguez" }
  },
  {
    id: 2,
    name: "Abstract Canvas Painting",
    description: "Vibrant abstract painting using acrylic on canvas.",
    price: 120.00,
    image_url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    artists: { name: "Michael Chen" }
  },
  {
    id: 3,
    name: "Hand-Knit Scarf",
    description: "Cozy wool scarf with intricate pattern design.",
    price: 35.00,
    image_url: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    artists: { name: "Sarah Johnson" }
  },
  {
    id: 4,
    name: "Garden Herb Kit",
    description: "Complete herb growing kit with seeds and handmade ceramic pots.",
    price: 55.00,
    image_url: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    artists: { name: "Emma Rodriguez" }
  }
];

export default function ShopPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Artist Shop</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover unique handcrafted pieces created by our talented artists. 
            Each purchase supports our creative community and helps our artists thrive.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <p className="text-sm text-gray-500">
                      By {product.artists.name}
                    </p>
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}