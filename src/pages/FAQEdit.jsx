const FAQEdit = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">FAQ Update</h2>
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
                                        <label htmlFor="" className="form-label">Language</label>
                                        <select name="" id="" className="form-select"></select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Category</label>
                                        <select name="" id="" className="form-select"></select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Position</label>
                                        <input type="text" className="form-control" />
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

export default FAQEdit
