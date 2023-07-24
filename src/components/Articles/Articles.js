import React from 'react';
import SingleArticle from '../SingleArticle/SingleArticle';

const articles=[
    {
        id:0,
        image:"/images/many-worker.jpg",
        title:"Textile Designing: Types, Importance and Impacts",
        date:"February 09, 2023",
        msg:0
    },
    {
        id:1,
        image:"/images/machine.jpg",
        title:"Textile Designing: Types, Importance and Impacts",
        date:"February 09, 2023",
        msg:0
    },
    {
        id:2,
        image:"/images/swing-old.jpg",
        title:"Textile Designing: Types, Importance and Impacts",
        date:"February 09, 2023",
        msg:0
    },
]

const Articles = () => {
    return (
        <div className="customFlexLg
         gap-4">
            {
                articles.map((singleArticle)=> <SingleArticle key={singleArticle.id} img={singleArticle.image} title={singleArticle.title} date={singleArticle.date} msg={singleArticle.msg}></SingleArticle> )
            }
        </div>
    );
};

export default Articles;