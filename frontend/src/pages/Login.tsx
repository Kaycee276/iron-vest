import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { loginSchema } from '../utils/validators';
import { useAuthStore } from '../store/useAuthStore';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      // Validate with Zod
      loginSchema.parse(formData);

      // If valid, simulate login
      login({ id: '1', name: 'Operator', email: formData.email });
      navigate('/');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Clear error when typing
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: '' });
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 w-full">
      <div className="iron-card max-w-md w-full bg-[var(--color-bg-surface-elevated)] border-t-4 border-t-[var(--color-accent)] relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        ></div>

        <div className="relative z-10 text-center mb-8">
          <h1 className="text-3xl text-[var(--color-text-primary)] uppercase tracking-widest mb-2 font-['Orbitron']">
            Sign In
          </h1>
          <p className="text-[var(--color-text-muted)] font-sans">
            Access your secure portfolio.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="relative z-10 flex flex-col gap-5 font-sans"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm uppercase tracking-wider text-[var(--color-text-primary)]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-[var(--color-bg-base)] border p-3 text-[var(--color-text-primary)] focus:outline-none transition-colors ${
                errors.email
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-[var(--border-color)] focus:border-[var(--color-accent)]'
              }`}
              placeholder="operator@ironvest.com"
            />
            {errors.email && (
              <span className="text-red-500 text-xs font-medium">
                {errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="text-sm uppercase tracking-wider text-[var(--color-text-primary)]"
              >
                Passcode
              </label>
              <Link
                to="#"
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full bg-[var(--color-bg-base)] border p-3 pr-12 text-[var(--color-text-primary)] focus:outline-none transition-colors ${
                  errors.password
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-[var(--border-color)] focus:border-[var(--color-accent)]'
                }`}
                placeholder="••••••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500 text-xs font-medium">
                {errors.password}
              </span>
            )}
          </div>

          <button type="submit" className="iron-btn w-full mt-4 py-4">
            Authorize Access
          </button>
        </form>

        <div className="relative z-10 mt-8 text-center border-t border-[var(--border-color)]/30 pt-4">
          <p className="text-sm text-[var(--color-text-muted)] font-sans">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors uppercase tracking-widest text-xs font-bold"
            >
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
