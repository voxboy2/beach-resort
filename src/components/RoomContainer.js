import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import {RoomConsumer} from '../Context'
import Loading from './Loading'

export default function RoomsContainer() {
    return (
         <RoomConsumer>
           {value => {
            //  we grab the context state from here
                 const {loading,sortedRooms,rooms} = value  
             

            if(loading) {
              return <Loading />;
            }

       return ( 
         <>
          <RoomsFilter rooms={rooms}/>
          <RoomsList rooms={sortedRooms}/>
        </>

       );
           }}
        </RoomConsumer>
    );
}