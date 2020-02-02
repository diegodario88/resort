import React, { Component } from 'react'
import { RoomContext } from '../context'

import Room from './Room'
import Loading from './Loading'
import Title from './Title'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const { loading, featuredRooms: rooms } = this.context;


        return (
            <section className='featured-rooms'>
                <Title title={'Quartos em Destaque'} />
                <div className="featured-rooms-center">
                    {loading ? <Loading />
                        :
                        rooms.map(room => {
                            return <Room key={room.id} room={room} />
                        })}
                </div>
            </section>
        )
    }
}
