import { Link } from "react-router-dom"

function DiscountCodes() {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div className="">
                                <h2 className="comman-heading">Discount Management</h2>
                                <span className="border rounded-pill py-1 px-3">2 Tabs</span>
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
            <div className="mt-4 comman-tabs">
                <ul className="nav nav-pills" id="breachTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="global-tab" data-bs-toggle="tab"
                            data-bs-target="#global" type="button" role="tab" aria-controls="global"
                            aria-selected="true">Global</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="regional-tab" data-bs-toggle="tab"
                            data-bs-target="#regional" type="button" role="tab" aria-controls="regional"
                            aria-selected="false">Breach</button>
                    </li>
                </ul>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="tab-content" id="breachTabsContent">
                        <div className="tab-pane fade show active" id="global" role="tabpanel"
                            aria-labelledby="global-tab">
                            <div className="comman-design-header">
                                <div className="d-flex gap-4">
                                    <h2 className="comman-heading mt-3">Global</h2>
                                    <div className="">
                                        <Link className="comman-btn" to="/discount_codes_management_global_add">
                                            <i className="fa-solid fa-plus pe-2"></i>
                                            ADD
                                        </Link>
                                    </div>
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
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>sr.no</th>
                                                <th>Code</th>
                                                <th>Total Usage</th>
                                                <th>Type</th>
                                                <th>Amount</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>FTF20</td>
                                                <td>2</td>
                                                <td>Percentage</td>
                                                <td>20</td>
                                                <td>
                                                    <div
                                                        className="d-flex justify-content-center gap-2 align-items-center">
                                                        <Link to="/discount_codes_management_global_view"
                                                            className="table-icon bg-success">
                                                            <i className="fa-solid fa-desktop"></i>
                                                        </Link>
                                                        <Link to="/discount_codes_management_global_edit"
                                                            className="table-icon bg-main">
                                                            <i className="fa-solid fa-pencil"></i>
                                                        </Link>
                                                        <Link to="#" className="table-icon bg-danger">
                                                            <i className="fa-solid fa-trash"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        {/* Breach section */}
                        <div className="tab-pane fade" id="regional" role="tabpanel" aria-labelledby="regional-tab">
                            <div className="comman-design-header">
                                <div className="d-flex gap-4">
                                    <h2 className="comman-heading mt-3">Breach</h2>
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
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>sr.no</th>
                                                <th>Code</th>
                                                <th>Total Usage</th>
                                                <th>Type</th>
                                                <th>Amount</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>FTF20</td>
                                                <td>2</td>
                                                <td>Percentage</td>
                                                <td>20</td>
                                                <td>
                                                    <div
                                                        className="d-flex justify-content-center gap-2 align-items-center">
                                                        <a href="breach_codes_view.html"
                                                            className="table-icon bg-success">
                                                            <i className="fa-solid fa-desktop"></i>
                                                        </a>
                                                        {/* <!-- <a href="discount_codes_edit.html"
                                                                    className="table-icon bg-main">
                                                                    <i className="fa-solid fa-pencil"></i>
                                                                </a> --> */}
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscountCodes
