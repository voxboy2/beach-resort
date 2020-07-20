import React from 'react';
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../components/Title'

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    
    // destructuring again
    const { 
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    } = context

    // get unique types
    let types = getUnique(rooms, 'type');

    // we add the "all" option to the types 

    types = ['all', ...types];


    // map to jsx

    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })


    // get uniue types
    let people = getUnique(rooms, 'capacity');

    people = people.map((item,index)=> {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
         {/* select type */}
         <div className="form-group">
             <label htmlFor="type">room type</label>
             <select name="type" 
             id="type" 
            //  the type we get from the context above
             value={type} 
             className="form-control"
             onChange={handleChange}>
                 {types}
            </select>

         </div>
         {/* end select type */}


        {/* guests */}
            <div className="form-group">
             <label htmlFor="capacity">Guests</label>
             <select name="capacity" 
             id="capacity" 
            //  the capacity we get from the context above
             value={capacity} 
             className="form-control"
            // the onchange function
             onChange={handleChange}>
                 {people}
            </select>

         </div>
         {/* end guests */}

         {/* room price */}

           <div className="form-group">
               <label htmlFor="price">
                   room price ${price}
               </label>
                
                <input type="range" name="price" min={minPrice} max={maxPrice}
                id="price" value={price} onChange={handleChange} className="form-control" />


           </div>

         {/* end room price */}


        {/* size */}
        <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
            <input type="number" name="minSize" id="size" value={minSize}
            onChange={handleChange} className="size-input" />

           <input type="number" name="maxSize" id="size" value={maxSize}
            onChange={handleChange} className="size-input" />
            
             
            </div>


        </div>

        {/* end of size */}

        {/* extras */}
        <div className="form-group">
        <div className="single-extra">
            <input type="checkbox" name="breakfast" 
                id="breakfast" 
                value={breakfast} 
                checked={breakfast}
                onChange={handleChange}
            />
            <label htmlFor = "breakfast">breakfast</label>
      

            <input type="checkbox" name="pets" 
                id="pets" 
                value={pets} 
                checked={pets}
                onChange={handleChange}
            />
            <label htmlFor = "pets">pets</label>
        </div>

        </div>


        {/* end of extras */}
        </form>
        </section>
    )
} 