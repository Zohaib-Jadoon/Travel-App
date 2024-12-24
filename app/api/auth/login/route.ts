import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Here you would typically validate the user's credentials against your database
    // For this example, we'll use a mock authentication
    if (email === 'user@example.com' && password === 'password') {
      // In a real application, you would generate a JWT token here
      return NextResponse.json({ success: true, message: 'Login successful' })
    } else {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ success: false, message: 'An error occurred' }, { status: 500 })
  }
}

