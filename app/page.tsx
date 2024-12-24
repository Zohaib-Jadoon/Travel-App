import Navbar from '../components/navigation/navbar'
import SearchForm from '../components/search/search-form'

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-blue-500 to-blue-400">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Find Your Perfect Travel Experience
          </h1>
          <SearchForm type="flights" />
        </div>
      </div>
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose TravelUp?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold mb-2">Best Flight Deals</h3>
              <p className="text-gray-600">Find the most competitive prices for your travel needs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-semibold mb-2">Quality Hotels</h3>
              <p className="text-gray-600">Carefully selected accommodations worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">ATOL Protected</h3>
              <p className="text-gray-600">Your booking is safe and secure with us</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

