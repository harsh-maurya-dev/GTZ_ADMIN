import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
});

/**
 * Common API call function with token validation
 * @param {string} method - HTTP method (e.g., 'get', 'post', 'patch', 'put', 'delete')
 * @param {string} url - API endpoint
 * @param {object} data - Request body (optional, defaults to {})
 * @returns {Promise} - Axios response or error with message
 */
export const apiCall = async (method, url, data = {}) => {
    // Get token from localStorage
    const token = localStorage.getItem("x-auth-token-user-gfz");
    const type = localStorage.getItem("x-auth-user-type");
    
    // Check if token exists
    if (!token) {
        // Create a standardized error response
        const error = new Error("No token found. Please log in again.");
        error.isAuthError = true; // Add custom flag to identify auth errors
        throw error;
    }
    
    // Set up config with token
    const config = {
        headers: {
            accept: "application/json",
            // "x-auth-token-user": token,
            "x-auth-token-user": token,
            "x-auth-user-type": type
        },
    };
    
    try {
        const response = await api({
            method,
            url,
            data,
            ...config,
        });
        return response.data; // Return only the data part of the response
    } catch (error) {
        console.error("API call failed:", error.message);
        throw error; // Re-throw the error for handling in the component
    }
};