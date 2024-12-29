import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const protectedRoutes = ['/profile', '/my-bookings', '/reservations'];
    const isProtectedRoute = protectedRoutes.some(route => 
      req.nextUrl.pathname.startsWith(route)
    );

    if (isProtectedRoute && !req.nextauth.token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/profile', '/my-bookings', '/reservations'],
};
