import Head from "next/head";
import GeneralLayout from "../components/AuthLayout";
import Link from 'next/link'; // Importing the Link component


export default function Features() {
  return (
    <>
      <Head>
        <title>Login - Proflytic</title>
       </Head>
      <GeneralLayout>
        <div className="container mx-auto p-4 flex justify-center">
          <form className="w-full max-w-sm">
            <div className="mb-6">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{ backgroundColor: '#233857', borderColor: '#7f8eab', color: '#7f8eab' }} />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                Password
              </label>
              <input type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" style={{ backgroundColor: '#233857', borderColor: '#7f8eab', color: '#7f8eab' }} />
            </div>
            <div className="flex items-center justify-between">
            <button className="w-full bg-[#c5f6fa] hover:bg-[#b2e6ec] text-[#394774] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
              </button>
            </div>
            <div className="mt-4  ">
              <Link href="/forgot-password" passHref>
                <span className="text-white underline cursor-pointer text-sm font-thin">Forgot Password?</span>
              </Link>
            </div>
            <div className="mt-2  ">
              <span className="text-white text-sm font-thin">Don't have an account? </span>
              <Link href="/register" passHref>
                <span className="text-white underline cursor-pointer text-sm font-thin">Register</span>
              </Link>
            </div>
          </form>
        </div>
      </GeneralLayout>
    </>
  );
}
