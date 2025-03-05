const PropAccountEdit = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Prop Account Update</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="form-design">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">login id</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">customer ID</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">upgrades</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Internal Price</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Profit Target</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Plan ID</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Upgrade Plan</label>
                                        <input type="text" className="form-control" />
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
                                            <button className="comman-btn">Update</button>
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

export default PropAccountEdit
