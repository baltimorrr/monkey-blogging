import React from "react";

const Pagination = () => {
    return (
        <div className="flex justify-center items-center gap-x-[10px]">
            <span className="pagination-prev">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </span>
            <ul className="pagination-list flex items-center gap-x-[10px]">
                <li className="pagination-item cursor-pointer w-[40px] h-[40px] flex justify-center items-center font-medium">1</li>
                <li className="pagination-item is-current cursor-pointer w-[40px] h-[40px] flex justify-center items-center font-medium">2</li>
                <li className="pagination-item cursor-pointer w-[40px] h-[40px] flex justify-center items-center font-medium">...</li>
                <li className="pagination-item cursor-pointer w-[40px] h-[40px] flex justify-center items-center font-medium">3</li>
                <li className="pagination-item cursor-pointer w-[40px] h-[40px] flex justify-center items-center font-medium">4</li>
                <li className="pagination-item cursor-pointer w-[40px] h-[40px] flex justify-center items-center font-medium">5</li>
            </ul>
            <span className="pagination-next">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </span>
        </div>
    );
};

export default Pagination;
