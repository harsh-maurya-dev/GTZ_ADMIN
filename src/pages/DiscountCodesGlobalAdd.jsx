const DiscountCodesGlobalAdd = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Global ADD</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="form-design">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Code</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Amount</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row mt-4">
                                        <label htmlFor="" className="form-label">Add-ons</label>
                                        <div className="col-auto">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckDefault" checked />
                                                <label className="form-check-label ps-3 mt-2"
                                                    htmlFor="flexSwitchCheckDefault">Profit Share</label>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckDefault" checked />
                                                <label className="form-check-label ps-3 mt-2"
                                                    htmlFor="flexSwitchCheckDefault">Hold Weekend</label>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckDefault" checked />
                                                <label className="form-check-label ps-3 mt-2"
                                                    htmlFor="flexSwitchCheckDefault">No Stop Loss</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Plan Type To Apply Discount To</label>
                                        <select name="" id="" className="form-select"></select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row mt-4">
                                        <div className="col-6">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckDefault" checked />
                                                <label className="form-check-label ps-3 mt-2"
                                                    htmlFor="flexSwitchCheckDefault">Limit Number Of Uses Per Client</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label htmlFor="" className="form-label">Usage Limit Per Client</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckDefault" checked />
                                                <label className="form-check-label ps-3 mt-2"
                                                    htmlFor="flexSwitchCheckDefault">Limit Number Of Uses Overall</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label htmlFor="" className="form-label">Usage Limit Per Overall</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-check form-switch mb-3">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckDefault" checked />
                                                <label className="form-check-label ps-3 mt-2"
                                                    htmlFor="flexSwitchCheckDefault">Limit Number Of Uses Only</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            {/* <!-- <div className="form-group">
                                                        <label htmlFor="" className="form-label">Usage Limit</label>
                                                        <input type="text" className="form-control"/>
                                                    </div> --> */}
                                        </div>
                                        <div className="col-6">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckDefault" checked />
                                                <label className="form-check-label ps-3 mt-2"
                                                    htmlFor="flexSwitchCheckDefault">Second or Subsequent Purchase</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label htmlFor="" className="form-label">Usage Limit</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="form-group">
                                        <p className="comman-heading">Limit To Specific Customer</p>
                                        <input type="search" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button className="comman-btn mt-4">
                                        <i className="fa-solid fa-download"></i>
                                        IMPORT CUSTOMER
                                    </button>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Start Date</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">End Date</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="comman-btn">
                                        <i className="fa-solid fa-plus"></i>
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscountCodesGlobalAdd
