import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiCall } from "../../api/ApiCall.js"

function ChallengeEdit() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        featureDetails: [""] // Start with one empty feature detail
    });

    // Add a new feature input field
    const addMoreFeatureBtn = () => {
        setFormData({
            ...formData,
            featureDetails: [...formData.featureDetails, ""]
        });
    };

    // Handle input change
    const handleInputChange = (index, event) => {
        const values = [...formData.featureDetails];
        values[index] = event.target.value;
        setFormData({
            ...formData,
            featureDetails: values
        });
    };

    // Handle name and price change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Fetch challenge details
    useEffect(() => {
        const fetchChallenge = async () => {
            try {
                const response = await apiCall('get', `/trading/getChallengeDetails/${id}`);

                if (response.error === false && response.results?.challenge) {
                    setFormData({
                        name: response.results.challenge.phases[0].name,
                        price: response.results.challenge.phases[0].price,
                        featureDetails: response.results.challenge.phases[0].features
                    });
                } else {
                    toast.error(response.message || "Failed to fetch challenge details.", {
                        style: { backgroundColor: "#1a406a", color: "#fff" },
                    });
                }
            } catch (error) {
                toast.error(error.message || "An error occurred while fetching challenge details.", {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
                console.error("Error fetching challenge details:", error);
            }
        };

        fetchChallenge();
    }, [id]);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await apiCall('put', `/trading/updateChallenge/${id}`, formData);

            if (response.error === false) {
                toast.success(response.message || "Challenge updated successfully.", {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
            } else {
                toast.error(response.message || "Failed to update challenge.", {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
            }
        } catch (error) {
            toast.error(error.message || "An error occurred while updating the challenge.", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
            console.error("Error updating challenge:", error);
        }
    };

    return (
        <>
            <div className="comman-tabs mt-4">
                <ul className="nav nav-pills" id="competitionTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="future-tab" data-bs-toggle="tab"
                            data-bs-target="#future" type="button" role="tab" aria-controls="future"
                            aria-selected="true">Phase 1</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="in-progress-tab" data-bs-toggle="tab"
                            data-bs-target="#in-progress" type="button" role="tab" aria-controls="in-progress"
                            aria-selected="false">Phase 2</button>
                    </li>
                </ul>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Challenge Update</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="tab-content" id="competitionTabsContent">
                            <div className="tab-pane fade show active" id="future" role="tabpanel"
                                aria-labelledby="future-tab">
                                <div className="form-design">
                                    <h2 className="comman-heading border-2 border-bottom border-primary w-fit px-3">
                                        Add Phase 1</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group w-50">
                                                    <label htmlFor="name" className="form-label">Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Expert"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <p className="fw-medium">Challenge Feature</p>
                                                <div className="row" id="addMoreFeature">
                                                    {formData.featureDetails.map((value, index) => (
                                                        <div className="col-6" key={index}>
                                                            <div className="form-group">
                                                                <label htmlFor={`feature-${index}`} className="form-label">Feature Details</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="6% Profit Target"
                                                                    value={value}
                                                                    onChange={(e) => handleInputChange(index, e)}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group mt-4 pt-3">
                                                        <button type="button" className="comman-btn" onClick={addMoreFeatureBtn}>
                                                            <i className="fa-solid fa-plus"></i>
                                                            Add More Feature Option
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3 mt-3 mx-auto">
                                                <div className="form-group">
                                                    <button type="submit" className="comman-btn w-100">Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="in-progress" role="tabpanel"
                                aria-labelledby="in-progress-tab">
                                <h2 className="comman-heading border-2 border-bottom border-primary w-fit px-3">Add Phase 2</h2>
                                {/* Add similar form for Phase 2 if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChallengeEdit;