import Navbar from '../../components/navigation/navbar'

export default function MyBookings() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold">My Bookings</h1>
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
            <div key={booking.reference} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block px-2 py-1 mb-2 text-sm text-blue-800 bg-blue-100 rounded-full">
                    {booking.type}
                  </span>
                  <h3 className="mb-1 text-lg font-semibold">{booking.details}</h3>
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
                  <button className="block mt-4 text-blue-500 hover:text-blue-600">
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
