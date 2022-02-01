import React from 'react';

function Card({ post })
{
    return (
        <div>
            <span className='title' >{post.title}</span>
            <img src={ post.img } 
                alt="" 
                className='img'>
            </img>
            <p>{post.desc}</p>
            <button className='cardButton'>Read More</button>
        </div>
    );
}

export { Card };