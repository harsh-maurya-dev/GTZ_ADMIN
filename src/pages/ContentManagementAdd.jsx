import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import "quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const ContentManagementAdd = () => {
    const [formData, setFormData] = useState({
        type_key: "",
        status: "",
        content: "",
        heading: "",
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const modules = {
        toolbar: {
            container: [
                [{ 'header': [false, 1, 2, 3, 4, 5, 6] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' },
                { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image', 'video'],
                ['formula'],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                ['clean']
            ]
        }
    };

    const handleChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear errors when the user starts typing
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ""
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.heading) newErrors.heading = "Heading is required.";
        if (!formData.type_key) newErrors.type_key = "Type is required.";
        if (!formData.status) newErrors.status = "Status is required.";
        if (!formData.content) newErrors.content = "Content is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
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

        // console.log(formData);
        

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/content/createContent`,
                formData,
                {
                    headers: {
                        "accept": "application/json",
                        "x-auth-token-user": token,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.error === false) {
                toast.success(response.data?.message);
                // Reset form after successful submission
                setFormData({
                    type_key: "",
                    status: "",
                    content: "",
                    heading: "",
                });
            }
            else{
                toast.error(response.data.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
                }
        } catch (error) {
            toast.error(error.response?.data?.message || "", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Content Add</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="col-md-12 mb-4">
                            <div className="form-group">
                                <label htmlFor="heading" className="form-label">Heading</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.heading ? "is-invalid" : ""}`}
                                    value={formData.heading}
                                    onChange={(e) => handleChange("heading", e.target.value)}
                                />
                                {errors.heading && <div className="invalid-feedback">{errors.heading}</div>}
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="form-group col-md-6">
                                <label htmlFor="type_key" className="form-label">Type</label>
                                <select
                                    className={`form-select ${errors.type_key ? "is-invalid" : ""}`}
                                    value={formData.type_key}
                                    onChange={(e) => handleChange("type_key", e.target.value)}
                                >
                                    <option value="">--Select Type--</option>
                                    <option value="About Us">About Us</option>
                                    <option value="T&C">T&C</option>
                                    <option value="Privacy Policy">Privacy Policy</option>
                                </select>
                                {errors.type_key && <div className="invalid-feedback">{errors.type_key}</div>}
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="status" className="form-label">Status</label>
                                <select
                                    className={`form-select ${errors.status ? "is-invalid" : ""}`}
                                    value={formData.status}
                                    onChange={(e) => handleChange("status", e.target.value)}
                                >
                                    <option value="">--Select Status--</option>
                                    <option value="true">Published</option>
                                    <option value="false">Unpublished</option>
                                </select>
                                {errors.status && <div className="invalid-feedback">{errors.status}</div>}
                            </div>
                        </div>
                        <div id="editor-body-two" className="editor-container vh-100">
                            <div className="quill-wrapper w-100 h-100">
                                <ReactQuill
                                    theme="snow"
                                    name="content"
                                    value={formData.content}
                                    onChange={(value) => handleChange("content", value)}
                                    modules={modules}
                                    placeholder="Add Content"
                                    className={`custom-quill h-75 ${errors.content ? "is-invalid" : ""}`}
                                />
                                {errors.content && <div className="invalid-feedback">{errors.content}</div>}
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="comman-btn" onClick={handleSubmit} disabled={loading}>
                                {loading ? "Adding..." : "ADD"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContentManagementAdd;