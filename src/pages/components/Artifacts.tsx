import Header from '../../app/Header';
import '../../app/globals.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './paginations/Posts';
import Pagination from './paginations/Paginations';
import Loadingpage from './loading/Loadingpage'
export const Artifacts: React.FC = () => {
    const [loadjudge, setLoadjudge] = useState(true);
    const [getid, setGetid] = useState(1);
    const [getartifacts, setGetartifacts] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [count, setCount] = useState(1);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currenposts = getartifacts.slice(indexOfFirstPost, indexOfLastPost);
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://pinnate-leeward-legume.glitch.me/genshinAPI/artifacts`);
            console.log('rr');
            const Arraydata = response.data;
            setGetartifacts(Arraydata.data);
            console.log(getartifacts);
            setCount(count + 1);
            setLoadjudge(false);
        } catch (error) {
            console.error('Error fetching JSON:', error);
        }
    };
    useEffect(() => {

        if (count < 2) {
            fetchData();
        }
        console.log(getartifacts);
    }, []);
    const paginate = (pageNum) => {
        setCurrentPage(pageNum)
    }
    return (
        <>
            <Header />
            {
                loadjudge ?
                    <Loadingpage /> :
                    <div className="w-full h-auto min-h-full px-32 py-40 flex flex-col items-center">
                        <p className="text-black text-3xl mb-12">성유물</p>
                        <Posts posts={currenposts} />
                        <Pagination postsPerpage={postsPerPage} totalPosts={getartifacts.length} paginate={paginate} />
                    </div>
            }
        </>
    )
}

export default Artifacts;