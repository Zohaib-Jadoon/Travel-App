'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { registerUser } from '../../lib/api'
import { theme } from '../../lib/theme'

export default function Register() {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const response = await registerUser({ name, email, password })
      if (response.success) {
        router.push('/login')
      } else {
        setError(response.message || 'Registration failed')
      }
    } catch (error) {
      console.error('Registration error:', error)
      setError('An error occurred during registration')
    }
  }

  return (
    <div className={`min-h-screen ${theme.colors.background} flex flex-col justify-center py-12 sm:px-6 lg:px-8`}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image src="/logo.png" alt="TravelUp" width={150} height={50} className="mx-auto" />
        <h2 className={`mt-6 text-center text-3xl font-extrabold ${theme.colors.text} ${theme.fonts.heading}`}>
          Create a new account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className={`bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ${theme.animations.fadeIn}`}>
          {error && (
            <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {['Full Name', 'Email address', 'Password', 'Confirm Password'].map((field) => (
              <div key={field}>
                <label htmlFor={field.toLowerCase().replace(' ', '-')} className={`block text-sm font-medium ${theme.colors.text}`}>
                  {field}
                </label>
                <input
                  id={field.toLowerCase().replace(' ', '-')}
                  name={field.toLowerCase().replace(' ', '')}
                  type={field.toLowerCase().includes('password') ? 'password' : field === 'Email address' ? 'email' : 'text'}
                  required
                  className={`mt-1 block w-full px-3 py-2 ${theme.inputs.default}`}
                />
              </div>
            ))}
            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${theme.buttons.primary} ${theme.animations.buttonHover}`}
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <Link href="/login" className={`text-sm ${theme.colors.primary} hover:text-opacity-90`}>
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

