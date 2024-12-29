import Image from 'next/image'
import { theme } from '../../lib/theme'

export default function Holidays() {
  return (
    <div className="bg-gray-100">
      <section className={`bg-gradient-to-r from-primary to-secondary py-20 ${theme.animations.fadeIn}`}>
        <div className="container mx-auto px-4">
          <h1 className={`text-4xl font-bold text-white text-center mb-8 ${theme.animations.slideIn}`}>
            Discover Amazing Holiday Packages
          </h1>
          <div className={`bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto ${theme.animations.slideIn}`}>
            <form className="space-y-4">
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128205;</span>
                  <input
                    type="text"
                    id="destination"
                    placeholder="Where do you want to go?"
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="departure" className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128197;</span>
                    <input
                      type="date"
                      id="departure"
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <select
                    id="duration"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option>1 week</option>
                    <option>2 weeks</option>
                    <option>3 weeks</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128100;</span>
                  <select
                    id="travelers"
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>2 Adults, 2 Children</option>
                  </select>
                </div>
              </div>
              <button type="submit" className={`w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 ${theme.animations.buttonHover}`}>
                &#128269; Search Holiday Packages
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={`py-16 ${theme.animations.fadeIn}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme.animations.slideIn}`}>Popular Holiday Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Bali Paradise Package", duration: "7 nights", price: "£899", image: "bali-package.jpg" },
              { name: "Greek Islands Explorer", duration: "10 nights", price: "£1,299", image: "greek-islands.jpg" },
              { name: "Caribbean Cruise Adventure", duration: "7 nights", price: "£1,099", image: "caribbean-cruise.jpg" }
            ].map((holiday, index) => (
              <div key={holiday.name} className={`bg-white rounded-lg shadow-md overflow-hidden ${theme.animations.slideIn} animate-delay-${index}`}>
                <Image
                  src={`/${holiday.image}`}
                  alt={holiday.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{holiday.name}</h3>
                  <p className="text-gray-600 mb-2">{holiday.duration}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">From {holiday.price}</span>
                    <button className={`bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300 ${theme.animations.buttonHover}`}>
                      View Package
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

