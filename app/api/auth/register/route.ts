import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // Here you would typically save the user's information to your database
    // For this example, we'll just return a success message
    console.log('Registering user:', { name, email, password })

    return NextResponse.json({ success: true, message: 'Registration successful' })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ success: false, message: 'An error occurred' }, { status: 500 })
  }
}

