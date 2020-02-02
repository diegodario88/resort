import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Drinks incluso',
                info: 'Admodum accumsan disputationi eu sit. Cevadis im ampola pa arma uma pindureta.'
            },
            {
                icon: <FaHiking />,
                title: 'ECO turismo',
                info: 'Admodum accumsan disputationi eu sit. Cevadis im ampola pa arma uma pindureta.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Transporte',
                info: 'Admodum accumsan disputationi eu sit. Cevadis im ampola pa arma uma pindureta.'
            },
            {
                icon: <FaBeer />,
                title: 'Puro malte',
                info: 'Admodum accumsan disputationi eu sit. Cevadis im ampola pa arma uma pindureta.'
            },
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title='serviços' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span> {item.icon} </span>
                            <h6> {item.title} </h6>
                            <p> {item.info} </p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
