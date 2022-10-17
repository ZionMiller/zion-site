import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Blog = () => {
   const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zionmiller";
   const [profile, setProfile] = useState({
    name: 'Zion Miller',
    profileImage: '',
    profileUrl: ''
   })

   const [blog, setBlog] = useState({
    item: [],
    isLoading: true,
    error: null
   })

   const axios = require('axios').default

   useEffect(() => {
    axios.get(mediumURL)
    .then((details: { data: { feed: { image: any; link: any; items: any; }; }; }) => {
        const image = details.data.feed.image
        const link = details.data.feed.link
        const blogs = details.data.feed.items
        const posts = blogs.filter((post: { categories: string | any[]; }) => post.categories.length > 0)

        setProfile((p) => ({...p, profileUrl: link, profileImage: image}))
        setBlog({item: posts, isLoading: false, error: null})
    })
    // .catch(err => setBlog({error: err.message}))
   }, [axios])

//    if(blog.item) {
//     return blog.item.map((post, index) => (
//         <div key={index}>

//         </div>
//     ))
//    }

  return (
    <div style={{alignContent: "center"}}>Blog Feed coming soon!</div>
  )
}

export default Blog