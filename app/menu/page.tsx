import { Navigation } from "@/components/navigation"
import { MenuContent } from "@/components/menu-content"
import { Footer } from "@/components/footer"

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <MenuContent />
      </div>
      <Footer />
    </main>
  )
}
