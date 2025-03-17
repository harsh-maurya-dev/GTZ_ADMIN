import { useEffect, useState } from 'react';
import chatbc from "../assets/img/bg-img/ChatBc.webp";
import { toast } from 'react-toastify';
import { apiCall } from "../../api/ApiCall.js"

const PendingUpgrades = () => {
    const [isOpenReason, setIsOpenReason] = useState(false);
    const [pendingCustomer, setPendingCustomer] = useState([]);
    const [reason, setReason] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPendingUpgrades = async () => {
            try {
                const response = await apiCall('patch', '/user/getPendingUpgrades');

                if (response.error === false) {
                    setPendingCustomer(response.results?.customers || []);
                    console.log(response.results?.customers);
                } else {
                    toast.error(response.message || "Failed to fetch pending upgrades.", {
                        style: { backgroundColor: "#1a406a", color: "#fff" },
                    });
                }
            } catch (error) {
                toast.error(error.message || "An error occurred while fetching pending upgrades.", {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
                console.error("Error fetching pending upgrades:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPendingUpgrades();
    }, []);

    const rejectRequest = async (id) => {
        const status = "Rejected";
        const formData = {
            customerId: id,
            status: status,
            reason: reason
        };

        try {
            const response = await apiCall('put', '/user/acceptRejectCustomer', formData);

            if (response.error === false) {
                toast.success(response.message || "Request rejected successfully.", {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
                setIsOpenReason(false);
            } else {
                toast.error(response.message || "Failed to reject request.", {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
            }
        } catch (error) {
            toast.error(error.message || "An error occurred while rejecting the request.", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
            console.error("Error rejecting request:", error);
        }
    };

    const handleRejectClick = (id) => {
        setSelectedId(id);
        setIsOpenReason(true);
    };

    const renderCustomerRow = (customer, index) => {
        return (
            <tr key={customer._id}>
                <td>{index + 1}</td>
                <td>{customer.user_name || '-'}</td>
                <td>{customer.user_type || '-'}</td>
                <td>-</td>
                <td>{customer.activeStatus || '-'}</td>
                <td>-</td>
                <td>-</td>
                <td>{`${customer.first_name} ${customer.last_name}`}</td>
                <td>{customer.email}</td>
                <td>-</td>
                <td>{customer.is_verified ? 'Yes' : 'No'}</td>
                <td>-</td>
                <td>-</td>
                <td>{new Date(customer.createdAt).toLocaleDateString()}</td>
                <td>
                    <div className="d-flex gap-2 justify-content-center">
                        <button 
                            className="btn btn-md btn-danger rounded-circle" 
                            title="Reject"
                            onClick={() => handleRejectClick(customer._id)}
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div>
                                <h2 className="comman-heading">Pending Upgrades</h2>
                            </div>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src={chatbc} alt="" className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-tabs">
                    <ul className="nav nav-pills" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="all-tab" data-bs-toggle="tab"
                                data-bs-target="#all" type="button" role="tab" aria-controls="all"
                                aria-selected="true">All</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="succeeded-tab" data-bs-toggle="tab"
                                data-bs-target="#succeeded" type="button" role="tab" aria-controls="succeeded"
                                aria-selected="false">Eligible</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="failed-tab" data-bs-toggle="tab"
                                data-bs-target="#failed" type="button" role="tab" aria-controls="failed"
                                aria-selected="false">Not Eligible</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Pending Upgrades</h2>
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
                                            <option value="">2025</option>
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
                        <div className="tab-content mt-3" id="myTabContent">
                            <div className="tab-pane fade show active" id="all" role="tabpanel"
                                aria-labelledby="all-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>Login</th>
                                                <th>Type</th>
                                                <th>Starting Balance</th>
                                                <th>Status</th>
                                                <th>Upgraded From</th>
                                                <th>Order ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contract Status</th>
                                                <th>Verified</th>
                                                <th>Active Funded Accounts</th>
                                                <th>Profit Share</th>
                                                <th>Date Created</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <tr>
                                                    <td colSpan="15" className="text-center">Loading...</td>
                                                </tr>
                                            ) : pendingCustomer.length > 0 ? (
                                                pendingCustomer.map((customer, index) => renderCustomerRow(customer, index))
                                            ) : (
                                                <tr>
                                                    <td colSpan="15" className="text-center">No pending upgrades found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="succeeded" role="tabpanel"
                                aria-labelledby="succeeded-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>Login</th>
                                                <th>Type</th>
                                                <th>Starting Balance</th>
                                                <th>Status</th>
                                                <th>Upgraded From</th>
                                                <th>Order ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contract Status</th>
                                                <th>Verified</th>
                                                <th>Active Funded Accounts</th>
                                                <th>Profit Share</th>
                                                <th>Date Created</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <tr>
                                                    <td colSpan="15" className="text-center">Loading...</td>
                                                </tr>
                                            ) : pendingCustomer.filter(customer => customer.is_verified).length > 0 ? (
                                                pendingCustomer.filter(customer => customer.is_verified)
                                                    .map((customer, index) => renderCustomerRow(customer, index))
                                            ) : (
                                                <tr>
                                                    <td colSpan="15" className="text-center">No eligible upgrades found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="failed" role="tabpanel" aria-labelledby="failed-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>Login</th>
                                                <th>Type</th>
                                                <th>Starting Balance</th>
                                                <th>Status</th>
                                                <th>Upgraded From</th>
                                                <th>Order ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contract Status</th>
                                                <th>Verified</th>
                                                <th>Active Funded Accounts</th>
                                                <th>Profit Share</th>
                                                <th>Date Created</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <tr>
                                                    <td colSpan="15" className="text-center">Loading...</td>
                                                </tr>
                                            ) : pendingCustomer.filter(customer => !customer.is_verified).length > 0 ? (
                                                pendingCustomer.filter(customer => !customer.is_verified)
                                                    .map((customer, index) => renderCustomerRow(customer, index))
                                            ) : (
                                                <tr>
                                                    <td colSpan="15" className="text-center">No ineligible upgrades found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpenReason && (
                <div className="modal fade show" id="rejectModal" tabIndex="-1" aria-labelledby="rejectModalLabel" aria-modal="true" role="dialog" style={{ display: "block", backgroundColor: "#00000075" }}>
                    <div className="modal-dialog modal-md modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title comman-heading" id="rejectModalLabel">Reject Account Request</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsOpenReason(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    rejectRequest(selectedId);
                                }}>
                                    <div className="mb-3">
                                        <label htmlFor="rejectionReason" className="form-label">Reason for Rejection</label>
                                        <textarea className="form-control h-100" id="rejectionReason" rows="3" placeholder="Enter rejection reason" spellCheck="false" onChange={(e) => setReason(e.target.value)} required></textarea>
                                    </div>
                                    <button type="submit" className="comman-btn">Confirm Rejection</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PendingUpgrades;