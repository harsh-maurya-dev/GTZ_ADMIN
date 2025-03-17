import { useEffect, useState } from 'react';
import challenge_image from "../assets/img/bg-img/ChatBc.webp";
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiCall } from '../../api/ApiCall.js'

const Challenge = () => {
    const [challenges, setChallenges] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchParams, setSearchParam] = useSearchParams();
    const [pageSize, setPageSize] = useState(5);
    const [year, setYear] = useState(2025);

    const fetchChallenges = async (page) => {
        try {
            const params = {
                page,
                pageSize,
                year,
            };

            const response = await apiCall('patch', '/trading/getChallenges', params);

            if (response.error === false) {
                setChallenges(response.results?.challenges || []);
                setTotalPages(response.results.totalPages || 1);
            }
        } catch (error) {
            console.error("Error fetching challenges:", error);
            toast.error(error.message || "Failed to fetch challenges.", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        fetchChallenges(currentPage);
    }, [currentPage, pageSize, year]);

    useEffect(() => {
        setSearchParam({ page: currentPage, pageSize });
    }, [currentPage, pageSize, setSearchParam]);

    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div>
                                <h2 className="comman-heading">Challenge</h2>
                            </div>
                            <div>
                                <Link to="/challenge_add" className="comman-btn">
                                    <i className="fa-solid fa-plus"></i>
                                    Add
                                </Link>
                            </div>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src={challenge_image} alt="" className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Challenge</h2>
                        <div className="">
                            <div className="dropdown">
                                <button className="comman-btn bg-dark-main rounded-3 px-3" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-filter"></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <label className="form-label">Year</label>
                                        <select className="form-select" value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
                                            <option value={2020}>2020</option>
                                            <option value={2021}>2021</option>
                                            <option value={2022}>2022</option>
                                            <option value={2023}>2023</option>
                                            <option value={2024}>2024</option>
                                            <option value={2025}>2025</option>
                                        </select>
                                    </li>
                                    <li className="dropdown-item">
                                        <label className="form-label">Show List</label>
                                        <select className="form-select" value={pageSize} onChange={(e) => setPageSize(parseInt(e.target.value, 10))}>
                                            <option value={5}>05</option>
                                            <option value={10}>10</option>
                                            <option value={15}>15</option>
                                            <option value={20}>20</option>
                                            <option value={25}>25</option>
                                            <option value={30}>30</option>
                                            <option value={35}>35</option>
                                            <option value={40}>40</option>
                                            <option value={45}>45</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="comman-design-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th>Name</th>
                                        <th>
                                            <p className="m-0">Number Of Pass</p>
                                            <small>(Challenges)</small>
                                        </th>
                                        <th>
                                            <p className="m-0">Number Of Failed</p>
                                            <small>(Challenges)</small>
                                        </th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {challenges.map((challenge, index) => (
                                        <tr key={challenge._id}>
                                            <td>{(currentPage - 1) * pageSize + index + 1}</td>
                                            <td>{challenge.phases[0]?.name}</td>
                                            <td>{challenge.passed || 0}</td>
                                            <td>{challenge.failed || 0}</td>
                                            <td>
                                                <div className={`badge ${challenge.status ? "bg-light-success text-success" : "bg-light-danger text-danger"}`}>
                                                    {challenge.status ? "Active" : "Inactive"}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center gap-2 align-items-center">
                                                    <Link to={`/challenge_view/${challenge._id}`} className="table-icon bg-success">
                                                        <i className="fa-solid fa-desktop"></i>
                                                    </Link>
                                                    <Link to={`/challenge_edit/${challenge._id}`} className="table-icon bg-main">
                                                        <i className="fa-solid fa-pencil"></i>
                                                    </Link>
                                                    <a href="#" className="table-icon bg-danger">
                                                        <i className="fa-solid fa-trash"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Challenge;