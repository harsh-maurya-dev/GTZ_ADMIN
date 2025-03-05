import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function ChallengeAdd() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        featureDetails: [""] // Start with one empty feature detail
    });

    // Handle input changes for name and price
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle input changes for feature details
    const handleFeatureChange = (index, value) => {
        const updatedFeatures = [...formData.featureDetails];
        updatedFeatures[index] = value;
        setFormData({
            ...formData,
            featureDetails: updatedFeatures
        });
    };

    // Add a new feature input field
    const addMoreFeatureBtn = () => {
        setFormData({
            ...formData,
            featureDetails: [...formData.featureDetails, ""]
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        const token = localStorage.getItem("token")
        if (!token) {
            toast.error("No token found. Please log in again.", { style: { backgroundColor: "#1a406a", color: "#fff" } });
            return;
        }
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/trading/createChallenge`,
                {
                    "phases": [
                        {
                            "name": formData.name,
                            "price": Number(formData.price),  // Ensure price is a number
                            "features": formData.featureDetails
                        }
                    ]
                },
                {
                    headers: {
                        "accept": "application/json",
                        "x-auth-token-user": token,
                    },
                }
            )
            if(response.data.error === false){
                toast.success(response.data.message, { style: { backgroundColor: "#1a406a", color: "#fff" } }); 
                setFormData({
                    name: "",
                    price: "",
                    featureDetails: [""],
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="mt-4">
                <div className="comman-tabs">
                    <div className="d-flex justify-content-between">
                        <ul className="nav nav-pills" id="competitionTabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="future-tab" data-bs-toggle="tab"
                                    data-bs-target="#future" type="button" role="tab" aria-controls="future"
                                    aria-selected="true">Phase 1</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="in-progress-tab" data-bs-toggle="tab"
                                    data-bs-target="#in-progress" type="button" role="tab"
                                    aria-controls="in-progress" aria-selected="false">Phase 2</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="completed-tab"
                                    data-bs-toggle="tab" data-bs-target="#completed" type="button" role="tab"
                                    aria-controls="completed" aria-selected="false">
                                    <i className="fa-solid fa-plus"></i>
                                    ADD More Phase
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Challenge Add</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="tab-content" id="competitionTabsContent">
                            <div className="tab-pane fade show active" id="future" role="tabpanel"
                                aria-labelledby="future-tab">
                                <h2 className="comman-heading border-2 border-bottom border-primary w-fit px-3">Add
                                    Phase 1</h2>
                                <div className="form-design">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="name" className="form-label">Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="price" className="form-label">Price</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="price"
                                                        value={formData.price}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <p className="fw-medium">Challenge Feature</p>
                                                <div className="row">
                                                    {formData.featureDetails.map((feature, index) => (
                                                        <div className="col-6" key={index}>
                                                            <div className="form-group">
                                                                <label htmlFor={`feature-${index}`} className="form-label">Feature Details</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={feature}
                                                                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group mt-4 pt-3">
                                                        <button
                                                            type="button"
                                                            className="comman-btn"
                                                            onClick={addMoreFeatureBtn}
                                                        >
                                                            <i className="fa-solid fa-plus"></i>
                                                            Add More Feature Option
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3 mt-3 mx-auto">
                                                <div className="form-group">
                                                    <button type="submit" className="comman-btn w-100">Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChallengeAdd;