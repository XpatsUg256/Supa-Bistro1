import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Heart, Globe, Award } from "lucide-react"

export function AboutContent() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">About Super Bistro</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
          Where authentic flavors meet modern dining in the heart of Mukwano Mall
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Super Bistro was born from a passion for bringing authentic international cuisine to Uganda. Located in
              the vibrant Mukwano Mall, we've created a dining destination that celebrates the rich culinary traditions
              of South India, Arabia, and beyond.
            </p>
            <p>
              Our journey began with a simple vision: to create a space where families and friends could gather to enjoy
              exceptional food in a warm, welcoming atmosphere. Today, we're proud to serve our community with dishes
              that honor traditional recipes while embracing modern culinary techniques.
            </p>
            <p>
              Every dish that leaves our kitchen is prepared with care, using the finest ingredients and authentic
              spices. From our signature Masala Dosa to our tender Arabian grills, each meal tells a story of culinary
              heritage and passion.
            </p>
          </div>
        </div>
        <div className="relative h-96 md:h-auto flex items-center justify-center bg-primary/10 rounded-lg">
          <Image src="/logo.png" alt="Super Bistro Logo" width={400} height={300} className="object-contain p-8" />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <ChefHat className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-muted-foreground leading-relaxed">
                We honor traditional recipes and cooking methods, bringing you genuine flavors from around the world.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Only the finest ingredients make it to your plate. We never compromise on quality or freshness.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Diversity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our menu celebrates culinary traditions from South India, Arabia, and international cuisines.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                From service to presentation, we strive for excellence in every aspect of your dining experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cuisine Highlights */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Culinary Specialties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <img
                src="/south-indian-dosa-and-curry.jpg"
                alt="South Indian Cuisine"
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 right-4">South Indian</Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-3">Taste of Tamil Nadu</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience authentic South Indian flavors with our signature dosas, uttapams, and traditional breakfast
                items, all served with homemade chutneys and sambar.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <img
                src="/arabian-grilled-meat-platter.jpg"
                alt="Arabian Cuisine"
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 right-4">Arabian</Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-3">Arabian Master</h3>
              <p className="text-muted-foreground leading-relaxed">
                Savor the rich flavors of Arabia with our tender mandi, perfectly roasted meats, and aromatic rice
                dishes that transport you to the Middle East.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <img
                src="/indian-biryani-and-curry-dishes.jpg"
                alt="Indian Cuisine"
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 right-4">Indian</Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-3">Indian Classics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Indulge in aromatic biryanis, rich curries, and flavorful tandoori dishes that showcase the diverse
                culinary heritage of India.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Location & Hours */}
      <Card className="bg-primary/5">
        <CardContent className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">Mukwano Mall</p>
              <p className="text-muted-foreground leading-relaxed mb-2">Kampala, Uganda</p>
              <p className="text-muted-foreground leading-relaxed">+256 700 000 000</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Thursday: 10:00 AM - 10:00 PM</p>
                <p>Friday - Saturday: 10:00 AM - 11:00 PM</p>
                <p>Sunday: 10:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
