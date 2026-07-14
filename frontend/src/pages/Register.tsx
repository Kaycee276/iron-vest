import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { registerSchema } from '../utils/validators';
import { useAuthStore } from '../store/useAuthStore';
import { api } from '../utils/api';
import { Loader2 } from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrengthError, setPasswordStrengthError] = useState('');

  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  const setLoading = useAuthStore((state) => state.setLoading);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      registerSchema.parse(formData);

      // Call API registration
      const response = await api.auth.register(formData);
      login(response.user, response.access_token);
      navigate('/home');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else if (error instanceof Error) {
        setErrors({ email: error.message });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (errors[id]) {
      setErrors({ ...errors, [id]: '' });
    }

    // Live password strength checking
    if (id === 'password') {
      try {
        registerSchema.shape.password.parse(value);
        setPasswordStrengthError(''); // Clear error if it passes all checks
      } catch (error) {
        if (error instanceof z.ZodError) {
          // Show the first requirement that fails
          setPasswordStrengthError(error.issues[0].message);
        }
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === 'name') {
      try {
        registerSchema.shape.name.parse(value);
        setErrors((prev) => ({ ...prev, name: '' }));
      } catch (error) {
        if (error instanceof z.ZodError) {
          setErrors((prev) => ({ ...prev, name: error.issues[0].message }));
        }
      }
    } else if (id === 'email') {
      try {
        registerSchema.shape.email.parse(value);
        setErrors((prev) => ({ ...prev, email: '' }));
      } catch (error) {
        if (error instanceof z.ZodError) {
          setErrors((prev) => ({ ...prev, email: error.issues[0].message }));
        }
      }
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 w-full">
      <div className="iron-card max-w-md w-full bg-(--color-bg-surface-elevated) border-t-4 border-t-(--color-accent) relative overflow-hidden">
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
          <h1 className="text-3xl text-(--color-text-primary) uppercase tracking-widest mb-2 font-['Orbitron']">
            Initialize
          </h1>
          <p className="text-(--color-text-muted) font-sans">
            Set up your secure Ironvest account.
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="relative z-10 flex flex-col gap-5 font-sans"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm uppercase tracking-wider text-(--color-text-primary)"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-(--color-bg-base) border p-3 text-(--color-text-primary) focus:outline-none transition-colors ${
                errors.name
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-(--border-color) focus:border-(--color-accent)'
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <span className="text-red-500 text-xs font-medium">
                {errors.name}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm uppercase tracking-wider text-(--color-text-primary)"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-(--color-bg-base) border p-3 text-(--color-text-primary) focus:outline-none transition-colors ${
                errors.email
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-(--border-color) focus:border-(--color-accent)'
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
            <label
              htmlFor="password"
              className="text-sm uppercase tracking-wider text-(--color-text-primary)"
            >
              Master Passcode
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full bg-(--color-bg-base) border p-3 pr-12 text-(--color-text-primary) focus:outline-none transition-colors ${
                  errors.password
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-(--border-color) focus:border-(--color-accent)'
                }`}
                placeholder="••••••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--color-text-muted) hover:text-(--color-text-primary) transition-colors"
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
            {/* Show dynamic strength error while typing, or submit error */}
            {(errors.password ||
              (passwordStrengthError && formData.password.length > 0)) && (
              <span className="text-red-500 text-xs font-medium">
                {errors.password || passwordStrengthError}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="iron-btn w-full mt-4 py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
            {isLoading ? 'Initializing...' : 'Create Account'}
          </button>
        </form>

        <div className="relative z-10 mt-8 text-center border-t border-(--border-color)/30 pt-4">
          <p className="text-sm text-(--color-text-muted) font-sans">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-(--color-accent) hover:text-(--color-text-primary) transition-colors uppercase tracking-widest text-xs font-bold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
