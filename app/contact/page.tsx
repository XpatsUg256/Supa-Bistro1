import { Navigation } from "@/components/navigation"
import { ContactContent } from "@/components/contact-content"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ContactContent />
      </div>
      <Footer />
    </main>
  )
}
