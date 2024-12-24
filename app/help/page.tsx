import Navbar from '../../components/navigation/navbar'

export default function Help() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Help Center</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
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
                <div key={index} className="border-b pb-4">
                  <h3 className="font-medium mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
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
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Need More Help?</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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

