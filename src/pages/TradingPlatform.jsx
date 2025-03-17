import React, { useEffect, useState } from 'react';
import trading_image from "../assets/img/bg-img/ChatBc.webp";
import { toast } from 'react-toastify';
import { apiCall } from "../../api/ApiCall.js"
const TradingPlatform = () => {
    const [traders, setTraders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [year, setYear] = useState(2025);
    const [selectedTraderId, setSelectedTraderId] = useState(null);
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const fetchTraders = async (page) => {
        setLoading(true);

        try {
            const params = {
                page,
                pageSize,
                year, // Only add if selected
            };

            const response = await apiCall('patch', '/trading/tradingPlatforms', params);

            if (response.error === false) {
                setTraders(response.results.platforms);
                setTotalPages(response.results.totalPages || 1);
                console.log(response.results.platforms);
            }
        } catch (error) {
            toast.error(error.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
        } finally {
            setLoading(false);
        }
    };

    const deleteTrader = async (id) => {
        try {
            const response = await apiCall('delete', `/trading/deletePlatform/${id}`);

            if (response.error === false) {
                setTraders(traders.filter(trader => trader._id !== id));
                setIsOpenPopup(false);
                toast.success("Trader deleted successfully!", { style: { backgroundColor: "#1a406a", color: "#fff" } });
            }
        } catch (error) {
            toast.error(error.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
        }
    };

    useEffect(() => {
        fetchTraders();
    }, []);

    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <h2 className="comman-heading">Trading Platform</h2>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src={trading_image} alt="" className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Trading Platform</h2>
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
                                        <select className="form-select">
                                            <option value="">05</option>
                                            <option value="">10</option>
                                            <option value="">15</option>
                                            <option value="">20</option>
                                            <option value="">25</option>
                                            <option value="">30</option>
                                            <option value="">35</option>
                                            <option value="">40</option>
                                            <option value="">45</option>
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
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {traders.map((trader, index) => (
                                        <tr key={trader._id}>
                                            <td>{index + 1}</td>
                                            <td>{trader.name}</td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <div className="form-check form-switch status-button">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id={`switch-${trader._id}`}
                                                            checked={trader.status}
                                                            // onChange={() => toggleStatus(trader._id, trader.status)}
                                                        />
                                                        <label className="form-check-label" htmlFor={`switch-${trader._id}`}></label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center gap-2 align-items-center">
                                                    <button className="table-icon bg-danger" onClick={() => {
                                                        setSelectedTraderId(trader._id);
                                                        setIsOpenPopup(true);
                                                    }}>
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {isOpenPopup && (
                                <div className="modal fade user-modal show d-block" id="deleteUserModal" tabIndex="-1" aria-labelledby="deleteUserModalLabel"
                                    aria-hidden="true" style={{ backgroundColor: "#00000075" }}>
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content comman-design delete-user-modal">
                                            <div className="modal-header">
                                                <h5 className="modal-title text-white" id="deleteUserModalLabel">
                                                    <i className="fa fa-user-circle"></i> Confirm Delete Platform
                                                </h5>
                                                <button type="button" className="btn-close text-white bg-white" data-bs-dismiss="modal"
                                                    aria-label="Close" id="closeDeleteUserModal" onClick={() => setIsOpenPopup(false)}></button>
                                            </div>
                                            <div className="modal-body text-center">
                                                <div className="delete-icon">
                                                    <i className="fa fa-times"></i>
                                                </div>
                                                <p className="mt-3 text-white">Are you sure you want to delete this trading platform?</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-light" onClick={() => setIsOpenPopup(false)}>Cancel</button>
                                                <button type="button" className="btn btn-danger" id="confirmDelete" onClick={() => deleteTrader(selectedTraderId)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TradingPlatform;