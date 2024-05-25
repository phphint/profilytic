import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import GeneralLayout from "../components/AuthLayout";

const ResetPassword: React.FC = () => {
  const backgroundImageUrl = '/media/auth-bg.png';
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!router.isReady) return;
    if (!token) {
      setError('Invalid or missing token.');
    } else {
      setError(''); // Clear error if token is present
    }
  }, [router.isReady, token]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsSubmitting(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch(`${apiUrl}/api/users/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, password })
      });

      if (response.ok) {
        setMessage('Password has been reset successfully. You can now log in.');
        router.push('/login');
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
        <title>Reset Password - Proflytic</title>
      </Head>
      <GeneralLayout backgroundImage={backgroundImageUrl}>
        <div className="container mx-auto p-4 flex justify-center">
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#233857', borderColor: '#7f8eab', color: '#7f8eab' }}
                disabled={isSubmitting}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-white text-sm font-bold mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#233857', borderColor: '#7f8eab', color: '#7f8eab' }}
                disabled={isSubmitting}
              />
            </div>
            {message && <p className="text-green-500 text-xs italic mt-4">{message}</p>}
            {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                className="w-full bg-[#c5f6fa] hover:bg-[#b2e6ec] text-[#394774] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Resetting...' : 'Reset Password'}
              </button>
            </div>
          </form>
        </div>
      </GeneralLayout>
    </>
  );
}

export default ResetPassword;
