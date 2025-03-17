import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiCall } from '../../api/ApiCall';

const FAQEdit = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { faqData } = location.state || {};

    // State to manage form fields
    const [formData, setFormData] = useState({
        faqId: faqData?._id || "",
        title: faqData?.title || "",
        category: faqData?.category || "",
        description: faqData?.description || "",
    });

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
            const response = await apiCall(
                'put',
                '/content/updateFaq',
                formData
            );

            if (response.error === false) {
                navigate("/FAQ_management")
                toast.success(response.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
            } else {
                toast.error(response.message || "Failed to update FAQ", { style: { backgroundColor: "#1a406a", color: "#fff" } });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred!", { style: { backgroundColor: "#1a406a", color: "#fff" } });
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