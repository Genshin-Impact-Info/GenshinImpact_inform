import React, {useState} from 'react';
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
        if(number <= 1) {
            number = 1;
            paginate(1);
            handlePageClick(number)
        }
        else if(number >= 6) {
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mr-12 cursor-pointer" onClick={() => movepaginate(activePage-1)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                {pageNumbers.map(number => (
                    <li key={number} className={`w-16 h-16 mx-8 flex rounded-full cursor-pointer justify-center items-center ${activePage === number ? 'bg-blue-200' : ''
                        }`}>
                        <a onClick={() => handlePageClick(number)}>
                            {number}
                        </a>
                    </li>
                ))
                }
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 ml-12 cursor-pointer" onClick={() => movepaginate(activePage+1)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </ul>
        </nav>
    )
}