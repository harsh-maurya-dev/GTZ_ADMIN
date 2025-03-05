const ReportsManagementAdd = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Reports Add</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="form-design">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Report Name</label>
                                        <select className="form-select" id="reportType">
                                            <option value="">Select Report Type</option>
                                            <option value="withdrawable-profile">Withdrawable Profile Report
                                            </option>
                                            <option value="account-status">Account Status Report</option>
                                            <option value="ip-address">IP Address Report</option>
                                            <option value="account-progress">Account in Progress Report</option>
                                            <option value="closed-trades">Closed Trades by Date</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Start Date</label>
                                        <input type="datetime-local" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">End Date</label>
                                        <input type="datetime-local" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Description</label>
                                        <textarea className="form-control h-100" rows="4"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <button className="comman-btn">ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportsManagementAdd
