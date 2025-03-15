import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContentManagementView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [contentData, setContentData] = useState(location.state?.contentData || null);
    const [loading, setLoading] = useState(!location.state?.contentData);

    // Fetch data if not passed via location state
    // useEffect(() => {
    //     if (!location.state?.contentData) {
    //         const fetchData = async () => {
    //             try {
    //                 // Replace with your actual API endpoint
    //                 const response = await fetch('https://api.example.com/content/67d1289cfae9bd2230327d67');
    //                 const data = await response.json();
    //                 setContentData(data);
    //             } catch (error) {
    //                 console.error("Error fetching data:", error);
    //             } finally {
    //                 setLoading(false);
    //             }
    //         };

    //         fetchData();
    //     }
    // }, [location.state]);

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