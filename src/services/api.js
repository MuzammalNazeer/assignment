import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080/api';

// Create axios instance with default config
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // You can add auth tokens here if needed
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Contact API methods
export const contactAPI = {
    // Send contact message
    sendMessage: (contactData) =>
        api.post('/contact', contactData),

    // Get unread message count
    getUnreadCount: () =>
        api.get('/contact/unread-count'),

    // Mark message as read
    markAsRead: (id) =>
        api.put(`/contact/mark-read/${id}`),

    // Portfolio data
    getPortfolioData: () =>
        api.get('/portfolio/data'),
};

export default api;