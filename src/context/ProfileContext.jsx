import { createContext, useState, useEffect } from "react";
import { apiCall } from "../../api/ApiCall";

// Create Context
export const ProfileContext = createContext();

// Create Provider Component
export const ProfileProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");

    // Function to Fetch Profile Data
    const fetchProfile = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await apiCall('get', '/user/getMyProfile', {});
            setProfileData(response.results?.user);
            setMessage(response?.message);
        } catch (error) {
            setError(error.response?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    // Fetch profile data when component mounts
    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <ProfileContext.Provider value={{ profileData, loading, error, message, fetchProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};
