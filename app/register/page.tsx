// ... (previous imports)
import { signIn } from 'next-auth/react'

export default function Register() {
  // ... (previous state and functions)

  const handleGoogleRegister = () => {
    signIn('google', { callbackUrl: '/profile' })
  }

  return (
    <div>
      {/* Other component content */}
      <button onClick={handleGoogleRegister} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Register with Google
      </button>
    </div>
  );
}

