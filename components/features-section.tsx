import { Utensils, Clock, Award, MapPin } from "lucide-react"

const features = [
  {
    icon: Utensils,
    title: "Authentic Flavors",
    description: "Traditional recipes passed down through generations, prepared with authentic spices and techniques",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "All dishes prepared fresh daily using premium ingredients sourced from trusted suppliers",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in taste, quality, and service across Uganda",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Conveniently located in Mukwano Mall, easily accessible with ample parking",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
