const ContractTempleteEdit = () => {
    return (
        <>
            <div className="mt-4 comman-design2">
                <div className="comman-design-header">
                    <h2 className="comman-heading">Contract Templete Update</h2>
                </div>
                <div className="comman-design-body">
                    <div className="form-design">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Title</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Contract Type</label>
                                    <div className="d-flex gap-3 mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Prop Contract
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Affiliate Contract
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Description</label>
                                    <textarea rows="4" className="form-control h-100"></textarea>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    {/* <!-- <label htmlFor="" className="form-label">Requires Notification</label> --> */}
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label mt-2 ms-3" htmlFor="flexSwitchCheckDefault">Requires Verification</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Add Contract (PDF)</label>
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Upload</label>
                                        <div className="upload-img">
                                            <input type="file" className="form-upload" />
                                            <i className="fa solid fa-cloud-upload-alt upload-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <button className="comman-btn">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContractTempleteEdit
