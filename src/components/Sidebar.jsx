import React, { useEffect, useState } from 'react';
import ftf_logo from "../assets/img/gfz_logo.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Sidebar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);
    const navigate = useNavigate();


    const sidebarLinks = [
        { path: "/dashboard", icon: "fa-solid fa-home", name: "Dashboard" },
        { path: "/customers_management", icon: "fa-solid fa-users", name: "Customers Management" },
        { path: "/trading_platform", icon: "fa-solid fa-line-chart", name: "Trading Platform Magnet" },
        { path: "/challenge_management", icon: "fa-solid fa-tasks", name: "Challenge Management" },
        { path: "/orders_management", icon: "fa-solid fa-shopping-cart", name: "Orders Management" },
        { path: "/contract_management", icon: "fa-solid fa-user-circle", name: "Contracts Management" },
        { path: "/pending_upgrades", icon: "fa-solid fa-peace", name: "Pending Upgrades Magnet." },
        { path: "/risk_triggers", icon: "fa-solid fa-asterisk", name: "Risk Triggers Magnet." },
        { path: "/affiliates_management", icon: "fa-solid fa-user-alt", name: "Affiliates Management" },
        { path: "/affiliate_payout_management", icon: "fa-solid fa-user-friends", name: "Affiliate Payout Management" },
        { path: "/prop_account_management", icon: "fa-solid fa-user-times", name: "Prop Accounts Magnet" },
        { path: "/prop_payout_management", icon: "fa-solid fa-dollar-sign", name: "Prop Payout Management" },
        { path: "/plans_management", icon: "fa-solid fa-hand-holding-usd", name: "Plans Management" },
        { path: "/reports_management", icon: "fa-solid fa-exclamation", name: "Reports Management" },
        { path: "/content_management", icon: "fa-solid fa-pencil-square", name: "Content Management" },
        { path: "/FAQ_management", icon: "fa-solid fa-file", name: "FAQ Management" },
        { path: "/download_management", icon: "fa-solid fa-download", name: "Download Management" },
        { path: "/video_management", icon: "fa-solid fa-video-camera", name: "Video Tutorial Magnet" },
        { path: "/users_management", icon: "fa-solid fa-lock", name: "Users Management" },
        { path: "/announcement", icon: "fa-solid fa-volume-down", name: "Announcement" },
        { path: "/discount_codes_management", icon: "fa-solid fa-tags", name: "Discount Codes Magnet" },
        { path: "/email_management", icon: "fa-solid fa-envelope", name: "Email Management" },
        // { path: "/index", icon: "fa-solid fa-sign-out", name: "Logout" }
    ];

    const handleClick = (path) => {
        setSelected(path);
    };


    const handleLogout = () => {
        localStorage.removeItem("x-auth-token-user-gfz");
        toast.success("Logout successful!", {style:{backgroundColor:"#1a406a", color:"#fff"}});
        setTimeout(() => {
            window.location.reload();
            navigate("/login");
        }, 1500);
    };

    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]);

    return (
        <>
            <div className="sidebar">
                <div className="logo-wrapper">
                    <div className="">
                        <div className="logo">
                            <img src={ftf_logo} alt="" />
                        </div>
                        <div className="mt-2 w-100 bg-main text-white rounded-4 py-2 px-3 text-center">
                            <h2 className="logo-text m-0 fw-bold">Admin <span>Panel</span></h2>
                        </div>
                    </div>
                </div>
                <div className="sidebar-content">
                    {
                        sidebarLinks.map((value, index) => (
                            <Link to={value.path} className={selected === value.path ? "active" : ""} key={index} onClick={() => handleClick(value.path)}>
                                <span>
                                    <i className={value.icon}></i>
                                </span>
                                <span>{value.name}</span>
                            </Link>
                        ))
                    }
                    <Link to="#" className='logout' onClick={handleLogout}>
                        <span>
                            <i className="fa-solid fa-sign-out"></i>
                        </span>
                        <span>Logout</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;