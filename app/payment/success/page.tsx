import Link from 'next/link'
import Navbar from '../../../components/navigation/navbar'

export default function PaymentSuccess() {
  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Replacing Lucide CheckCircle with SVG */}
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            />
          </svg>
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your payment. Your transaction has been completed successfully.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
