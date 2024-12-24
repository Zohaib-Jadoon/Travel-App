// API endpoints
const API_ENDPOINTS = {
  FLIGHTS: '/api/flights',
  HOTELS: '/api/hotels',
  BOOKINGS: '/api/bookings',
  USER: '/api/user',
  PAYMENT: '/api/payment',
}

// Flight search
export async function searchFlights(params: {
  from: string
  to: string
  departDate: string
  returnDate?: string
  passengers: number
}) {
  const response = await fetch(API_ENDPOINTS.FLIGHTS + '/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  return response.json()
}

// Hotel search
export async function searchHotels(params: {
  location: string
  checkIn: string
  checkOut: string
  guests: number
}) {
  const response = await fetch(API_ENDPOINTS.HOTELS + '/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  return response.json()
}

// Create booking
export async function createBooking(bookingData: {
  type: 'flight' | 'hotel'
  itemId: string
  passengers?: Array<{
    firstName: string
    lastName: string
    dateOfBirth: string
  }>
  contactDetails: {
    email: string
    phone: string
  }
}) {
  const response = await fetch(API_ENDPOINTS.BOOKINGS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  })
  return response.json()
}

// Get user bookings
export async function getUserBookings() {
  const response = await fetch(API_ENDPOINTS.BOOKINGS + '/user')
  return response.json()
}

// Process payment
export async function processPayment(paymentData: {
  amount: number
  currency: string
  paymentMethod: 'card' | 'paypal'
  cardDetails?: {
    number: string
    expiry: string
    cvv: string
    name: string
  }
}) {
  const response = await fetch(API_ENDPOINTS.PAYMENT, { //Updated to use API_ENDPOINTS
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentData),
  })
  return response.json()
}

// User profile
export async function updateUserProfile(profileData: {
  name: string
  email: string
  phone: string
  preferences?: {
    seatPreference?: string
    mealPreference?: string
  }
}) {
  const response = await fetch(API_ENDPOINTS.USER + '/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profileData),
  })
  return response.json()
}

