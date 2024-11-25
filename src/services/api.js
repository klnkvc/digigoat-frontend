// services/api.js

const API_URL = 'http://localhost:5000/api';

// Fungsi umum untuk melakukan request ke backend
const apiRequest = async (endpoint, method = 'GET', body = null) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Jika ada body (untuk POST, PUT, dll), tambahkan ke request
    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json(); // Mengembalikan data JSON jika response berhasil
  } catch (error) {
    console.error('API Request Error:', error);
    throw error; // Melemparkan error untuk ditangani oleh pemanggil
  }
};

// Fungsi untuk mengambil data dari backend (GET request)
export const fetchData = async () => {
  return apiRequest('/data'); // Ambil data dari /data
};

// Fungsi untuk registrasi pengguna (POST request)
export const registerUser = async (fullName, email, password) => {
  return apiRequest('/register', 'POST', { fullName, email, password });
};

// Fungsi untuk login pengguna (POST request)
export const loginUser = async (email, password) => {
  return apiRequest('/login', 'POST', { email, password });
};

// Fungsi untuk mendapatkan data pengguna atau informasi lainnya
export const getUserData = async (userId) => {
  return apiRequest(`/users/${userId}`);
};
