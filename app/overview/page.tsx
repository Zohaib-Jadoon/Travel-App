import Navbar from '../../components/navigation/navbar'

export default function Overview() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold">Welcome to TravelUp</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4 text-4xl">✈️</div>
              <h2 className="mb-2 text-xl font-semibold">New offers sourced daily</h2>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4 text-4xl">⭐</div>
              <h2 className="mb-2 text-xl font-semibold">Over 110,000 5 star reviews</h2>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4 text-4xl">🛡️</div>
              <h2 className="mb-2 text-xl font-semibold">Our holidays are ATOL protected</h2>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4 text-4xl">✅</div>
              <h2 className="mb-2 text-xl font-semibold">IATA accredited agent</h2>
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
