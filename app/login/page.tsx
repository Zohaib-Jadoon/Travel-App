'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { theme } from '../../lib/theme'

export default function Login() {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (!result?.error) {
        router.push('/profile')
      } else {
        setError('Invalid credentials')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('An error occurred during login')
    }
  }


  return (
    <div className={`min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 ${theme.colors.background}`}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image src="/logo.png" alt="TravelUp" width={150} height={50} className="mx-auto" />
        <h2 className={`mt-6 text-center text-3xl font-extrabold ${theme.colors.text} ${theme.fonts.heading}`}>
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className={`bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ${theme.animations.fadeIn}`}>
          {error && (
            <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${theme.colors.text}`}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`mt-1 block w-full px-3 py-2 ${theme.inputs.default}`}
              />
            </div>
            <div>
              <label htmlFor="password" className={`block text-sm font-medium ${theme.colors.text}`}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`mt-1 block w-full px-3 py-2 ${theme.inputs.default}`}
              />
            </div>
            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${theme.buttons.primary} ${theme.animations.buttonHover}`}
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-2 bg-white ${theme.colors.text}`}>Or continue with</span>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={() => signIn('google', { callbackUrl: '/profile' })}
                className={`w-full flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium ${theme.colors.text} bg-white hover:bg-gray-50 ${theme.animations.buttonHover}`}
              >
                <Image src="/google-icon.png" alt="Google" width={20} height={20} />
                Sign in with Google
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/register" className={`text-sm ${theme.colors.primary} hover:text-opacity-90`}>
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

