import React from 'react'

function ChallengeAdd() {
  return (
    <>
                         <div className="mt-4">
                        <div className="comman-tabs">
                            <div className="d-flex justify-content-between">
                                <ul className="nav nav-pills" id="competitionTabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="future-tab" data-bs-toggle="tab"
                                            data-bs-target="#future" type="button" role="tab" aria-controls="future"
                                            aria-selected="true">Phase 1</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="in-progress-tab" data-bs-toggle="tab"
                                            data-bs-target="#in-progress" type="button" role="tab"
                                            aria-controls="in-progress" aria-selected="false">Pahse 2</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="completed-tab"
                                            data-bs-toggle="tab" data-bs-target="#completed" type="button" role="tab"
                                            aria-controls="completed" aria-selected="false">
                                            <i className="fa-solid fa-plus"></i>
                                            ADD More Phase
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="comman-design2">
                            <div className="comman-design-header">
                                <h2 className="comman-heading">Challenge Add</h2>
                            </div>
                            <div className="comman-design-body">
                                <div className="tab-content" id="competitionTabsContent">
                                    <div className="tab-pane fade show active" id="future" role="tabpanel"
                                        aria-labelledby="future-tab">
                                        <h2 className="comman-heading border-2 border-bottom border-primary w-fit px-3">Add
                                            Phase 1</h2>
                                        <div className="form-design">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label for="" className="form-label">Name</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label for="" className="form-label">Price</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <p className="fw-medium">Challenge Feature</p>
                                                    <div className="row" id="addMoreFeature">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label for="" className="form-label">Feature Deatils</label>
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label for="" className="form-label">Feature Deatils</label>
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-group mt-4 pt-3">
                                                            <button className="comman-btn" onclick="addMoreFeatureBtn()">
                                                                <i className="fa-solid fa-plus"></i>
                                                                Add More Feature Option
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3 mt-3 mx-auto">
                                                    <siv className="form-group">
                                                        <button className="comman-btn w-100">Add</button>
                                                    </siv>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="in-progress" role="tabpanel"
                                        aria-labelledby="in-progress-tab">
                                        <h2 className="comman-heading border-2 border-bottom border-primary w-fit px-3">Add
                                            Phase 2</h2>
                                        <div className="form-design">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label for="" className="form-label">Name</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label for="" className="form-label">Price</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <p className="fw-medium">Challenge Feature</p>
                                                    <div className="row" id="addMoreFeature">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label for="" className="form-label">Feature Deatils</label>
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label for="" className="form-label">Feature Deatils</label>
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-group mt-4 pt-3">
                                                            <button className="comman-btn" onclick="addMoreFeatureBtn()">
                                                                <i className="fa-solid fa-plus"></i>
                                                                Add More Feature Option
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3 mt-3 mx-auto">
                                                    <siv className="form-group">
                                                        <button className="comman-btn w-100">Add</button>
                                                    </siv>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="completed" role="tabpanel"
                                        aria-labelledby="completed-tab">
                                        <h2 className="comman-heading border-2 border-bottom border-primary w-fit px-3">Add
                                            Phase 3</h2>
                                        <div className="form-design">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label for="" className="form-label">Name</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label for="" className="form-label">Price</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <p className="fw-medium">Challenge Feature</p>
                                                    <div className="row" id="addMoreFeature">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label for="" className="form-label">Feature Deatils</label>
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label for="" className="form-label">Feature Deatils</label>
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-group mt-4 pt-3">
                                                            <button className="comman-btn" onclick="addMoreFeatureBtn()">
                                                                <i className="fa-solid fa-plus"></i>
                                                                Add More Feature Option
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3 mt-3 mx-auto">
                                                    <siv className="form-group">
                                                        <button className="comman-btn w-100">Add</button>
                                                    </siv>
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

export default ChallengeAdd
