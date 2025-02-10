import React from 'react'

const PropPayout = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div>
                                <h2 className="comman-heading">Prop Payout Management</h2>
                                <span className="border rounded-pill py-1 px-3">3</span>
                            </div>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src="assets/img/bg-img/ChatBc.webp" alt="" className="w-100 h-100"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 comman-tabs">
                <ul className="nav nav-pills" id="competitionTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="All-tab" data-bs-toggle="tab" data-bs-target="#All"
                            type="button" role="tab" aria-controls="All" aria-selected="true">All</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="Approved-tab" data-bs-toggle="tab"
                            data-bs-target="#Approved" type="button" role="tab" aria-controls="Approved"
                            aria-selected="false">Approved</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="Pending-tab" data-bs-toggle="tab" data-bs-target="#Pending"
                            type="button" role="tab" aria-controls="Pending"
                            aria-selected="false">Pending</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="Rejected-tab" data-bs-toggle="tab"
                            data-bs-target="#Rejected" type="button" role="tab" aria-controls="Rejected"
                            aria-selected="false">Rejected</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="Revoked-tab" data-bs-toggle="tab" data-bs-target="#Revoked"
                            type="button" role="tab" aria-controls="Revoked"
                            aria-selected="false">Approved</button>
                    </li>
                </ul>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Prop Payout Management</h2>
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
                        {/* <!-- Tab Content --> */}
                        <div className="tab-content" id="competitionTabsContent">
                            {/* <!-- Future Competitions --> */}
                            <div className="tab-pane fade show active" id="All" role="tabpanel"
                                aria-labelledby="All-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Sr.no</th>
                                                <th>Date Of Request (UTC)</th>
                                                <th>Plan</th>
                                                <th>Login</th>
                                                <th>Status</th>
                                                <th>MT4 Amount</th>
                                                <th>Client Amount</th>
                                                <th>Current Balance</th>
                                                <th>Max Drawdown Equity Level</th>
                                                <th>Profit Share %</th>
                                                <th>Email</th>
                                                <th>Name</th>
                                                <th>Method</th>
                                                <th>Payout Details</th>
                                                <th>Staus</th>
                                                <th>Message</th>
                                                <th>Approve Date</th>
                                                <th>Rejected Date</th>
                                                <th>User</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>2024-07-04 | 13:54</td>
                                                <td>Forex Trader Funds - one Step Assessment -10K- DXTRADER</td>
                                                <td>55867</td>
                                                <td>Breached</td>
                                                <td>$1.00</td>
                                                <td>$0.00</td>
                                                <td>$180.00</td>
                                                <td>$180.00</td>
                                                <td>80.00</td>
                                                <td>jhon@gmail.com</td>
                                                <td>Jhon Doe</td>
                                                <td>Rise</td>
                                                <td>jhon@forextrader.com</td>
                                                <td>Approved</td>
                                                <td>test Payout</td>
                                                <td>202-12-2024 | 08:00 PM</td>
                                                <td>202-12-2024 | 08:00 PM</td>
                                                <td>Owned</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* <!-- In Progress Competitions --> */}
                            <div className="tab-pane fade" id="Approved" role="tabpanel"
                                aria-labelledby="in-progress-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Sr.no</th>
                                                <th>Date Of Request (UTC)</th>
                                                <th>Plan</th>
                                                <th>Login</th>
                                                <th>Status</th>
                                                <th>MT4 Amount</th>
                                                <th>Client Amount</th>
                                                <th>Current Balance</th>
                                                <th>Max Drawdown Equity Level</th>
                                                <th>Profit Share %</th>
                                                <th>Email</th>
                                                <th>Name</th>
                                                <th>Method</th>
                                                <th>Payout Details</th>
                                                <th>Staus</th>
                                                <th>Message</th>
                                                <th>Approve Date</th>
                                                <th>Rejected Date</th>
                                                <th>User</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* <!-- Completed Competitions --> */}
                            <div className="tab-pane fade" id="Pending" role="tabpanel"
                                aria-labelledby="completed-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Sr.no</th>
                                                <th>Date Of Request (UTC)</th>
                                                <th>Plan</th>
                                                <th>Login</th>
                                                <th>Status</th>
                                                <th>MT4 Amount</th>
                                                <th>Client Amount</th>
                                                <th>Current Balance</th>
                                                <th>Max Drawdown Equity Level</th>
                                                <th>Profit Share %</th>
                                                <th>Email</th>
                                                <th>Name</th>
                                                <th>Method</th>
                                                <th>Payout Details</th>
                                                <th>Staus</th>
                                                <th>Message</th>
                                                <th>Approve Date</th>
                                                <th>Rejected Date</th>
                                                <th>User</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="Rejected" role="tabpanel"
                                aria-labelledby="completed-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Sr.no</th>
                                                <th>Date Of Request (UTC)</th>
                                                <th>Plan</th>
                                                <th>Login</th>
                                                <th>Status</th>
                                                <th>MT4 Amount</th>
                                                <th>Client Amount</th>
                                                <th>Current Balance</th>
                                                <th>Max Drawdown Equity Level</th>
                                                <th>Profit Share %</th>
                                                <th>Email</th>
                                                <th>Name</th>
                                                <th>Method</th>
                                                <th>Payout Details</th>
                                                <th>Staus</th>
                                                <th>Message</th>
                                                <th>Approve Date</th>
                                                <th>Rejected Date</th>
                                                <th>User</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="Revoked" role="tabpanel"
                                aria-labelledby="completed-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Sr.no</th>
                                                <th>Date Of Request (UTC)</th>
                                                <th>Plan</th>
                                                <th>Login</th>
                                                <th>Status</th>
                                                <th>MT4 Amount</th>
                                                <th>Client Amount</th>
                                                <th>Current Balance</th>
                                                <th>Max Drawdown Equity Level</th>
                                                <th>Profit Share %</th>
                                                <th>Email</th>
                                                <th>Name</th>
                                                <th>Method</th>
                                                <th>Payout Details</th>
                                                <th>Staus</th>
                                                <th>Message</th>
                                                <th>Approve Date</th>
                                                <th>Rejected Date</th>
                                                <th>User</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropPayout
