import React, { useEffect, useState } from 'react'
import user4 from "../assets/img/user/user4.jpg"
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isOpenProfile, setIsOpenProfile] = useState(true)
    const menuRef = useRef(null)
    const [currentTheme, setCurrentTheme] = useState(() => {
        // Initialize theme from localStorage or default
        return localStorage.getItem('theme') || 'light-blue-white-color';
    });

    const [isOpen, setIsOpen] = useState(false)

    const themes = [
        { value: 'light-blue-white-color', label: 'Light Blue' },
        { value: 'yellow-color', label: 'Yellow' },
        { value: 'danger-color', label: 'Red' },
        { value: 'success-color', label: 'Green' },
        { value: 'gray-color', label: 'Gray' }
    ];

    // Apply theme to document body and main display
    useEffect(() => {
        // Remove all theme classes and add current theme
        document.body.classList.remove(
            'light-blue-white-color',
            'yellow-color',
            'danger-color',
            'success-color',
            'gray-color'
        );
        document.body.classList.add(currentTheme);

        // Apply to main display if it exists
        const mainDisplay = document.querySelector('.main-display');
        if (mainDisplay) {
            mainDisplay.classList.remove(
                'light-blue-white-color',
                'yellow-color',
                'danger-color',
                'success-color',
                'gray-color'
            );
            mainDisplay.classList.add(currentTheme);
        }

        // Save to localStorage
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    const handleThemeChange = (newTheme) => {
        setCurrentTheme(newTheme);
    };

    const logout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    // function toggleMenu () {
    //     setIsOpenProfile((prevState)=> !prevState)
    // }
    return (
        <>
            <div id="header" className="header">
                <div className="d-flex justify-content-end align-items-center h-100">
                    <div className={" change-color"} onClick={() => setIsOpen(!isOpen)}>
                        <div className={`change-color-item light-blue-white-color main-display`}></div>
                        <div className="change-color-dropdown">
                            {themes.map((theme, index) => (
                                <div className="d-flex justify-content-between gap-1" key={index}>
                                    <div className={`change-color-item ${theme.value}`}></div>
                                    <input type="radio" className="color-radio gray-color-radio"
                                        name="color-change"
                                        value={theme.value}
                                        checked={currentTheme === theme.value}
                                        onChange={() => handleThemeChange(theme.value)}
                                    />
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="me-3 notification-bell">
                        <i className="fa-solid fa-bell"></i>
                    </div>
                    <div className="position-relative custom-profile-dropdown">
                        <div className="profile" >
                            <div className="user mt-4">
                                <h3>Jhon Doe</h3>
                                <p>jhon@gmail.com</p>
                            </div>
                            <div className="img-box po" onClick={() => setIsOpenProfile(!isOpenProfile)}>
                                <img src={user4} alt="some user image" />
                            </div>
                        </div>
                        <div className={isOpenProfile ? "menu" : "menu active"} ref={menuRef}>
                            <ul>
                                <li><Link to="/profile_info" onClick={() => setIsOpenProfile(!isOpenProfile)}><i
                                    className="fa-solid fa-user text-main"></i>&nbsp;Profile</Link></li>
                                <li><Link to="/settings" onClick={() => setIsOpenProfile(!isOpenProfile)}><i className="fa-solid fa-gear text-main"></i>&nbsp;Settings</Link>
                                </li>
                                <li><Link to="/help" onClick={() => setIsOpenProfile(!isOpenProfile)}><i
                                    className="fa-brands fa-hire-a-helper text-main"></i>&nbsp;Help</Link></li>
                                <li><button type="button" onClick={logout}><i
                                    className="fa-solid fa-right-from-bracket text-main"></i>&nbsp;Sign
                                    Out</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
