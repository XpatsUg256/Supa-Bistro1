import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const featuredDishes = [
  {
    id: 1,
    name: "Masala Dosa",
    description: "Crispy South Indian crepe filled with spiced potato masala, served with sambar and chutneys",
    price: "UGX 18,000",
    image: "/masala-dosa-south-indian-crispy-crepe-with-potato-.jpg",
    category: "South Indian",
  },
  {
    id: 2,
    name: "Arabian Mixed Grill",
    description: "Succulent selection of grilled meats with aromatic spices, served with rice and fresh salad",
    price: "UGX 45,000",
    image: "/arabian-mixed-grill-platter-with-kebabs-and-grille.jpg",
    category: "Arabian",
  },
  {
    id: 3,
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato cream sauce with aromatic spices, served with naan",
    price: "UGX 32,000",
    image: "/butter-chicken-curry-in-creamy-tomato-sauce.jpg",
    category: "Indian",
  },
  {
    id: 4,
    name: "Biryani Special",
    description: "Fragrant basmati rice layered with marinated meat and aromatic spices",
    price: "UGX 28,000",
    image: "/chicken-biryani-with-fragrant-rice-and-spices.jpg",
    category: "Indian",
  },
]

export function FeaturedDishes() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Signature Dishes</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Discover our most beloved creations, crafted with authentic flavors and premium ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredDishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {dish.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold">{dish.name}</h3>
                  <span className="text-xl font-bold text-primary">{dish.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{dish.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
