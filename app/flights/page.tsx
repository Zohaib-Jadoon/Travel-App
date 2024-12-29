import Image from 'next/image'
import { theme } from '../../lib/theme'

export default function Flights() {
  return (
    <div className="bg-gray-100">
      <section className={`bg-gradient-to-r from-primary to-secondary py-20 ${theme.animations.fadeIn}`}>
        <div className="container mx-auto px-4">
          <h1 className={`text-4xl font-bold text-white text-center mb-8 ${theme.animations.slideIn}`}>
            Find Your Perfect Flight
          </h1>
          <div className={`bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto ${theme.animations.slideIn}`}>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">From</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128205;</span>
                    <input
                      type="text"
                      id="from"
                      placeholder="Departure city"
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">To</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128205;</span>
                    <input
                      type="text"
                      id="to"
                      placeholder="Arrival city"
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="depart" className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128197;</span>
                    <input
                      type="date"
                      id="depart"
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="return" className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128197;</span>
                    <input
                      type="date"
                      id="return"
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300">
                &#128269; Search Flights
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={`py-16 ${theme.animations.fadeIn}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme.animations.slideIn}`}>Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Paris", image: "paris.jpg" },
              { name: "Tokyo", image: "tokyo.jpg" },
              { name: "New York", image: "new-york.jpg" },
            ].map((destination) => (
              <div key={destination.name} className={`bg-white rounded-lg shadow-md overflow-hidden ${theme.animations.slideIn}`}>
                <Image
                  src={`/${destination.image}`}
                  alt={destination.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <button className={`${theme.animations.buttonHover} bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300`}>
                    View Flights
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

