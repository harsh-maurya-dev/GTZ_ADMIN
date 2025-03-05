const CompetitionsEdit = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Competitions Update</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="form-design">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="competitionName" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="competitionName"
                                            placeholder="Competition Name" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="group" className="form-label">Group</label>
                                        <input type="text" className="form-control" id="group" placeholder="Group" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="minDays" className="form-label">Min Trading Days</label>
                                        <input type="number" className="form-control" id="minDays"
                                            placeholder="Min Days" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="maxLots" className="form-label">Max Lots</label>
                                        <input type="number" className="form-control" id="maxLots"
                                            placeholder="Max Lots" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="maxBreaches" className="form-label">Max Soft Breaches</label>
                                        <input type="number" className="form-control" id="maxBreaches"
                                            placeholder="Max Breaches" />
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="from-group">
                                        <button className="comman-btn">Update</button>
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

export default CompetitionsEdit
