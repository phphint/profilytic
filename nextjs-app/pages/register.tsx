import { useState } from 'react';
import Head from 'next/head';
import GeneralLayout from '../components/AuthLayout';
import Link from 'next/link';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TermsContent from '../components/TermsContent';

// Set the app element for accessibility
Modal.setAppElement('#__next');

// Define the validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  company: yup.string().required('Company is required'),
  termsAgreed: yup.boolean().oneOf([true], 'You must agree to the terms and conditions')
});

export default function Register() {
  const backgroundImageUrl = '/media/auth-bg-opt.png';
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('User registered:', result);
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Register - Proflytic</title>
      </Head>
      <GeneralLayout backgroundImage={backgroundImageUrl}>
        <div className="container mx-auto p-4 flex justify-center">
          <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#233857', borderColor: '#7f8eab', color: '#7f8eab' }}
              />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#233857', borderColor: '#7f8eab', color: '#7f8eab' }}
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register('password')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#233857', borderColor: '#7f8eab', color: '#7f8eab' }}
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
            </div>

            {/* Confirm Password Field */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-white text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register('confirmPassword')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#233857', borderColor: '#7f8eab', color: '#7f8eab' }}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
            </div>

            {/* Company Field */}
            <div className="mb-6">
              <label htmlFor="company" className="block text-white text-sm font-bold mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                {...register('company')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#233857', borderColor: '#7f8eab', color: '#7f8eab' }}
              />
              {errors.company && <p className="text-red-500 text-xs italic">{errors.company.message}</p>}
            </div>

            {/* Terms and Conditions */}
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2">
                <input
                  type="checkbox"
                  {...register('termsAgreed')}
                  className="mr-2 leading-tight"
                />
                I agree to the <span className="underline cursor-pointer" onClick={() => setModalIsOpen(true)}>Terms and Conditions</span>
              </label>
              {errors.termsAgreed && <p className="text-red-500 text-xs italic">{errors.termsAgreed.message}</p>}
            </div>

            {/* Register Button */}
            <div className="flex items-center justify-between">
              <button className="w-full bg-[#c5f6fa] hover:bg-[#b2e6ec] text-[#394774] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Register
              </button>
            </div>

            {/* Link to Login */}
            <div className="mt-4">
              <span className="text-white text-sm font-thin">Already have an account? </span>
              <Link href="/login" passHref>
                <span className="text-white underline cursor-pointer text-sm font-thin">Login</span>
              </Link>
            </div>
          </form>
        </div>

        {/* Terms and Conditions Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Terms and Conditions"
          className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-20 max-h-96 overflow-y-auto"
        >
          <TermsContent />
          <button onClick={() => setModalIsOpen(false)} className="mt-4 bg-[#c5f6fa] hover:bg-[#b2e6ec] text-[#394774] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Close
          </button>
        </Modal>
      </GeneralLayout>
    </>
  );
}
