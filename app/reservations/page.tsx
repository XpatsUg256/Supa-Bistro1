import { Navigation } from "@/components/navigation"
import { ReservationForm } from "@/components/reservation-form"
import { Footer } from "@/components/footer"

export default function ReservationsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ReservationForm />
      </div>
      <Footer />
    </main>
  )
}
