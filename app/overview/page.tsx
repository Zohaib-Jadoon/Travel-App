import Navbar from '../../components/navigation/navbar'
import { theme } from '../../lib/theme'

export default function Overview() {
  return (
    <main className={theme.colors.background}>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <h1 className={`text-4xl font-bold ${theme.fonts.heading} ${theme.colors.text}`}>Welcome to TravelUp</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { emoji: '✈️', title: 'New offers sourced daily' },
              { emoji: '⭐', title: 'Over 110,000 5 star reviews' },
              { emoji: '🛡️', title: 'Our holidays are ATOL protected' },
              { emoji: '✅', title: 'IATA accredited agent' },
            ].map((item, index) => (
              <div key={index} className={`p-6 bg-white rounded-lg shadow-md ${theme.animations.fadeIn}`}>
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h2 className={`text-xl font-semibold mb-2 ${theme.colors.text}`}>{item.title}</h2>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className={`text-lg ${theme.colors.text}`}>
              Visit <a href="https://www.travelup.com/en-gb/en-g" className={`${theme.colors.primary} hover:underline`} target="_blank" rel="noopener noreferrer">
                www.travelup.com/en-gb/en-g
              </a> for more information
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

