import Navbar from '../../components/navigation/navbar'

export default function Overview() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">Welcome to TravelUp</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">✈️</div>
              <h2 className="text-xl font-semibold mb-2">New offers sourced daily</h2>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">⭐</div>
              <h2 className="text-xl font-semibold mb-2">Over 110,000 5 star reviews</h2>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛡️</div>
              <h2 className="text-xl font-semibold mb-2">Our holidays are ATOL protected</h2>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-xl font-semibold mb-2">IATA accredited agent</h2>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-lg text-gray-600">
              Visit <a href="https://www.travelup.com/en-gb/en-g" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                www.travelup.com/en-gb/en-g
              </a> for more information
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

