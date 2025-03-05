const PlanManagementAdd = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Plans Add</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="form-design">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Plan ID</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Group</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Product ID</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Leverage</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Price</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Internal Price</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Starting Balance</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Profit Targeted</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Daily Loss Limit ( %)</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Description</label>
                                        <textarea rows="4" className="form-control h-100"></textarea>
                                    </div>
                                </div>
                                <div className="mt-4">
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
            </div>
        </>
    )
}

export default PlanManagementAdd
