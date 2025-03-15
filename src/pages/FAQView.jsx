import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const FAQView = () => {
    const { id } = useParams(); // Extract the FAQ ID from the URL
    const [faq, setFaq] = useState({});
    const [loading, setLoading] = useState(true);
    const {title, description, category} = faq

    useEffect(() => {
        const fetchFAQ = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("No token found. Please log in again.", {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/content/getFaqDetails/${id}`,
                    {
                        headers: {
                            "accept": "application/json",
                            "x-auth-token-user": token,
                        },
                    }
                );

                if (response.data.error === false) {
                    setFaq(response.data.results?.faqId);
                } else {
                    toast.error(response.data.message, {
                        style: { backgroundColor: "#1a406a", color: "#fff" },
                    });
                }
            } catch (error) {
                toast.error(error.message, {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
            } finally {
                setLoading(false);
            }
        };

        fetchFAQ();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (!faq) {
    //     return <div>No FAQ found.</div>;
    // }

    return (
        <>
            <div className="comman-design2 mt-4">
                <div className="comman-design-header">
                    <h2 className="comman-header">FAQ</h2>
                </div>
                <div className="comman-design-body">
                    <div className="row">
                        <div className="col-3">
                            <div className="form-group">
                                <p className="comman-heading">
                                    <i className="fa-solid fa-heading pe-2"></i>
                                    Title
                                </p>
                                <p className="m-0">{title}</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <p className="comman-heading">
                                    <i className="fa-solid fa-caret-down pe-2"></i>
                                    Category
                                </p>
                                <p className="m-0">{category}</p>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="form-group">
                                <p className="comman-heading">
                                    <i className="fa-solid fa-question pe-2"></i>
                                    FAQ
                                </p>
                                <p className="m-0">{description}</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <p className="comman-heading">
                                    <i className="fa-solid fa-language pe-2"></i>
                                    Language
                                </p>
                                <p className="m-0">English (En)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQView;