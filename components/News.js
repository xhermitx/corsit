import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../styles/News.module.css';
import Fade from 'react-reveal/Fade';

const News = () => {
    const [articles, setArticles] = useState([]);

    const url = "https://newsapi.org/v2/everything";

    const config = {
        params: {
            q: "Robot",
            apiKey: '826d3102ac1747d4991b30e5f6ca86db'
    }}

    const index = Math.ceil(Math.random()*10);

    useEffect(() => {
        axios.get(url,config)
            .then(res =>{
                setArticles(res.data.articles);
            })
            .catch(err => {
                console.log(err.msg);
            })
    }, []);

    return (
        <div className={styles.base}>
            {articles.slice(index,index+5).map(article => (
                <Fade left cascade>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <li key={article.title}>{article.title}</li>
                </a>
                </Fade>
            ))}
        </div>
    )
}

export default News
