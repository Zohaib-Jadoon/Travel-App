import Navbar from '../../components/navigation/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Reservations() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Car and Bus Reservations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src="/car-rental.jpg" alt="Car Rental" width={600} height={400} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Car Rentals</h2>
              <p className="text-gray-600 mb-4">Explore your destination with the freedom of a rental car.</p>
              <Link href="/reservations/car" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Book a Car
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src="/bus-ticket.jpg" alt="Bus Ticket" width={600} height={400} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Bus Tickets</h2>
              <p className="text-gray-600 mb-4">Affordable and convenient bus travel to your destination.</p>
              <Link href="/reservations/bus" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Book a Bus Ticket
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

