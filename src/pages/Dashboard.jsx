import React from 'react'
import user2 from "../assets/img/user/user2.jpg"
import user3 from "../assets/img/user/user3.jpg"
import user4 from "../assets/img/user/user4.jpg"
import welcome from "../assets/img/bg-img/welcome-bg.webp"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const Dashboard = () => {

    const data = [
        { month: 'Aug', value1: 59, value2: 19 },
        { month: 'Sep', value1: 48, value2: 69 },
        { month: 'Oct', value1: 39, value2: 29 },
        { month: 'Nov', value1: 59, value2: 69 },
        { month: 'Dec', value1: 48, value2: 59 },
        { month: 'Jan', value1: 29, value2: 39 },
        { month: 'Feb', value1: 19, value2: 59 }
    ];

    const data4 = [
        {
            platform: "CTRADER",
            amount: 1500,
            Trading_Platforms: 600,
            color: "#018bfe"
        },
        {
            platform: "MATCHTRADER",
            amount: 2300,
            Trading_Platforms: 1000,
            color: "#3adab2"
        },
        {
            platform: "DX TRADER",
            amount: 1750,
            Trading_Platforms: 200,
            color: "#b86c03"
        },
        {
            platform: "MetaTrader 5",
            amount: 2800,
            Trading_Platforms: 2000,
            color: "#9966ff"
        },
    ]

    const data2 = [
        {
            "year": "2018",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "year": "2019",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "year": "2020",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "year": "2021",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "year": "2022",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "year": "2023",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "year": "2024",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    return (
        <>
            {/* Dashboard */}
            <div className="mt-4">
                <div className="row">
                    <div className="col-6">
                        <div className="rounded-4 bg-white welcome-card-wrapper">
                            <div className="d-flex justify-content-between welcome-card">
                                <div className="welcome-text p-4">
                                    <h2 className="">Welcome Mike <br />Nielsen</h2>
                                    <p className="">Check all the statastics</p>
                                    {/* <!-- <div className="mt-2">
                                                <button className="comman-btn">View All</button>
                                            </div> --> */}
                                </div>
                                <div className="welcome-img">
                                    <img src={welcome} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <div className="dash-card p-3 rounded-4 dash-card-1">
                                    <i className="fa-brands fa-salesforce"></i>
                                    <h5 className="">2358 <span className="">+23%</span></h5>
                                    <p className="text-sm fw-medium">Affiliates</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="dash-card p-3 rounded-4 dash-card-2">
                                    <i className="fa-solid fa-dollar-sign"></i>
                                    <h5 className="">356 <span className="">+8%</span></h5>
                                    <p className="text-sm fw-medium">Total Revenue</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="dash-card p-3 rounded-4 dash-card-3">
                                    <i className="fa-solid fa-users"></i>
                                    <h5 className="">235.8 <span className="">+3%</span></h5>
                                    <p className="text-sm fw-medium">Total Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-8">
                        <div className="comman-design">
                            <div className="mb-3 ps-4">
                                <h2 className="comman-heading">Profit & Expenses</h2>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={data}
                                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                                            <XAxis
                                                dataKey="month"
                                                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                                axisLine={{ stroke: '#4B5563' }}
                                            />
                                            <YAxis
                                                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                                axisLine={{ stroke: '#4B5563' }}
                                                domain={[0, 70]}
                                            />
                                            <Tooltip
                                                cursor={{ fill: 'rgba(255, 255, 255, 0.5)' }}
                                                contentStyle={{ backgroundColor: 'black', color: 'white', borderRadius: '5px' }}
                                            />
                                            <Bar
                                                dataKey="value1"
                                                fill="#0285da"
                                                radius={[8, 8, 0, 0]}
                                            />
                                            <Bar
                                                dataKey="value2"
                                                fill="#ff6f61"
                                                radius={[8, 8, 0, 0]}
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="col-4">
                                    <div className="mt-4">
                                        <div className="candle-text-area">
                                            <div className="row align-items-center">
                                                <div className="col-3">
                                                    <div className="candle-chart-icon bg-light-blue">
                                                        <i className="fa-solid fa-leaf text-white"></i>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <h5 className="fs-6 fw-medium m-0">$63,489.50</h5>
                                                    <p className="text-sm m-0 text-light-blue fw-medium">Earning
                                                        this year</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="candle-text-area">
                                            <div className="row align-items-center">
                                                <div className="col-3">
                                                    <div className="candle-chart-icon bg-pink">
                                                        <i className="fa-solid fa-eraser text-white"></i>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <h5 className="fs-6 fw-medium m-0">$48,820.00 </h5>
                                                    <p className="text-sm m-0 text-pink fw-medium">Profit this year
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="candle-text-area">
                                            <div className="row align-items-center">
                                                <div className="col-3">
                                                    <div className="candle-chart-icon bg-blue">
                                                        <i className="fa-solid fa-dollar-sign text-white"></i>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <h5 className="fs-6 fw-medium m-0">$103,582.50</h5>
                                                    <p className="text-sm m-0 text-blue fw-medium">Overall earnings
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="comman-design">
                            <div className="mb-3">
                                <h2 className="comman-heading">Product Sales</h2>
                            </div>
                            <div className="">
                                <AreaChart width={300} height={250} data={data2}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                                    <XAxis dataKey="year"
                                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                    />
                                    <YAxis hide />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(255, 255, 255, 0.5)' }}
                                        contentStyle={{ backgroundColor: 'black', color: 'white', borderRadius: '5px' }}
                                    />
                                    <Area type="monotone" dataKey="uv" stroke="##A0D1F9" fillOpacity={1} fill="#a0d1f9" />
                                    {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
                                </AreaChart>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 mt-4">
                        <div className="comman-design">
                            <div className="mb-3">
                                <h2 className="comman-heading">Top Customer</h2>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Profile</th>
                                            <th>Income</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <div className="table-img">
                                                        <img src={user4} alt="" />
                                                    </div>
                                                    <span>June R. Smith</span>
                                                </div>
                                            </td>
                                            <td>$19.00</td>
                                            <td>
                                                <div className="badge text-success bg-light-success">Active</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <div className="table-img">
                                                        <img src={user3} alt="" />
                                                    </div>
                                                    <span>Arya H. Shah</span>
                                                </div>
                                            </td>
                                            <td>$19.00</td>
                                            <td>
                                                <div className="badge text-success bg-light-success">Active</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <div className="table-img">
                                                        <img src={user2} alt="" />
                                                    </div>
                                                    <span>Nina R. Oldman</span>
                                                </div>
                                            </td>
                                            <td>$19.00</td>
                                            <td>
                                                <div className="badge text-danger bg-light-danger">InActive</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <div className="table-img">
                                                        <img src={user4} alt="" />
                                                    </div>
                                                    <span>Mark J. Freeman</span>
                                                </div>
                                            </td>
                                            <td>$19.00</td>
                                            <td>
                                                <div className="badge text-danger bg-light-danger">InActive</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 mt-4">
                        <div className="comman-design">
                            <div className="mb-3">
                                <h2 className="comman-heading">Traffic Distribution</h2>
                            </div>
                            <div className="">
                                <BarChart width={530} height={250} data={data4}>
                                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                                    <XAxis
                                        dataKey="platform"
                                        tick={{ fill: '#fff', fontSize: 14 }}
                                        axisLine={{ stroke: '#4B5563' }}
                                    />
                                    <YAxis
                                        dataKey="amount"
                                        tick={{ fill: '#9CA3AF' }}
                                        axisLine={{ stroke: '#4B5563' }}

                                    />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(255, 255, 255, 0.5)' }}
                                        contentStyle={{ backgroundColor: 'black', color: 'white', borderRadius: '5px' }}
                                    />
                                    <Legend />
                                    <Bar dataKey="Trading_Platforms" fill="#8884d8" />
                                    {/* <Bar dataKey="value" fill="color" /> */}
                                </BarChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
