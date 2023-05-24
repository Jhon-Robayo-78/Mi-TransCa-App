import React, { useEffect, useState } from 'react';
import routes from "./routesData.json"
import RouteComponent from '../components/RouteComponent';

const RoutesT = ()=>{
    
        return (
            <div>
              <RouteComponent routes={routes["routes"]} />
            </div>
          );
}

export default RoutesT;