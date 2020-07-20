import React, { Component } from "react"
import { RoomContext } from '../Context'
import Loading from '../components/Loading'
import Room from '../components/Room'
import Title from './Title'

export default class FeaturedRooms extends Component {

    static contextType = RoomContext;
    // we make use of the room context

    render(){
        // we access the loading featured rooms,from the context state and set an alias for it using rooms
        let { loading,featuredRooms:rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        });
       
        return(
            <>
            
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {/* note:loading and rooms are from the context state */}
                    {loading?<Loading />:rooms}
                </div>
            </section>

            </>
        )
    }
}
