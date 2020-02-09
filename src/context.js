import React, { Component } from 'react'
import Data from '../src/data'

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }

    componentDidMount() {
        let rooms = this.formatData(Data)

        let featuredRooms = rooms.filter(room => room.featured)
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        })

    }

    formatData(data) {
        let tempData = data.map(item => {
            let id = item.sys.id
            let images = item.fields.images
                .map(image => image.fields.file.url)
            let rooms = { ...item.fields, images, id }

            return rooms
        })

        return tempData
    }

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
      };

    render() {
        return (
            <RoomContext.Provider 
            value={{ ...this.state, getRoom: this.getRoom }}
            >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
