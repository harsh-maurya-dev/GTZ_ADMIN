import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { apiCall } from "../../api/ApiCall";

const ContentManagementEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { contentData } = location.state || {};

    // State to manage form fields
    const [formData, setFormData] = useState({
        contentId: contentData?._id || "",
        heading: contentData?.heading || "",
        type_key: contentData?.type_key || "",
        status: contentData?.status || "",
        content: contentData?.content || "",
    });

    // Handle input changes
    const handleChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!formData.type_key || !formData.status || !formData.content || !formData.heading) {
            toast.error("Please fill all the required fields.", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
            return;
        }

        try {
            const response = await apiCall('put', '/content/updateContent', formData);

            if (response.error === false) {
                navigate("/content_management");
                toast.success(response.message, {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
            } else {
                toast.error(response.message || "Failed to update content", {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
            }
        } catch (error) {
            toast.error(error.message || "An error occurred!", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
        }
    };

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

    return (
        <div className="mt-4">
            <div className="comman-design2">
                <div className="comman-design-header">
                    <h2 className="comman-heading">Content Update</h2>
                </div>
                <div className="comman-design-body">
                    <div className="col-md-12 mb-4">
                        <div className="form-group">
                            <label htmlFor="heading" className="form-label">Heading</label>
                            <input
                                type="text"
                                className="form-select"
                                value={formData.heading}
                                onChange={(e) => handleChange("heading", e.target.value)}
                            />
                        </div>
                        <div className="col-md-12 mb-4">
                            <div className="row justify-content-end">
                                <div className="form-group col-md-6">
                                    <label htmlFor="type" className="form-label">Type</label>
                                    <select
                                        className="form-select"
                                        value={formData.type_key}
                                        onChange={(e) => handleChange("type_key", e.target.value)}
                                        required
                                    >
                                        <option value="">--Select Type--</option>
                                        <option value="About Us">About Us</option>
                                        <option value="T&C">T&C</option>
                                        <option value="Privacy Policy">Privacy Policy</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select
                                        className="form-select"
                                        value={formData.status}
                                        onChange={(e) => handleChange("status", e.target.value)}
                                        required
                                    >
                                        <option value="">--Select Status--</option>
                                        <option value="true">Published</option>
                                        <option value="false">Unpublished</option>
                                    </select>
                                </div>
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
                                    className="custom-quill h-75"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="comman-btn" onClick={handleSubmit}>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentManagementEdit;