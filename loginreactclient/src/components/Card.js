import React from 'react';
import { Link } from 'react-router-dom';

function Card({ post })
{
    return (
        <div className='card' >
            <Link className="link" to={`/post/${post.id}`}>
                <span className='title' >{post.title}</span>
                <img src={ post.img } 
                    alt="" 
                    className='img'>
                </img>
                <p>{post.desc}</p>
                <button className='cardButton'>Read More</button>
            </Link>
        </div>
    );
}

export { Card };