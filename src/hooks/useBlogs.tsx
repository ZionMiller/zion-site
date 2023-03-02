import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const useBlogs = () => {

    const [articles, setArticles] = useState<any[]>([])

    const fetchArticles = async () => {
        const response = await axios.get(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zionmiller"
        );
        if (response && response.data) setArticles(response.data)
    } 
    useEffect(() => {
        fetchArticles()
    }, []);

    return { articles };
}