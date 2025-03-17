import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { apiCall } from "../../api/ApiCall.js";
import { toast } from "react-toastify";

const ContentManagementView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams(); // Get the content ID from the URL
    const [contentData, setContentData] = useState(location.state?.contentData || null);
    const [loading, setLoading] = useState(!location.state?.contentData);

    // Fetch data if not passed via location state
    useEffect(() => {
        if (!location.state?.contentData) {
            const fetchData = async () => {
                try {
                    const response = await apiCall('get', `/content/getContentById/${id}`);
                    if (response.error === false) {
                        setContentData(response.results);
                    } else {
                        toast.error(response.message || "Failed to fetch content data.", {
                            style: { backgroundColor: "#1a406a", color: "#fff" },
                        });
                    }
                } catch (error) {
                    toast.error(error.message || "An error occurred while fetching content data.", {
                        style: { backgroundColor: "#1a406a", color: "#fff" },
                    });
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [location.state, id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!contentData) {
        return <div>No content data available.</div>;
    }

    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Content Details</h2>
                    </div>
                    <div className="comman-design-body">
                        <div id="editor-body-two" className="editor-container">
                            <h1>{contentData?.type_key}</h1>
                            <h2>{contentData?.heading}</h2>
                            <div dangerouslySetInnerHTML={{ __html: contentData?.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContentManagementView;