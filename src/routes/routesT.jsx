import React, { useEffect, useState } from 'react';
import RouteComponent from '../components/RouteComponent';

const RoutesT = ()=>{
    const [routes, setRoutes] = useState([]);

        useEffect(() => {
            // Fetch the routes data from routesData.json
            fetch("src/routesData.json")
            .then((response) => response.json())
            .then((data) => setRoutes(data.routes))
            .catch((error) => console.log(error));
        }, []);

        return (
            <div>
              <RouteComponent routes={routes} />
            </div>
          );
}

export default RoutesT;