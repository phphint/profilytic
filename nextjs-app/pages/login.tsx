import { useState, useEffect } from 'react';
import Head from 'next/head';
import GeneralLayout from '../components/AuthLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {
  const backgroundImageUrl = '/media/auth-bg.png';
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(`${apiUrl}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('token', result.token);
        setIsLoggedIn(true);
        router.push('/dashboard');  // Redirect to dashboard after login
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');  // Redirect to home page after logout
  };

  return (
    <>
      <Head>
        <title>Login - Profilytic</title>
      </Head>
      <GeneralLayout backgroundImage={backgroundImageUrl}>
        <div className="container mx-auto p-4 flex justify-center">
          {!isLoggedIn ? (
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
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
              <div className="mb-6">
                <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  style={{ backgroundColor: '#233857', borderColor: '#7f8eab', color: '#7f8eab' }}
                  disabled={isSubmitting}
                />
              </div>
              {errorMessage && <p className="text-red-500 text-xs italic mb-4">{errorMessage}</p>}
              <div className="flex items-center justify-between">
                <button
                  className="w-full bg-[#c5f6fa] hover:bg-[#b2e6ec] text-[#394774] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Signing In...' : 'Sign In'}
                </button>
              </div>
              <div className="mt-4">
                <Link href="/forgot-password" passHref>
                  <span className="text-white underline cursor-pointer text-sm font-thin">Forgot Password?</span>
                </Link>
              </div>
              <div className="mt-2">
                <span className="text-white text-sm font-thin">Don't have an account? </span>
                <Link href="/register" passHref>
                  <span className="text-white underline cursor-pointer text-sm font-thin">Register</span>
                </Link>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-white text-lg font-bold mb-4">You are logged in!</p>
              <button
                className="bg-[#c5f6fa] hover:bg-[#b2e6ec] text-[#394774] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </GeneralLayout>
    </>
  );
}
