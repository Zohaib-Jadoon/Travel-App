export const routes = {
  register: '/register',
  home: '/',
  overview: '/overview',
  flights: '/flights',
  hotels: '/hotels',
  holidays: '/holidays',
  escortedTours: '/escorted-tours',
  myBookings: '/my-bookings',
  help: '/help',
  reservations: '/reservations',
  login: '/login',
  profile: '/profile',
  carBooking: '/reservations/car',
  busBooking: '/reservations/bus',
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

