import Navbar from '../../components/navigation/navbar'
import { theme } from '../../lib/theme'
 
export default function MyBookings() {
  return (
    <main className={theme.colors.background}>
      <Navbar />
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <h1 className={`text-3xl font-bold mb-8 ${theme.fonts.heading} ${theme.colors.text}`}>My Bookings</h1>
        <div className="space-y-6">
          {[
            {
              type: 'Flight',
              reference: 'FL123456',
              details: 'London (LHR) → New York (JFK)',
              date: '25 Dec 2023',
              status: 'Confirmed'
            },
            {
              type: 'Hotel',
              reference: 'HT789012',
              details: 'Luxury Hotel New York',
              date: '25-30 Dec 2023',
              status: 'Pending'
            }
          ].map((booking) => (
            <div key={booking.reference} className={`bg-white rounded-lg shadow-md p-6 ${theme.animations.fadeIn}`}>
              <div className="flex items-start justify-between">
                <div>
                  <span className={`inline-block px-2 py-1 text-sm rounded-full ${theme.colors.secondary} ${theme.colors.text} mb-2`}>
                    {booking.type}
                  </span>
                  <h3 className={`text-lg font-semibold mb-1 ${theme.colors.text}`}>{booking.details}</h3>
                  <p className="text-gray-600">Booking Reference: {booking.reference}</p>
                  <p className="text-gray-600">Date: {booking.date}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 text-sm rounded-full ${
                    booking.status === 'Confirmed' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                  <button className={`block mt-4 ${theme.colors.primary} hover:text-opacity-90`}>
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

