import Navbar from '../../components/navigation/navbar'
import SearchForm from '../../components/search/search-form'

export default function Flights() {
  return (
    <main>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-500 to-blue-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Search Flights
          </h1>
          <SearchForm type="flights" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['London - New York', 'London - Dubai', 'London - Singapore'].map((route) => (
            <div key={route} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-2">{route}</h3>
              <p className="text-gray-600 mb-4">From £299</p>
              <button className="text-blue-500 hover:text-blue-600">View Deals →</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
