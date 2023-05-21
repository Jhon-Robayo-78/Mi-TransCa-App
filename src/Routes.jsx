import React from 'react';
import { Route } from 'react-router-dom';
import Home from './routes/Home';
import RoutesT from './routes/routesT';
import UserView from './routes/UserView';
import Notfound from './routes/notfound';
import Login from './routes/login';
import SignUp from './routes/signUp';
import FAQ from './routes/FAQ';
import EditProfile from './routes/editProfile';
import Profile from './routes/perfilUser';
import Layout from './components/LayOut';

//data 
import Data from './data.json'

class RoutesWeb extends React.Component{
  render(){
    return(
      <div className='AppRoutes'>
        <Layout>
          <Route path='/' exact element={<Home data={{ noticias:Data["news"], salidas:Data["routes to exit"] }}/>} />
          <Route path='/routes' element={<RoutesT data={Data["routes"]}/>} />
          <Route path='/UserView' element={<UserView/>} />
          <Route path='/login' element={<Login/> } />
          <Route path='/SignUp' element={<SignUp/> } />
          <Route path='/FAQ' element={<FAQ/> } />
          <Route path='/edit' element={<EditProfile/> } />
          <Route path='/Profile' element={<Profile/> } />
          {/* pagina no encontrada */}
          <Route path="*" element={<Notfound />} />
        </Layout>
        
      </div>
    )
  }
}

export default RoutesWeb;
