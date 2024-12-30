import Link from 'next/link'
import { theme } from '../lib/theme'
import './home.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className={`bg-primary py-20 ${theme.animations.fadeIn}`}>
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white ${theme.animations.slideIn}`}>
              Discover Your Next Adventure with TravelUp
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-white/90">
              Book flights, hotels, and holiday packages with ease. Your journey begins here.
            </p>
            <Link 
              href="/flights" 
              className={`inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${theme.animations.buttonHover}`}
            >
              Start Exploring →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${theme.animations.fadeIn}`}>
        <div className="container max-w-6xl px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Flights",
                description: "Find and book the best flight deals for your next destination worldwide.",
              },
              {
                title: "Hotels",
                description: "Choose from a wide range of comfortable and luxurious accommodations.",
              },
              {
                title: "Holiday Packages",
                description: "Plan all-inclusive holiday packages for a stress-free vacation.",
              },
            ].map((service, index) => (
              <div 
                key={service.title} 
                className={`bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${theme.animations.slideIn} service-card service-card-delay-${index}`}
                // style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="mb-4 text-2xl font-semibold text-primary">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>
                <Link 
                  href={`/${service.title.toLowerCase()}`} 
                  className="inline-flex items-center font-semibold transition-colors text-primary hover:text-primary/80"
                >
                  Learn more 
                  <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 bg-gray-50 ${theme.animations.fadeIn}`}>
        <div className="container max-w-6xl px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">Why Choose TravelUp?</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Best Prices", description: "We guarantee competitive rates and exclusive deals." },
              { title: "24/7 Support", description: "Our customer service team is always here to help." },
              { title: "Easy Booking", description: "A user-friendly platform for hassle-free reservations." },
              { title: "Trusted Partners", description: "We work with reputable airlines and hotels." },
            ].map((feature, index) => (
              <div 
                key={feature.title} 
                className={`bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:shadow-lg ${theme.animations.slideIn} feature-card feature-card-delay-${index}`}
                // style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="mb-3 text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`py-16 ${theme.animations.fadeIn}`}>
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="p-8 text-center bg-primary/10 rounded-2xl md:p-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Stay Updated with Best Deals</h2>
            <p className="max-w-2xl mx-auto mb-6 text-gray-600">
              Subscribe to our newsletter and never miss out on exclusive travel offers and destinations.
            </p>
            <form className="flex flex-col max-w-md gap-4 mx-auto sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button 
                type="submit"
                className={`bg-primary text-white font-semibold px-6 py-3 rounded-lg ${theme.animations.buttonHover}`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

