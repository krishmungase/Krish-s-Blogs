import { createContext, useState } from "react";
import { baseUrl } from "../../BaseUrl";
import axios from 'axios';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setloading] = useState(false)
    const [post, setPost] = useState([])
    const [page, setPage] = useState(1)
    const [totalpages, setTotalpages] = useState(null)



    // Data filling

    async function fetchBlogPost(page = 1) {
        setloading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data)
            setPage(data.page);
            setPost(data.posts);
            setTotalpages(data.totalPages);
        } catch (error) {
            console.log("Error in Fetching Data")
            setPage(1);
            setPost([]);
            setTotalpages(null);
        }
        setloading(false);
    }


    function pageHandal(page) {
        setPage(page);
        fetchBlogPost(page);
    }

    const value = {
        post,
        setPost,
        loading,
        setloading,
        page,
        setPage,
        totalpages,
        setTotalpages,
        fetchBlogPost,
        pageHandal
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}


