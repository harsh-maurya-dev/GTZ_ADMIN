import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FAQAdd = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [language, setLanguage] = useState("en");
    const [category, setCategory] = useState("General");
    const [loading, setLoading] = useState(false);

    const handleAddFAQ = async () => {
        // Validation
        if (!title.trim() || !description.trim() ||  !category.trim()) {
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
                `${import.meta.env.VITE_API_URL}/content/createFaq`,
                {
                    title,
                    description,
                    category,
                },
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
                // ✅ Clear form fields after successful submission
                setTitle("");
                setDescription("");
                setLanguage("en");
                setCategory("General");
            } else {
                toast.error(response.data?.message || "An error occurred.", {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
                // console.log(response.data?.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to add FAQ.", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
            // console.log(error);
        } finally {
            setLoading(false); // ✅ Ensure loading state resets
        }
    };
    

    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">FAQ Add</h2>
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
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="language" className="form-label">
                                            Language
                                        </label>
                                        <select
                                            name="language"
                                            id="language"
                                            className="form-select"
                                            value={language}
                                            onChange={(e) => setLanguage(e.target.value)}
                                        >
                                            <option value="en">English (En)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="category" className="form-label">
                                            Category
                                        </label>
                                        <select
                                            name="category"
                                            id="category"
                                            className="form-select"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
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
                                        <label htmlFor="description" className="form-label">
                                            Description
                                        </label>
                                        <textarea
                                            className="form-control h-100"
                                            rows="4"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <button
                                            className="comman-btn"
                                            onClick={handleAddFAQ}
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

export default FAQAdd;