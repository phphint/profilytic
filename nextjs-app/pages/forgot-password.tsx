import { useState } from "react";
import Head from "next/head";
import GeneralLayout from "../components/AuthLayout";
import Link from 'next/link'; // Importing the Link component

export default function PasswordForgotten() {
  const backgroundImageUrl = '/media/auth-bg.png';
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch(`${apiUrl}/api/users/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage('Password reset email sent. Please check your inbox.');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Password reset failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Forgot Password - Proflytic</title>
      </Head>
      <GeneralLayout backgroundImage={backgroundImageUrl}>
        <div className="container mx-auto p-4 flex justify-center">
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#233857', borderColor: '#7f8eab', color: '#7f8eab' }}
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button for Password Reset */}
            <div className="flex items-center justify-between">
              <button
                className="w-full bg-[#c5f6fa] hover:bg-[#b2e6ec] text-[#394774] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Reset Password'}
              </button>
            </div>

            {/* Message */}
            {message && <p className="text-green-500 text-xs italic mt-4">{message}</p>}
            {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}

            {/* Link to Login */}
            <div className="mt-4">
              <span className="text-white text-sm font-thin">Remembered your password? </span>
              <Link href="/login" passHref>
                <span className="text-white underline cursor-pointer text-sm font-thin">Login</span>
              </Link>
            </div>
          </form>
        </div>
      </GeneralLayout>
    </>
  );
}
