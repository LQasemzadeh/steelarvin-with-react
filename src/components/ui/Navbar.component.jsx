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
                                <ul className="p-2">
                                    <li><a>مخازن ذخیره</a></li>
                                    <li><a>کولر هوایی</a></li>
                                    <li><a>مبدل حرارتی</a></li>
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
                                <ul className="p-2">
                                    <li><a>مخازن ذخیره</a></li>
                                    <li><a>کولر هوایی</a></li>
                                    <li><a>مبدل حرارتی</a></li>
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
                        <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}><FaSearch /></button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className="absolute space-x-1 flex flex-row">
                                    <input
                                        type="text"
                                        className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-orange-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        placeholder="جستجو کنید ..."
                                    />
                                    <button className="px-4 text-white bg-orange-800 rounded-full ">
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


