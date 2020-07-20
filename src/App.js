import React from 'react';
import './App.css';

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'
import { Route,Switch } from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (

   <>
   <Navbar />
   <Switch>
     {/* switch renders page that doesnt match with sites url */}
     <Route exact path="/" component={Home} />
     <Route exact path="/rooms" component={Rooms} />
     <Route exact  path="/rooms/:slug" component={SingleRoom} />

     <Route component={Error} />
     {/* error page i craeted to render site link/url errors  */}

   </Switch>
   </>

  );
}

export default App;
