import React from 'react';
import logoNav from "../../assets/images/logo.png";
import { FaSearch } from 'react-icons/fa';





const NavbarComponent = () => {




    return (
        <div>
            <div className="navbar z-50 fixed bg-primary-content text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>خانه</a></li>
                            <li>
                                <a>محصولات و خدمات</a>
                                <ul className="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
                                    <li>
                                        <a>مخازن ذخیره</a>
                                        <ul>
                                            <li><a>Design</a></li>
                                            <li><a>Development</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>کولر هوایی</a>
                                        <ul>
                                            <li><a>CRM software</a></li>
                                            <li><a>Marketing management</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>مبدل حرارتی</a>
                                        <ul>
                                            <li><a>UI Kit</a></li>
                                            <li><a>Wordpress themes</a></li>
                                            <li>
                                                <a>Open source</a>
                                                <ul>
                                                    <li><a>Auth management system</a></li>
                                                    <li><a>VScode theme</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a>گالری تصاویر</a></li>
                            <li><a>مجله ما</a></li>
                            <li><a>درباره استیل آروین</a></li>
                            <li><a>تماس با ما</a></li>
                        </ul>
                    </div>
                    <img src={ logoNav } className="object-contain" alt="logo"  />
                    <a className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 pr-2">استیل آروین تاو </a>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>خانه</a></li>
                        <li>
                            <details>
                                <summary>محصولات و خدمات</summary>
                                <ul className="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
                                    <li>
                                        <a>مخازن ذخیره</a>
                                        <ul>
                                            <li><a>Design</a></li>
                                            <li><a>Development</a></li>
                                            <li><a>Hosting</a></li>
                                            <li><a>Domain register</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>کولر هوایی</a>
                                        <ul>
                                            <li><a>Design</a></li>
                                            <li><a>Development</a></li>
                                            <li><a>Hosting</a></li>
                                            <li><a>Domain register</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>مبدل حرارتی</a>
                                        <ul>
                                            <li><a>UI Kit</a></li>
                                            <li><a>Wordpress themes</a></li>
                                            <li><a>Wordpress plugins</a></li>
                                            <li>
                                                <a>Open source</a>
                                                <ul>
                                                    <li><a>Auth management system</a></li>
                                                    <li><a>VScode theme</a></li>
                                                    <li><a>Color picker app</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
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
                    <div>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-ghost" onClick={()=>document.getElementById('my_modal_3').showModal()}><FaSearch /></button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <input type="text" placeholder="جستجو کنید ..." className="input input-bordered w-full max-w-xs" />
                                <button className="btn btn-circle text-white bg-orange-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>

                            </div>
                        </dialog>
                    </div>

                    <a className="btn glass bg-orange-900">مشاوره رایگان</a>
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;


