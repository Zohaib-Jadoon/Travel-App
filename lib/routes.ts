export const routes = {
  home: '/',
  flights: '/flights',
  hotels: '/hotels',
  holidays: '/holidays',
  escortedTours: '/escorted-tours',
  reservations: '/reservations',
  myBookings: '/my-bookings',
  help: '/help',
  login: '/login',
  register: '/register',
  profile: '/profile',
  payment: '/payment',
  paymentSuccess: '/payment/success',
}

export const navigationLinks = [
  { name: 'Flights', path: routes.flights },
  { name: 'Hotels', path: routes.hotels },
  { name: 'Holidays', path: routes.holidays },
  { name: 'Escorted Tours', path: routes.escortedTours },
  { name: 'Reservations', path: routes.reservations },
]

export const userLinks = [
  { name: 'My Bookings', path: routes.myBookings },
  { name: 'Help', path: routes.help },
  { name: 'Profile', path: routes.profile },
]

