import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Validation schema
const signupSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Signup Data:', data);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 px-4">
      {/* Background Glow */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative w-full max-w-md p-8 bg-slate-900/50 border border-slate-800 backdrop-blur-xl rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Create Account
          </h1>
          <p className="text-slate-400 mt-2">Join ASI Logistics today</p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          autoComplete="off"
        >
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Full Name
            </label>
            <input
              {...register('name')}
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg outline-none transition-all text-white placeholder-slate-500 ${
                errors.name
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-slate-700 focus:ring-2 focus:ring-purple-500'
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <input
              {...register('email')}
              type="email"
              autoComplete="username"
              placeholder="admin@example.com"
              className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg outline-none transition-all text-white placeholder-slate-500 ${
                errors.email
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-slate-700 focus:ring-2 focus:ring-purple-500'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>
            <input
              {...register('password')}
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg outline-none transition-all text-white placeholder-slate-500 ${
                errors.password
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-slate-700 focus:ring-2 focus:ring-purple-500'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          {/* <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Confirm Password
            </label>
            <input
              {...register('confirmPassword')}
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg outline-none transition-all text-white placeholder-slate-500 ${
                errors.confirmPassword
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-slate-700 focus:ring-2 focus:ring-purple-500'
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div> */}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/20 transform transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        {/* LOGIN LINK */}
        <div className="mt-6 text-center">
          <p className="text-slate-400 text-sm">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              Login
            </a>
          </p>
        </div>

        {/* FOOTER */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest">
            Secure ASI Logistic
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
