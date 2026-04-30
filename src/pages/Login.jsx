import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Validated Data:', data);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 px-4">
      {/* Background Glow */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative w-full max-w-md p-8 bg-slate-900/50 border border-slate-800 backdrop-blur-xl rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            ASI Logistics
          </h1>
          <p className="text-slate-400 mt-2">Welcome back to ASI Logistics</p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          autoComplete="off"
        >
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
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-300">
                Password
              </label>
              <a
                href="#"
                className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
              >
                Forgot?
              </a>
            </div>

            <input
              {...register('password')}
              type="password"
              autoComplete="current-password"
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

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/20 transform transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        {/* SIGNUP LINK */}
        <div className="mt-6 text-center">
          <p className="text-slate-400 text-sm">
            Don’t have an account?{' '}
            <a
              href="/signup"
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              Signup
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

export default Login;
