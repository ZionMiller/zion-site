import { useState, useEffect } from 'react';
import { stripHtmlTags } from '../utils/stripHtml';

const BlogFeed = () => {
  const [articles, setArticles] = useState([]);

  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zionmiller";

  useEffect(() => {
    fetch(mediumURL)
      .then((res) => res.json())
      .then((mediumRes) => setArticles(mediumRes.items.slice(0, 4))); 
  }, []);

  return (
    <section id="articles" className="py-16 bg-slate-100">
      <div className="container mx-auto px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Articles</h2>
        <div className="space-y-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">
                {article.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {stripHtmlTags(article.description).slice(0, 300)}
                {stripHtmlTags(article.description).length > 300 ? '...' : ''}
              </p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="https://medium.com/@zionmiller"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white"
          >
            Visit Medium Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogFeed;
