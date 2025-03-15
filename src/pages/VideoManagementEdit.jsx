import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VideoManagementEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { videoData } = location.state || {}; // Safely access passed data

    // State to manage form fields
    const [formData, setFormData] = useState({
        tutorialId: videoData?._id || "",
        title: videoData?.title || "",
        video_url: videoData?.video_url || "",
        description: videoData?.description || "",
    });

    // Populate form fields when videoData changes
    useEffect(() => {
        if (videoData) {
            setFormData((prevData) => ({
                ...prevData,
                title: videoData.title || "",
                video_url: videoData.video_url || "",
                description: videoData.description || "",
            }));
        }
    }, [videoData]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("User authentication failed!", { style: { backgroundColor: "#1a406a", color: "#fff" } });
                return;
            }

            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/content/updateVideoTutorial`,
                formData,
                {
                    headers: {
                        "Accept": "application/json",
                        "x-auth-token-user": token,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data?.error === false) {
                navigate("/Video_management");
                toast.success(response.data?.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
            } else {
                toast.error(response.data?.message || "Failed to update video", { style: { backgroundColor: "#1a406a", color: "#fff" } });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred!", { style: { backgroundColor: "#1a406a", color: "#fff" } });
        }
    };

    return (
        <div className="mt-4">
            <div className="comman-design2">
                <div className="comman-design-header">
                    <h2 className="comman-heading">Video Update</h2>
                </div>
                <div className="comman-design-body">
                    <div className="form-design">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="videoLink" className="form-label">Video Link</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="videoLink"
                                            value={formData.video_url}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <textarea
                                            className="form-control h-100"
                                            rows="4"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <button type="submit" className="comman-btn">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoManagementEdit;