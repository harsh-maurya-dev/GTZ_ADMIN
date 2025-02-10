import React from 'react'

function RiskTriggers() {
  return (
    <>
                         <div className="mt-4">
                        <div className="comman-design pb-0 light-list-blue">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex gap-3">
                                    <div>
                                        <h2 className="comman-heading">Risk Triggers</h2>
                                        <span className="border rounded-pill py-1 px-3">3</span>
                                    </div>
                                    <div>
                                        <a href="risk_triggers_add.html" className="comman-btn">
                                            <i className="fa-solid fa-plus pe-2"></i>
                                            Add
                                        </a>
                                    </div>
                                    <a className="risk-notification" href="risk_notification.html">
                                        <i className="fa-solid fa-bell"></i>
                                    </a>
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
                        <ul className="nav nav-pills" id="plansTabs" role="tablist">
                            <li className="nav-item">
                                <button className="nav-link active" id="one-step-assessment-tab" data-bs-toggle="tab"
                                    data-bs-target="#one-step-assessment" type="button" role="tab"
                                    aria-controls="one-step-assessment" aria-selected="true">One Step
                                    Assessment</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="one-step-funded-tab" data-bs-toggle="tab"
                                    data-bs-target="#one-step-funded" type="button" role="tab"
                                    aria-controls="one-step-funded" aria-selected="false">One Step
                                    Funded</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="phase-1-tab" data-bs-toggle="tab" data-bs-target="#phase-1"
                                    type="button" role="tab" aria-controls="phase-1" aria-selected="false">Two Step
                                    Assessment (Phase 1)</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="phase-2-tab" data-bs-toggle="tab" data-bs-target="#phase-2"
                                    type="button" role="tab" aria-controls="phase-2" aria-selected="false">Two Step
                                    Assessment (Phase 2)</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="instant-funding-tab" data-bs-toggle="tab"
                                    data-bs-target="#instant-funding" type="button" role="tab"
                                    aria-controls="instant-funding" aria-selected="false">Instant
                                    Funding</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="free-trial-tab" data-bs-toggle="tab"
                                    data-bs-target="#free-trial" type="button" role="tab" aria-controls="free-trial"
                                    aria-selected="false">Free Trial</button>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <div className="comman-design2">
                            <div className="comman-design-header">
                                <div className="d-flex gap-3">
                                    <h2 className="comman-heading">Risk Triggers</h2>
                                    
                                </div>
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
                                <div className="tab-content mt-4" id="plansTabsContent">
                                    <div className="tab-pane fade show active" id="one-step-assessment" role="tabpanel"
                                        aria-labelledby="one-step-assessment-tab">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>sr</th>
                                                        <th>Login</th>
                                                        <th>Name</th>
                                                        <th>Group</th>
                                                        <th>Ticket</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>1234</td>
                                                        <td>Jhon Doe</td>
                                                        <td>ForexTrader</td>
                                                        <td>Ticket</td>
                                                        <td>
                                                            <div
                                                                className="d-flex justify-content-center gap-2 align-items-center">
                                                                <a href="risk_triggers_view.html"
                                                                    className="table-icon bg-success">
                                                                    <i className="fa-solid fa-desktop"></i>
                                                                </a>
                                                                <a href="risk_triggers_edit.html"
                                                                    className="table-icon bg-main">
                                                                    <i className="fa-solid fa-pencil"></i>
                                                                </a>
                                                                <a href="" className="table-icon bg-danger">
                                                                    <i className="fa-solid fa-trash"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="one-step-funded" role="tabpanel"
                                        aria-labelledby="one-step-funded-tab">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>sr</th>
                                                        <th>Service</th>
                                                        <th>Group</th>
                                                        <th>Plan</th>
                                                        <th>Direction</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="phase-1" role="tabpanel"
                                        aria-labelledby="phase-1-tab">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>sr</th>
                                                        <th>Service</th>
                                                        <th>Group</th>
                                                        <th>Plan</th>
                                                        <th>Direction</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="phase-2" role="tabpanel"
                                        aria-labelledby="phase-2-tab">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>sr</th>
                                                        <th>Service</th>
                                                        <th>Group</th>
                                                        <th>Plan</th>
                                                        <th>Direction</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="instant-funding" role="tabpanel"
                                        aria-labelledby="instant-funding-tab">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>sr</th>
                                                        <th>Service</th>
                                                        <th>Group</th>
                                                        <th>Plan</th>
                                                        <th>Direction</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="free-trial" role="tabpanel"
                                        aria-labelledby="free-trial-tab">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>sr</th>
                                                        <th>Service</th>
                                                        <th>Group</th>
                                                        <th>Plan</th>
                                                        <th>Direction</th>
                                                        <th>Action</th>
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

export default RiskTriggers
