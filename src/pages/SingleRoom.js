import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import defaultBcg from '../images/room-1.jpeg'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import { RoomContext } from '../context'


export default class SingleRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

static contextType = RoomContext

    render() {

        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        if (!room) {
            return <div className='error'>
                <h3> nenhum quarto encontrado... </h3>
                <Link to='/rooms' className='btn-primary'> voltar? </Link>
            </div>
        }
        const { name, description, capacity, size, 
            price, extras, breakfast, pets, images } = room
        
            return (
            <StyledHero img={images[0] || this.state.defaultBcg}>
                <Banner title={`quarto ${name}`}>
                <Link to='/rooms' className='btn-primary'>Ver outros quartos</Link>
                </Banner>
              
            </StyledHero>
        )
    }
}
