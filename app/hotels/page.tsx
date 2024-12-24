import Navbar from '../../components/navigation/navbar';
import Image from 'next/image'; // Importing Image component
import SearchForm from '../../components/search/search-form'

export default function Hotels() {
  return (
    <main>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-500 to-blue-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Find Your Perfect Hotel
          </h1>
          <SearchForm type="hotels" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Luxury Resort Dubai',
            'Beach Hotel Maldives',
            'City Center London'
          ].map((hotel) => (
            <div key={hotel} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt={hotel}
                width={640}
                height={256}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold mb-2">{hotel}</h3>
                <p className="text-gray-600 mb-4">From £199 per night</p>
                <button className="text-blue-500 hover:text-blue-600">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

