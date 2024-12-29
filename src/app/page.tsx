import Image from 'next/image'
import Link from 'next/link'
import { theme } from '../../lib/theme'

export default function Home() {
  return (
    <div className="bg-light">
      <section className={`bg-primary text-white py-5 ${theme.animations.fadeIn}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className={`display-4 mb-4 ${theme.animations.slideIn}`}>
                Discover Your Next Adventure with TravelUp
              </h1>
              <p className={`lead mb-4 ${theme.animations.slideIn}`}>
                Book flights, hotels, and holiday packages with ease. Your journey begins here.
              </p>
              <Link href="/flights" className={`btn btn-light btn-lg ${theme.animations.buttonHover}`}>
                Start Exploring &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-5 ${theme.animations.fadeIn}`}>
        <div className="container">
          <h2 className={`text-center mb-5 ${theme.animations.slideIn}`}>Our Services</h2>
          <div className="row">
            {[
              { title: "Flights", description: "Find the best deals on flights to destinations worldwide", image: "flight.jpg" },
              { title: "Hotels", description: "Book comfortable accommodations for your stay", image: "hotel.jpg" },
              { title: "Holiday Packages", description: "Discover all-inclusive holiday packages for a stress-free vacation", image: "holiday.jpg" },
            ].map((service) => (
              <div key={service.title} className={`col-md-4 mb-4 ${theme.animations.slideIn}`}>
                <div className="card h-100 shadow-sm">
                  <Image
                    src={`/${service.image}`}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-text">{service.description}</p>
                    <Link href={`/${service.title.toLowerCase()}`} className="btn btn-primary">
                      Learn more &#8594;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-light py-5 ${theme.animations.fadeIn}`}>
        <div className="container">
          <h2 className={`text-center mb-5 ${theme.animations.slideIn}`}>Why Choose TravelUp?</h2>
          <div className="row">
            {[
              { title: "Best Prices", description: "We guarantee competitive rates and exclusive deals" },
              { title: "24/7 Support", description: "Our customer service team is always here to help" },
              { title: "Easy Booking", description: "User-friendly platform for hassle-free reservations" },
              { title: "Trusted Partners", description: "We work with reputable airlines and hotels" },
            ].map((feature) => (
              <div key={feature.title} className={`col-md-3 text-center mb-4 ${theme.animations.slideIn}`}>
                <h3 className="h4 mb-3">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

