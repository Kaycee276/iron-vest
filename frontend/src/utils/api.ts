import type { LoginFormData, RegisterFormData } from './validators';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

interface AuthResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

class ApiClient {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = localStorage.getItem('access_token');

    const headers = new Headers(options.headers);
    headers.set('Content-Type', 'application/json');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const errorMessage =
        errorData?.message || response.statusText || 'An error occurred';
      throw new Error(
        Array.isArray(errorMessage) ? errorMessage[0] : errorMessage
      );
    }

    return response.json();
  }

  auth = {
    login: (data: LoginFormData) =>
      this.request<AuthResponse>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    register: (data: RegisterFormData) =>
      this.request<AuthResponse>('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  };
}

export const api = new ApiClient();
