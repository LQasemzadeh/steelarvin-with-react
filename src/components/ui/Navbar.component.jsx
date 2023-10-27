import React from 'react';
import { Link } from "react-router-dom";


const NavbarComponent = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">استیل آروین تاو </Link>

                    <div className="d-flex justify-content-center">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">خانه</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">محصولات و خدمات</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">گالری تصاویر</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">اخبار</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">درباره ما</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">تماس با ما</Link>
                            </li>

                        </ul>
                    </div>


                </div>

                <form className="container-fluid justify-content-end">
                    <button className="btn btn-sm btn-outline-secondary" type="button">مشاوره رایگان</button>
                </form>

            </nav>
        </div>

    );
};

export default NavbarComponent;

