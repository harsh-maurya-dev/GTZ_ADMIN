import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ShimmerEffect from '../components/skeleton_loading/ShimmerEffect'
import axios from 'axios'
import { toast } from 'react-toastify'

function FAQ() {
    const [faqs, setFaqs] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const [selectedCustomerId, setSelectedCustomerId] = useState(null)
    const token = localStorage.getItem("token")

    const fetchFAQs = async (page) => {
        setLoading(true)
        if (!token) {
            toast.error("No token found. Please log in again.", { style: { backgroundColor: "#1a406a", color: "#fff" } })
            setLoading(false)
            return
        }

        try {
            // const params = {
            //     page,
            //     pageSize,
            // };

            const response = await axios.patch(
                `${import.meta.env.VITE_API_URL}/content/getFaqList`,
                {},
                {
                    headers: {
                        "accept": "application/json",
                        "x-auth-token-user": token,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    // params,
                },
            )

            if (response.data.error === false) {
                setFaqs(response.data.results.faqs)
                setTotalPages(response.data.results.totalPages || 1)
            }
        } catch (error) {
            toast.error(error.message, { style: { backgroundColor: "#1a406a", color: "#fff" } })
        } finally {
            setLoading(false)
        }
    }

    const deleteFaq = async () => {
        if (!token) {
            toast.error("No token found. Please log in again.", { style: { backgroundColor: "#1a406a", color: "#fff" } })
            return
        }
        try {
            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/content/deleteFaq/${selectedCustomerId}`,
                {
                    headers: {
                        "accept": "application/json",
                        "x-auth-token-user": token,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                },
            )

            if (response.data.error === false) {
                toast.success(response.data.message, { style: { backgroundColor: "#1a406a", color: "#fff" } })
                setIsOpenPopup(false)
                fetchFAQs()
            }
        } catch (error) {
            // toast.success(response.data.message, { style: { backgroundColor: "#1a406a", color: "#fff" } })
            toast.error(error.message, { style: { backgroundColor: "#1a406a", color: "#fff" } })
        }
    }

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage)
        }
    }

    useEffect(() => {
        fetchFAQs(currentPage);
    }, [currentPage, pageSize]);

    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div>
                                <h2 className="comman-heading">FAQ Management</h2>
                            </div>
                            <div>
                                <Link to="/FAQ_management_add" className="comman-btn">
                                    <i className="fa-solid fa-plus pe-2"></i>
                                    Add
                                </Link>
                            </div>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src="assets/img/bg-img/ChatBc.webp" alt="" className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comman-design2 mt-4">
                <div className="comman-design-header">
                    <h2 className="comman-header">FAQ</h2>
                </div>
                <div className="comman-design-body">
                    <div className="table-responsive">
                        {loading ? (
                            <ShimmerEffect />
                        ) : faqs.length > 0 ? (
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {faqs.map((faq, index) => (
                                        <tr key={faq?._id}>
                                            <td>{(currentPage - 1) * pageSize + index + 1}</td>
                                            <td>{faq?.title}</td>
                                            <td>{faq?.category}</td>
                                            <td>
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link to={`/FAQ_management_view/${faq?._id}`} className="table-icon bg-success">
                                                        <i className="fa-solid fa-desktop"></i>
                                                    </Link>
                                                    <Link to={`/FAQ_management_edit/${faq?._id}`}
                                                    state={{ faqData: faq }} 
                                                     className="table-icon bg-main">
                                                        <i className="fa-solid fa-pencil"></i>
                                                    </Link>
                                                    <Link to="#" className="table-icon bg-danger"
                                                        onClick={() => {
                                                            setSelectedCustomerId(faq?._id)
                                                            setIsOpenPopup(true)
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
                            <div className="text-center py-4">No FAQs found</div>
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
                                            <i className="fa fa-user-circle"></i> Confirm Delete Customer
                                        </h5>
                                        <button type="button" className="btn-close text-white bg-white" data-bs-dismiss="modal"
                                            aria-label="Close" id="closeDeleteUserModal" onClick={() => setIsOpenPopup(false)}></button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <div className="delete-icon">
                                            <i className="fa fa-times"></i>
                                        </div>
                                        <p className="mt-3 text-white">Are you sure you want to delete this Customer?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-light" onClick={() => setIsOpenPopup(false)}>Cancel</button>
                                        <button type="button" className="btn btn-danger" id="confirmDelete" onClick={() => deleteFaq(selectedCustomerId)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FAQ