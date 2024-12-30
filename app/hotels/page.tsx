import Image from 'next/image'
import { theme } from '../../lib/theme'

export default function Hotels() {
  return (
    <div className="bg-gray-100">
      <section className={`bg-gradient-to-r from-primary to-secondary py-20 ${theme.animations.fadeIn}`}>
        <div className="container px-4 mx-auto">
          <h1 className={`text-4xl font-bold text-white text-center mb-8 ${theme.animations.slideIn}`}>
            Find Your Perfect Stay
          </h1>
          <div className={`bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto ${theme.animations.slideIn}`}>
            <form className="space-y-4">
              <div>
                <label htmlFor="destination" className="block mb-1 text-sm font-medium text-gray-700">Destination</label>
                <div className="relative">
                  <span className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2">&#128205;</span>
                  <input
                    type="text"
                    id="destination"
                    placeholder="Where are you going?"
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="check-in" className="block mb-1 text-sm font-medium text-gray-700">Check-in</label>
                  <div className="relative">
                    <span className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2">&#128197;</span>
                    <input
                      type="date"
                      id="check-in"
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="check-out" className="block mb-1 text-sm font-medium text-gray-700">Check-out</label>
                  <div className="relative">
                    <span className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2">&#128197;</span>
                    <input
                      type="date"
                      id="check-out"
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="guests" className="block mb-1 text-sm font-medium text-gray-700">Guests</label>
                <div className="relative">
                  <span className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2">&#128100;</span>
                  <select
                    id="guests"
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>2 Adults, 2 Children</option>
                  </select>
                </div>
              </div>
              <button type="submit" className={`w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 ${theme.animations.buttonHover}`}>
                &#128269; Search Hotels
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={`py-16 ${theme.animations.fadeIn}`}>
        <div className="container px-4 mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme.animations.slideIn}`}>Featured Hotels</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { name: "Luxury Resort & Spa", location: "Bali, Indonesia", image: "bali-resort.jpg", price: "£200" },
              { name: "City Center Hotel", location: "New York, USA", image: "new-york-hotel.jpg", price: "£150" },
              { name: "Beachfront Paradise", location: "Maldives", image: "maldives-hotel.jpg", price: "£300" },
            ].map((hotel, index) => (
              <div key={hotel.name} className={`bg-white rounded-lg shadow-md overflow-hidden ${theme.animations.slideIn} animate-delay-${index}`}>
                <Image
                  src={`/${hotel.image}`}
                  alt={hotel.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{hotel.name}</h3>
                  <p className="mb-4 text-gray-600">{hotel.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">From {hotel.price}/night</span>
                    <button className={`bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300 ${theme.animations.buttonHover}`}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

