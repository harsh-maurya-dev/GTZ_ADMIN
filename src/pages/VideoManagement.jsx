import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShimmerEffect from '../components/skeleton_loading/ShimmerEffect';
import { toast } from 'react-toastify';
import ytImg from "../assets/img/ytlogo.webp";
import { apiCall } from "../../api/ApiCall";
import bgImg from "../assets/img/bg-img/ChatBc.webp"

const VideoManagement = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [selectedVideoId, setSelectedVideoId] = useState(null);    

    const fetchVideos = async (page) => {
        setLoading(true);
        try {
            const response = await apiCall('patch', '/content/getVideoTutorialList', {});
            if (response.error === false) {
                setVideos(response.results?.videoTutorials);
                setTotalPages(response.results?.totalPages || 1);
            }
        } catch (error) {
            toast.error(error.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
        } finally {
            setLoading(false);
        }
    };

    const deleteVideo = async (id) => {        
        const button = document.getElementById("confirmDelete");
        button.style.cursor = "not-allowed";
        try {
            const response = await apiCall('delete', `/content/deleteVideoTutorial/${id}`);
            if (response.error === false) {
                toast.success(response.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
                setIsOpenPopup(false);
                fetchVideos(currentPage);
            }
        } catch (error) {
            toast.error(error.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        fetchVideos(currentPage);
    }, [currentPage, pageSize]);

    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div>
                                <h2 className="comman-heading">Video Management</h2>
                            </div>
                            <div>
                                <Link to="/video_management_add" className="comman-btn">
                                    <i className="fa-solid fa-plus pe-2"></i>
                                    Add
                                </Link>
                            </div>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src={bgImg} alt="" className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comman-design2 mt-4">
                <div className="comman-design-header">
                    <h2 className="comman-heading">Video Management</h2>
                    <div className="">
                        <div className="dropdown">
                            <button className="comman-btn bg-dark-main rounded-3 px-3" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-filter"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">
                                    <label className="form-label">Year</label>
                                    <select className="form-select">
                                        <option value="">2020</option>
                                        <option value="">2021</option>
                                        <option value="">2022</option>
                                        <option value="">2023</option>
                                        <option value="">2024</option>
                                    </select>
                                </li>
                                <li className="dropdown-item">
                                    <label className="form-label">Show List</label>
                                    <select className="form-select" onChange={(e) => setPageSize(Number(e.target.value))}>
                                        <option value="5">05</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                        <option value="25">25</option>
                                        <option value="30">30</option>
                                        <option value="35">35</option>
                                        <option value="40">40</option>
                                        <option value="45">45</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="comman-design-body">
                    <div className="table-responsive">
                        {loading ? (
                            <ShimmerEffect />
                        ) : videos.length > 0 ? (
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th>Title</th>
                                        <th>Video</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {videos.map((video, index) => (
                                        <tr key={video?._id}>
                                            <td>{(currentPage - 1) * pageSize + index + 1}</td>
                                            <td>{video?.title}</td>
                                            <td>
                                                <div className="w-50 mx-auto">
                                                    <img src={ytImg} alt="" className="w-25 h-50" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link to={`/video_management_view/${video?._id}`} className="table-icon bg-success"
                                                    state={{videoData:video}}>
                                                        <i className="fa-solid fa-desktop"></i>
                                                    </Link>
                                                    <Link to={`/video_management_edit/${video?._id}`}
                                                        state={{ videoData: video }}
                                                        className="table-icon bg-main">
                                                        <i className="fa-solid fa-pencil"></i>
                                                    </Link>
                                                    <Link to="#" className="table-icon bg-danger"
                                                        onClick={() => {
                                                            setSelectedVideoId(video?._id);
                                                            setIsOpenPopup(true);
                                                        }}>
                                                        <i className="fa-solid fa-trash"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="text-center py-4">No Videos found</div>
                        )}
                    </div>

                    {/* pagination */}
                    {totalPages > 1 && (
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-end pt-2">
                                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                </li>

                                {[...Array(totalPages)].map((_, index) => (
                                    <li
                                        key={index}
                                        className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}

                                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    )}

                    {/* delete popup close & open */}
                    {isOpenPopup && (
                        <div className="modal fade user-modal show d-block" id="deleteUserModal" tabIndex="-1" aria-labelledby="deleteUserModalLabel"
                            aria-hidden="true" style={{ backgroundColor: "#00000075" }}>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content comman-design delete-user-modal">
                                    <div className="modal-header">
                                        <h5 className="modal-title text-white" id="deleteUserModalLabel">
                                            <i className="fa fa-user-circle"></i> Confirm Delete Video
                                        </h5>
                                        <button type="button" className="btn-close text-white bg-white" data-bs-dismiss="modal"
                                            aria-label="Close" id="closeDeleteUserModal" onClick={() => setIsOpenPopup(false)}></button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <div className="delete-icon">
                                            <i className="fa fa-times"></i>
                                        </div>
                                        <p className="mt-3 text-white">Are you sure you want to delete this Video?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-light" onClick={() => setIsOpenPopup(false)}>Cancel</button>
                                        <button type="button" className="btn btn-danger" id="confirmDelete" onClick={()=>deleteVideo(selectedVideoId)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default VideoManagement;