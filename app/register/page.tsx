"use client";
import { signIn } from 'next-auth/react'

export default function Register() {
  // ... (previous state and functions)

  const handleGoogleRegister = () => {
    signIn('google', { callbackUrl: '/profile' })
  }

  return (
    <div>
      {/* Other component content */}
      <button onClick={handleGoogleRegister} className="px-4 py-2 text-white bg-blue-500 rounded-md">
        Register with Google
      </button>
    </div>
  );
}

