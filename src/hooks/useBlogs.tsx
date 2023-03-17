import axios from 'axios';
import React, { useEffect, useState } from 'react';
import App from '../components/App';
import Blog from '../components/Blog';

interface FeedItem {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
  }

export const useBlogs = () => {

    const [articles, setArticles] = useState<FeedItem[]>([])

    const fetchArticles = async () => {
        const response = await axios.get(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zionmiller"
        );
        if (response && response.data) setArticles(response.data)
    } 
    useEffect(() => {
        fetchArticles()
    }, []);

    const regex = /(<([^>]+)>)/ig;

    const blogs = () => {
        articles.map((article) => (
            article.thumbnail,
            article.title,
            article.description.substring(0, 150).replace(regex, ''),
            article.link
        ))
    }

    return (
        blogs()
    )
}