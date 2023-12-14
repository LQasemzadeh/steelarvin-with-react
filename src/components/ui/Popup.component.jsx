import React from 'react';
import { FaTimes } from 'react-icons/fa'

const PopupComponent = () => {


    return (
        <div className="relative items-center top-12 right-96 z-50">
            <div className="relative items-center top-0 right-3 z-50">
                <FaTimes />
            </div>
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
    );
};

export default PopupComponent;