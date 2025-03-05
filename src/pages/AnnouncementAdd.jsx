const AnnouncementAdd = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Announcement ADD</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="form-design">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Subject</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Language</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Date</label>
                                        <input type="datetime" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group mt-0">
                                        {/* <!-- <label htmlFor="" className="form-label">Pin</label> --> */}
                                        <div className="form-check form-switch mt-5">
                                            <input className="form-check-input" type="checkbox"
                                                id="flexSwitchCheckDefault" />
                                            <label className="form-check-label ps-3 mt-2" htmlFor="flexSwitchCheckDefault">Pin</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group mt-3">
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

export default AnnouncementAdd
