import React from 'react';


const NavbarComponent = () => {
    return (
        <div>
            <div className="navbar bg-primary-content text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>خانه</a></li>
                            <li>
                                <a>محصولات و خدمات</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>گالری تصاویر</a></li>
                            <li><a>مجله ما</a></li>
                            <li><a>درباره استیل آروین</a></li>
                            <li><a>تماس با ما</a></li>
                        </ul>
                    </div>
                    <a className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">استیل آروین تاو </a>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>خانه</a></li>
                        <li>
                            <details>
                                <summary>محصولات و خدمات</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>گالری تصاویر</a></li>
                        <li><a>مجله ما</a></li>
                        <li><a>درباره استیل آروین</a></li>
                        <li><a>تماس با ما</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn glass bg-orange-900">مشاوره رایگان</a>
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;