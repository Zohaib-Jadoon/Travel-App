import Navbar from '../../components/navigation/navbar'
import SearchForm from '../../components/search/search-form'

export default function Flights() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-12 bg-gradient-to-b from-blue-500 to-blue-400">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="mb-8 text-4xl font-bold text-center text-white">
            Search Flights
          </h1>
          <SearchForm type="flights" />
        </div>
      </div>
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <h2 className="mb-6 text-2xl font-bold">Popular Destinations</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {['London - New York', 'London - Dubai', 'London - Singapore'].map((route) => (
            <div key={route} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 font-semibold">{route}</h3>
              <p className="mb-4 text-gray-600">From £299</p>
              <button className="text-blue-500 hover:text-blue-600">View Deals →</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
