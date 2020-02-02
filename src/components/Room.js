import React from 'react'
import { Link } from 'react-router-dom'

import DefaultImg from '../images/room-1.jpeg'

export default function Room({ room }) {
    const { name, slug, images, price } = room

    return (
        <article className='room'>
            <div className="img-container">
                <img src={images[0] || DefaultImg} alt="featured rooms" />
                <div className="price-top">
                    <h6>R${price.toFixed()}</h6>
                    <p>Por noite</p>
                </div>
                <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
                    Destaque
                </Link>
            </div>
            <p className='room-info'>{name}</p>
        </article>
    )
}

