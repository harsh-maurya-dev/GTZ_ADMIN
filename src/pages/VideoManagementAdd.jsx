import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const VideoManagementAdd = () => {
    // Single state object for form fields
    const [formData, setFormData] = useState({
        title: "",
        video_url: "",
        description: "",
    });

    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddVideo = async () => {
        // Validation
        if (!formData.title.trim() || !formData.video_url.trim() || !formData.description.trim()) {
            toast.error("Please fill all the required fields.", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
            return;
        }

        setLoading(true);

        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("No token found. Please log in again.", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/content/createVideoTutorial`,
                formData, // Send the entire formData object
                {
                    headers: {
                        "Accept": "application/json",
                        "x-auth-token-user": token,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data?.error === false) {
                toast.success(response.data.message, {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
                // Clear form fields after successful submission
                setFormData({
                    title: "",
                    video_url: "",
                    description: "",
                });
            } else {
                toast.error(response.data?.message || "An error occurred.", {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to add video.", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
        } finally {
            setLoading(false); // Ensure loading state resets
        }
    };

    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Video Add</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="form-design">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title" className="form-label">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="video_url" className="form-label">
                                            Video Link
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="video_url"
                                            value={formData.video_url}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="description" className="form-label">
                                            Description
                                        </label>
                                        <textarea
                                            className="form-control h-100"
                                            rows="4"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <button
                                            className="comman-btn"
                                            onClick={handleAddVideo}
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <span>Adding...</span>
                                            ) : (
                                                <>
                                                    <i className="fa-solid fa-plus pe-2"></i>ADD
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoManagementAdd;