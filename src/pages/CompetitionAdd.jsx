const CompetitionAdd = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Competitions Add</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="form-design">
                            <div className="row">
                                <div className="col-5">
                                    <div className="form-group">
                                        <label htmlFor="competitionName" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="competitionName"
                                            placeholder="Competition Name"/>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="form-group">
                                        <label htmlFor="group" className="form-label">Group</label>
                                        <select className="form-select"></select>
                                    </div>
                                </div>
                                <div className="col-2 mt-4">
                                    <div className="form-group mt-4">
                                        <div className="form-check">
                                            <input className="form-check-input form-checkbox" type="checkbox"
                                                value="" id="flexCheckDisabled"/>
                                                <label className="form-check-label ps-3 mt-2" htmlFor="flexCheckDisabled">
                                                    Visible
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="minDays" className="form-label">Starting Balance</label>
                                        <input type="number" className="form-control" id="minDays" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="minDays" className="form-label">Levrage</label>
                                        <input type="number" className="form-control" id="minDays" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="minDays" className="form-label">Daily Loss Limit</label>
                                        <input type="number" className="form-control" id="minDays" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="minDays" className="form-label">Max Loss Limit</label>
                                        <input type="number" className="form-control" id="minDays" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="minDays" className="form-label">Min Trading Days</label>
                                        <input type="number" className="form-control" id="minDays" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="maxLots" className="form-label">Inactivity Period</label>
                                        <input type="number" className="form-control" id="maxLots" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="maxLots" className="form-label">Max Lots</label>
                                        <input type="number" className="form-control" id="maxLots" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="maxBreaches" className="form-label">Max Soft Breaches</label>
                                        <input type="number" className="form-control" id="maxBreaches"
                                            placeholder="Max Breaches"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="maxBreaches" className="form-label">Max Click Size</label>
                                        <input type="number" className="form-control" id="maxBreaches"
                                            placeholder="Max Breaches"/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label htmlFor="maxBreaches" className="form-label">Competition Start
                                            Date</label>
                                        <input type="date" className="form-control" id="maxBreaches"
                                            placeholder="Max Breaches"/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label htmlFor="maxBreaches" className="form-label">Competition Start Time
                                            (UTC)</label>
                                        <input type="time" className="form-control" id="maxBreaches"
                                            placeholder="Max Breaches"/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label htmlFor="maxBreaches" className="form-label">Competition End Date</label>
                                        <input type="date" className="form-control" id="maxBreaches"
                                            placeholder="Max Breaches"/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label htmlFor="maxBreaches" className="form-label">Competition End Time
                                            (UTC)</label>
                                        <input type="time" className="form-control" id="maxBreaches"
                                            placeholder="Max Breaches"/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label htmlFor="maxBreaches" className="form-label">Reg. Start Date</label>
                                        <input type="date" className="form-control" id="maxBreaches"
                                            placeholder="Max Breaches"/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label htmlFor="maxBreaches" className="form-label">Reg. Start Time
                                            (UTC)</label>
                                        <input type="time" className="form-control" id="maxBreaches"
                                            placeholder="Max Breaches"/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label htmlFor="maxBreaches" className="form-label">Reg. End Date</label>
                                        <input type="date" className="form-control" id="maxBreaches"
                                            placeholder="Max Breaches"/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label htmlFor="maxBreaches" className="form-label">Reg. End Time (UTC)</label>
                                        <input type="time" className="form-control" id="maxBreaches"
                                            placeholder="Max Breaches"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckDefault"/>
                                                    <label className="form-check-label ps-3 mt-2"
                                                        htmlFor="flexSwitchCheckDefault">Allow Expert Advisors -
                                                        MT5</label>
                                            </div>
                                            <div className="form-check form-switch mt-4">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckChecked" checked/>
                                                    <label className="form-check-label ps-3 mt-2"
                                                        htmlFor="flexSwitchCheckChecked">Make Drawdown Static</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group mt-4">
                                        <label htmlFor="" className="form-label">Price</label>
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                        name="flexRadioDefault" id="flexRadioDefault1"/>
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                            Cash
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                        name="flexRadioDefault" id="flexRadioDefault1"/>
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                            Other
                                                        </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Rule</label>
                                        <textarea className="form-control h-100" rows="4"></textarea>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="from-group">
                                        <button className="comman-btn"><i className="fa-solid fa-plus pe-2"></i>
                                            Add</button>
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

export default CompetitionAdd
