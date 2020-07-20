import React, {Component} from 'react'
import {FaShuttleVan, FaHiking, FaBeer, FaCocktail} from 'react-icons/fa'
import Title from './Title'

class  Services extends Component{
    state ={
        services: [
        {
            icon : <FaShuttleVan />,
            title : "fine services",
            info : "sksnnkk.lpmsnk ksnksos"
        },
        {
            icon : <FaHiking />,
            title : "fine services",
            info : "sksnnkk.lpmsnk ksnksos"
        },
        {
            icon : <FaBeer />,
            title : "fine services",
            info : "sksnnkk.lpmsnk ksnksos"
        },
        {
            icon : <FaCocktail />,
            title : "fine services",
            info : "sksnnkk.lpmsnk ksnksos"
        },
    ]
    }

    render(){

        return(
           <section className="services">
           <Title title="Our Services" />
            <div className="services-center">
                {this.state.services.map((item,index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>

                    </article>
                })}
            </div>


           </section>

        
        )
    }
}


export default Services