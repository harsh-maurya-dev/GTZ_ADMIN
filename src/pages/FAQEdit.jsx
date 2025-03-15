import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FAQEdit = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { faqData } = location.state || {}; // Safely access passed data
    // console.log(faqData);
    

    // State to manage form fields
    const [formData, setFormData] = useState({
        faqId:faqData?._id || "",
        title: faqData?.title || "",
        category: faqData?.category || "",
        description: faqData?.description || "",
    });

    // console.log(formData);
    

    // Populate form fields when faqData changes
    useEffect(() => {
        if (faqData) {
            setFormData((prevData) => ({
                ...prevData,
                title: faqData.title || "",
                category: faqData.category || "",
                description: faqData.description || "",
            }));
        }
    }, [faqData]);

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
                toast.error("User authentication failed!",  { style: { backgroundColor: "#1a406a", color: "#fff" } });
                return;
            }

            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/content/updateFaq`,
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
                navigate("/FAQ_management")
                toast.success(response.data?.message,  { style: { backgroundColor: "#1a406a", color: "#fff" } });
            } else {
                toast.error(response.data?.message || "Failed to update FAQ",  { style: { backgroundColor: "#1a406a", color: "#fff" } });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred!",  { style: { backgroundColor: "#1a406a", color: "#fff" } });
        }
    };

    return (
        <div className="mt-4">
            <div className="comman-design2">
                <div className="comman-design-header">
                    <h2 className="comman-heading">FAQ Update</h2>
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
                                        <label htmlFor="category" className="form-label">Category</label>
                                        <select
                                            name="category"
                                            className="form-select"
                                            value={formData.category}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            <option value="General">General</option>
                                            <option value="Operational">Operational</option>
                                            <option value="Evaluational">Evaluational</option>
                                            <option value="Payments">Payments</option>
                                            <option value="Rules">Rules</option>
                                            <option value="Partnership">Partnership</option>
                                        </select>
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

export default FAQEdit;
