import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import ShimmerEffect from '../components/skeleton_loading/ShimmerEffect';
import contentImage from "../assets/img/bg-img/ChatBc.webp";

const ContentManagement = () => {
    const [contentList, setContentList] = useState([]);
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [selectedContentId, setSelectedContentId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalContents, setTotalContents] = useState(0);
    const [searchParams, setSearchParam] = useSearchParams();
    const [pageSize, setPageSize] = useState(10);
    const [statusFilter, setStatusFilter] = useState('all');

    const fetchContent = async (page) => {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("No token found. Please log in again.", { style: { backgroundColor: "#1a406a", color: "#fff" } });
            setLoading(false);
            return;
        }

        try {
            const params = {
                page,
                pageSize,
                status: statusFilter === 'all' ? undefined : statusFilter,
            };

            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/content/getContentList`,
                {
                    params,
                    headers: {
                        "accept": "application/json",
                        "x-auth-token-user": token,
                    },
                }
            );

            if (response.data.error === false) {
                setContentList(response.data.results.contents);
                setTotalPages(response.data.results.totalPages || 1);
                setTotalContents(response.data.results.totalContents || 0);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
            
        } finally {
            setLoading(false);
        }
    };

    const deleteContent = async (id) => {
        const button = document.getElementById("confirmDelete");
        button.style.cursor = "not-allowed";

        const token = localStorage.getItem("token");
        try {
            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/content/deleteContent/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token-user": token,
                    },
                }
            );
            if (response.data.error === false) {
                toast.success(response.data.message);
                setIsOpenPopup(false);
                fetchContent(currentPage);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            button.style.cursor = "pointer";
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        fetchContent(currentPage);
    }, [currentPage, pageSize, statusFilter]);

    useEffect(() => {
        setSearchParam({ page: currentPage, pageSize });
    }, [currentPage, pageSize, setSearchParam]);

    function formatDate(createdAt) {
        const date = createdAt.split("T")[0];
        return date;
    }
    

    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div>
                                <h2 className="comman-heading">Content Management</h2>
                            </div>
                            <div>
                                <Link to="/content_management_add" className="comman-btn">
                                    <i className="fa-solid fa-plus pe-2"></i>
                                    Add
                                </Link>
                            </div>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src={contentImage} alt="" className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Content Management</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="table-responsive">
                            {loading ? (
                                <ShimmerEffect />
                            ) : contentList.length > 0 ? (
                                <table className="table table-hover">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Sr.no</th>
                                            <th>Title</th>
                                            <th>Status</th>
                                            <th>Updated At</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contentList.map((content, index) => (
                                            <tr key={content?._id}>
                                                <td>{(currentPage - 1) * pageSize + index + 1}</td>
                                                <td>{content?.heading}</td>
                                                <td>{content?.status === "true" ? "Published" : "Unpublished"}</td>
                                                <td>{formatDate(content?.updatedAt)}</td>
                                                <td>
                                                    <div className="d-flex gap-3 justify-content-center">
                                                        <Link to={`/content_management_view/${content?._id}`
                                                    } className="table-icon bg-success"
                                                    state={{ contentData: content }} >
                                                            <i className="fa-solid fa-desktop"></i>
                                                        </Link>
                                                        <Link to={`/content_management_edit/${content?._id}`} className="table-icon bg-main"
                                                        state={{ contentData: content }}>
                                                            <i className="fa-solid fa-pencil"></i>
                                                        </Link>
                                                        <div className="table-icon bg-danger" data-bs-toggle="modal" data-bs-target="#deleteContentModal"
                                                            onClick={() => {
                                                                setSelectedContentId(content?._id);
                                                                setIsOpenPopup(true);
                                                            }}>
                                                            <i className="fa-solid fa-trash"></i>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="text-center py-4">No contents found</div>
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
                            <div className="modal fade user-modal show d-block" id="deleteContentModal" tabIndex="-1" aria-labelledby="deleteContentModalLabel"
                                aria-hidden="true" style={{ backgroundColor: "#00000075" }}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content comman-design delete-user-modal">
                                        <div className="modal-header">
                                            <h5 className="modal-title text-white" id="deleteContentModalLabel">
                                                <i className="fa fa-user-circle"></i> Confirm Delete Content
                                            </h5>
                                            <button type="button" className="btn-close text-white bg-white" data-bs-dismiss="modal"
                                                aria-label="Close" id="closeDeleteContentModal" onClick={() => setIsOpenPopup(false)}></button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <div className="delete-icon">
                                                <i className="fa fa-times"></i>
                                            </div>
                                            <p className="mt-3 text-white">Are you sure you want to delete this Content?</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-light" onClick={() => setIsOpenPopup(false)}>Cancel</button>
                                            <button type="button" className="btn btn-danger" id="confirmDelete" onClick={() => deleteContent(selectedContentId)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContentManagement;