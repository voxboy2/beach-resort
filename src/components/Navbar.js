import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'

class Navbar extends Component {

    state = {
        isOpen: false
    }


    handleToggle = () => {
       this.setState({isOpen : !this.state.isOpen})
    //    WE SET THE STATE HERE TO BE OPPOSITE
    }
   
render ()
          {
   return(
      <nav className= "navbar">
          <div className = "nav-center">
              <div className="nav-header">
                  <Link to="/">
                  <img src={logo} alt="Beach resort" />
                  </Link>
                  <button 
                  type="button"
                  className="nav-btn"
                  onClick={this.handleToggle} >
                 <FaAlignRight className="nav-icon" />
                  </button>
              </div>
              <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                  {/* when the page loads on mobile screens its false when it is hidden toggled it becomes true and seen so by default the navigation is hidden */}
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/rooms">Rooms</Link>
                  </li>
              </ul>
          </div>
      </nav>
   )
}
}


export default Navbar