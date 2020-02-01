import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function Rooms() {

    return (
        <Hero hero='roomsHero'>
            <Banner title='Nossos quartos'>
                <Link to='/' className='btn-primary'>
                    retornar para a entrada
                </Link>
            </Banner>
        </Hero>
    )

}
