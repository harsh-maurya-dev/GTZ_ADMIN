const RiskTriggersAdd = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Risk Triggers</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="form-design">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="service">Service</label>
                                        <input type="text" id="service" className="form-control"
                                            placeholder="Enter service name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="group">Group</label>
                                        <input type="text" id="group" className="form-control"
                                            placeholder="Enter group name" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="plan">Plan</label>
                                        <input type="text" id="plan" className="form-control"
                                            placeholder="Enter plan name" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="plan">Price</label>
                                        <input type="text" id="plan" className="form-control"
                                            placeholder="Enter plan name" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="direction">Direction</label>
                                        <select id="direction" className="form-control">
                                            <option>Up</option>
                                            <option>Down</option>
                                            <option>Neutral</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="form-group">
                                        <button className="comman-btn"><i className="fa-solid fa-plus me-2"></i>ADD</button>
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

export default RiskTriggersAdd
