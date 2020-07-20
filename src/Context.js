import React, { Component } from "react"
import items from './data'

const RoomContext = React.createContext();
// we now hav access to all components

class RoomProvider extends Component {

    state = {
      // we get all our rooms information here
        rooms : [],
      // we sort rooms
        sortedRooms : [],
      // we make featured rooms for our home
        featuredRooms: [],
      // we set loading to true
        loading: true,
        type:"all",
      // the default all
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };
    // get data

    // when component mounts we update the values
    componentDidMount() {

    //  we pass the items as arguement to the formatdata function
      let rooms = this.formatData(items);

    // we filter the rooms and search for the room that has a featured property set to true
      let featuredRooms = rooms.filter(room => room.featured === true);

    // we set the map price and get the rooms
      let maxPrice = Math.max(...rooms.map(item => item.price));

    // we set the max price also

      let maxSize = Math.max(...rooms.map(item => item.size));
      
      
      // we set state
      this.setState({
        // the rooms we just got from  formatdata function
        rooms,
        // the featured rooms we just created
        featuredRooms,
        // the sorted rooms will now be equal to the rooms 
        sortedRooms: rooms,
        loading: false,
        price:maxPrice,
        maxPrice,
        maxSize
      });

      // console.log(rooms)



    }

    formatData(items) {
      // we loop through the data we get
      let tempItems = items.map(item => {
        let id = item.sys.id;

        // each and every item has an image with a filed,file and url and we want to access the url so we go diirectly to the url by accessing each object in the images arrayfirst
        let images = item.fields.images.map(image => image.fields.file.url)


        // we destruvture and make a room , we also overwrite the images to make new images
        let room = { ...item.fields, images, id };

        return room;
      })
      // we return the temp items

      return tempItems;
    }


    getRoom = slug => {
      // we destructure the states of the rooms
       let tempRooms = [...this.state.rooms];

      //  find the particular rooms and assign it to rooms variable
       const room = tempRooms.find(room => room.slug === slug);

      //  we return the room variables here
       return room;
    };

    handleChange = event => {
        const target = event.target;
        // if the value is not a checked render the value from the state
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        
        this.setState(
          {
            // whatever you get will be equalt to the name
          [name]: value
        },
        // we only run this callback when the state is actually changed
        this.filterRooms)
    };


    filterRooms = () => {
      let {
        rooms,type,capacity,price,minSize,maxSize,breakfast,pets
      } = this.state

      // all the rooms
      let tempRooms = [...rooms];

      // tranform value  into integer
      capacity = parseInt(capacity)

      // we filter the rooms
      if(type != 'all') {
        tempRooms = tempRooms.filter(room => room.type === type)
      }

      // after the filtering we equal sorted rooms in the list thereby = temprooms
      // we also filter by capacity
      if(capacity != 1) {
        tempRooms = tempRooms.filter(room => room.capacity >= capacity)
      }

      // transform values into integer and render rooms less than price
      tempRooms = tempRooms.filter(room => room.price <= price);
      
      // filter by price
      tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
      
      // filter by breakfast
      if(breakfast) {
        tempRooms = tempRooms.filter(room => room.breakfast === true)
      }


      // filter by pets
      if(pets) {
        tempRooms = tempRooms.filter(room => room.pets === true)
      }
      // change state
      this.setState({
        sortedRooms:tempRooms
      })
    };



    render(){
        return(
          <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
             {this.props.children}
          </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;


export {RoomProvider, RoomConsumer, RoomContext}