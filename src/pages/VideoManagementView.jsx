import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VideoManagementView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [videoData, setVideoData] = useState(location.state?.videoData || null);
    const [loading, setLoading] = useState(!location.state?.videoData);

    useEffect(() => {
        // If videoData is not passed via location.state, fetch it from an API (if needed)
        if (!videoData) {
            // Example: Fetch video data from an API using an ID from the URL
            // const videoId = location.pathname.split("/").pop();
            // fetchVideoData(videoId);
            setLoading(false); // Set loading to false after fetching (or handle errors)
        }
    }, [videoData, location]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!videoData) {
        return <div>No video data available.</div>;
    }

    function formatDate(createdAt) {
        const date = createdAt.split("T")[0]
        return date
    }

    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Video Details</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="row">
                            <div className="col-12">
                                <div className="">
                                    <iframe
                                        className="w-100"
                                        height="500"
                                        src={videoData?.video_url}
                                        title="Video Player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-heading"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Title</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">{videoData?.title || "No Title Available"}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-heading"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Description</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">
                                            {videoData?.description || "No Description Available"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Created At</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">
                                            {formatDate(videoData?.createdAt) || "No Date Available"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Updated At</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">
                                            {formatDate(videoData?.updatedAt) || "No Date Available"}
                                        </p>
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

export default VideoManagementView;