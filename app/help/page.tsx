import Navbar from '../../components/navigation/navbar'

export default function Help() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold">Help Center</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How do I change my booking?',
                  a: 'You can modify your booking through your account dashboard or contact our customer service.'
                },
                {
                  q: 'What is your cancellation policy?',
                  a: 'Cancellation policies vary depending on the type of booking and provider. Please check your booking details.'
                },
                {
                  q: 'Is my payment secure?',
                  a: 'Yes, we use industry-standard encryption and secure payment processors to protect your information.'
                }
              ].map((faq, index) => (
                <div key={index} className="pb-4 border-b">
                  <h3 className="mb-2 font-medium">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-semibold">Contact Us</h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  0118-970-7574
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span>
                  support@travelup.com
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🕒</span>
                  24/7 Customer Support
                </p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-semibold">Need More Help?</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input
                    type="email"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
