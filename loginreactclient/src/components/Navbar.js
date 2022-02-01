import React from 'react';

import imgAvantar from '../img/Jhoana.png';


function Navbar()
{
    return (
        <div className='navbar' >
            <span className='logo'>Login App</span>
            <ul className='list'>
                <li className='listItem'>
                    <img src={imgAvantar}
                        alt=""
                        className='avatar' 
                    />
                </li>
                <li className='listItem'>John Doe</li>
                <li className='listItem'>Logout</li>
            </ul>
        </div>
    );
}

export { Navbar };