// API endpoints
const API_ENDPOINTS = {
  FLIGHTS: '/api/flights',
  HOTELS: '/api/hotels',
  HOLIDAYS: '/api/holidays',
  TOURS: '/api/tours',
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

// Holiday search
export async function searchHolidays(params: {
  destination: string
  departureDate: string
  duration: number
  travelers: number
}) {
  const response = await fetch(API_ENDPOINTS.HOLIDAYS + '/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  return response.json()
}

// Tour search
export async function searchTours(params: {
  destination: string
  startDate: string
  duration: number
  groupSize: number
}) {
  const response = await fetch(API_ENDPOINTS.TOURS + '/search', {
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
  type: 'flight' | 'hotel' | 'holiday' | 'tour'
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
  const response = await fetch(API_ENDPOINTS.PAYMENT, {
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

// User registration
export async function registerUser(userData: {
  name: string
  email: string
  password: string
}) {
  const response = await fetch(API_ENDPOINTS.USER + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  return response.json()
}

// User login
export async function loginUser(credentials: {
  email: string
  password: string
}) {
  const response = await fetch(API_ENDPOINTS.USER + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
  return response.json()
}

// Signup function
export async function signupUser(userData: {
  fullName: string;
  email: string;
  password: string;
}) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
}

//Updated Process payment function
export async function processPayment2(paymentData: {
  amount: number;
  paymentMethod: string;
  cardDetails?: {
    number: string;
    expiry: string;
    cvc: string;
  };
}) {
  const response = await fetch('/api/payment/process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentData),
  });
  return response.json();
}

