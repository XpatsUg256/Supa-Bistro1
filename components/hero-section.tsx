import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/elegant-restaurant-interior-with-warm-lighting-and.jpg" alt="Supa Bistro Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance mb-6 text-foreground">
          Modern Taste.
          <br />
          Heart of Mukwano Mall
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-balance leading-relaxed">
          Experience authentic South Indian cuisine, Arabian grills, and international favorites in the heart of Uganda
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/menu">Explore Menu</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
            <Link href="/reservations">Reserve a Table</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
