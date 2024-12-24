import Navbar from '../../components/navigation/navbar'

export default function MyBookings() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
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
            <div key={booking.reference} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800 mb-2">
                    {booking.type}
                  </span>
                  <h3 className="text-lg font-semibold mb-1">{booking.details}</h3>
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

