import React, { useState } from 'react';
export default function Paginations({ postsPerpage, totalPosts, paginate }) {
    const pageNumbers = [];
    const [activePage, setActivePage] = useState(1);
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
        pageNumbers.push(i);
    }
    const handlePageClick = (number) => {
        setActivePage(number);
        paginate(number)
    };
    const movepaginate = (number) => {
        if (number <= 1) {
            number = 1;
            paginate(1);
            handlePageClick(number)
        }
        else if (number >= 6) {
            number = 6;
            paginate(6)
            handlePageClick(number)
        }
        else {
            paginate(number)
            handlePageClick(number)
        }
    }
    return (
        <nav>
            <ul className='w-full flex mt-20 text-5xl'>
                {pageNumbers.map(number => (
                    <li key={number} className={`w-16 h-16 mx-8 flex rounded-full cursor-pointer justify-center items-center ${activePage === number ? 'bg-blue-200' : ''
                        }`} onClick={() => handlePageClick(number)}>
                        <a >
                            {number}
                        </a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}