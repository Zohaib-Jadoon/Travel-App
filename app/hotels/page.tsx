import Navbar from '../../components/navigation/navbar';
import Image from 'next/image'; // Importing Image component
import SearchForm from '../../components/search/search-form'

export default function Hotels() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-12 bg-gradient-to-b from-blue-500 to-blue-400">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="mb-8 text-4xl font-bold text-center text-white">
            Find Your Perfect Hotel
          </h1>
          <SearchForm type="hotels" />
        </div>
      </div>
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <h2 className="mb-6 text-2xl font-bold">Featured Hotels</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            'Luxury Resort Dubai',
            'Beach Hotel Maldives',
            'City Center London'
          ].map((hotel) => (
            <div key={hotel} className="overflow-hidden bg-white rounded-lg shadow-md">
              <Image
                src="/placeholder.svg"
                alt={hotel}
                width={640}
                height={256}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-2 font-semibold">{hotel}</h3>
                <p className="mb-4 text-gray-600">From £199 per night</p>
                <button className="text-blue-500 hover:text-blue-600">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
