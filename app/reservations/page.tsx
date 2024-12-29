import Navbar from '../../components/navigation/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { theme } from '../../lib/theme'

export default function Reservations() {
  return (
    <main className={theme.colors.background}>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className={`text-3xl font-bold mb-8 ${theme.fonts.heading} ${theme.colors.text}`}>Car and Bus Reservations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Car Rentals', image: '/car-rental.jpg', description: 'Explore your destination with the freedom of a rental car.', link: '/reservations/car' },
            { title: 'Bus Tickets', image: '/bus-ticket.jpg', description: 'Affordable and convenient bus travel to your destination.', link: '/reservations/bus' }
          ].map((item) => (
            <div key={item.title} className={`bg-white rounded-lg shadow-md overflow-hidden ${theme.animations.fadeIn}`}>
              <Image src={item.image} alt={item.title} width={600} height={400} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className={`text-2xl font-semibold mb-4 ${theme.colors.text}`}>{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link href={item.link} className={`${theme.buttons.primary} px-4 py-2 rounded-md inline-block ${theme.animations.buttonHover}`}>
                  Book {item.title === 'Car Rentals' ? 'a Car' : 'a Bus Ticket'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

