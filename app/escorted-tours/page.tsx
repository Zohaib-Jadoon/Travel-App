import Image from 'next/image'
import { theme } from '../../lib/theme'

export default function EscortedTours() {
  return (
    <div className="bg-gray-100">
      <section className={`bg-gradient-to-r from-primary to-secondary py-20 ${theme.animations.fadeIn}`}>
        <div className="container mx-auto px-4">
          <h1 className={`text-4xl font-bold text-white text-center mb-8 ${theme.animations.slideIn}`}>
            Discover Our Escorted Tours
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
                    <option>1-2 weeks</option>
                    <option>2-3 weeks</option>
                    <option>3-4 weeks</option>
                    <option>4+ weeks</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="tourType" className="block text-sm font-medium text-gray-700 mb-1">Tour Type</label>
                <select
                  id="tourType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option>Cultural</option>
                  <option>Adventure</option>
                  <option>Wildlife</option>
                  <option>Historical</option>
                  <option>Culinary</option>
                  <option>Luxury</option>
                </select>
              </div>
              <button type="submit" className={`w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 ${theme.animations.buttonHover}`}>
                &#128269; Find Tours
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={`py-16 ${theme.animations.fadeIn}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme.animations.slideIn}`}>Featured Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Italian Renaissance Tour",
                duration: "10 days",
                price: "£1,999",
                description: "Explore the art and culture of Italy's most beautiful cities",
                image: "italy-tour.jpg"
              },
              {
                title: "Japan Discovery",
                duration: "14 days",
                price: "£2,999",
                description: "Experience the perfect blend of ancient and modern Japan",
                image: "japan-tour.jpg"
              },
              {
                title: "African Safari Adventure",
                duration: "12 days",
                price: "£3,499",
                description: "Witness the incredible wildlife of Africa up close",
                image: "safari-tour.jpg"
              },
              {
                title: "South American Wonders",
                duration: "16 days",
                price: "£3,299",
                description: "Discover the diverse landscapes and cultures of South America",
                image: "south-america-tour.jpg"
              }
            ].map((tour, index) => (
              <div key={tour.title} className={`bg-white rounded-lg shadow-md overflow-hidden ${theme.animations.slideIn} animate-delay-${index}`}>
                <Image
                  src={`/${tour.image}`}
                  alt={tour.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">{tour.duration}</p>
                      <p className="font-semibold">From {tour.price}</p>
                    </div>
                    <button className={`bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300 ${theme.animations.buttonHover}`}>
                      View Tour
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

