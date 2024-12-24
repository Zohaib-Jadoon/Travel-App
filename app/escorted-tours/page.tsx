import Navbar from '../../components/navigation/navbar';
import Image from 'next/image'; // Importing Image component

export default function EscortedTours() {
  return (
    <main>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-500 to-blue-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Escorted Tours
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Destination</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Europe</option>
                  <option>Asia</option>
                  <option>Americas</option>
                  <option>Africa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tour Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Cultural</option>
                  <option>Adventure</option>
                  <option>Wildlife</option>
                  <option>Historical</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>1-2 weeks</option>
                  <option>2-3 weeks</option>
                  <option>3+ weeks</option>
                </select>
              </div>
            </div>
            <button className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Find Tours
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Italian Renaissance Tour',
              duration: '10 days',
              price: '£1,999',
              description: 'Explore the art and culture of Italy\'s most beautiful cities'
            },
            {
              title: 'Japan Discovery',
              duration: '14 days',
              price: '£2,999',
              description: 'Experience the perfect blend of ancient and modern Japan'
            }
          ].map((tour) => (
            <div key={tour.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt={tour.title}
                width={640}
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">              
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">{tour.duration}</p>
                    <p className="font-semibold">From {tour.price}</p>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    View Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

