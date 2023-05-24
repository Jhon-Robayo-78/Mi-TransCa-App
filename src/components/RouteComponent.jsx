import React, { useState } from 'react';
import './css/RouteComponent.css';

const RouteComponent = ({ routes }) => {
  const [expandedSubclass, setExpandedSubclass] = useState(null);

  const handleExpand = (subclass) => {
    if (expandedSubclass === subclass) {
      setExpandedSubclass(null);
    } else {
      setExpandedSubclass(subclass);
    }
  };

  const groupedRoutes = routes.reduce((acc, route) => {
    if (!acc[route.subclass]) {
      acc[route.subclass] = [];
    }
    acc[route.subclass].push(route);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedRoutes).map(([subclass, subclassRoutes]) => (
        <div key={subclass} className='content-wrapper' >
          <div className='flex-container-spaced'>
            <h1>{subclass}</h1>
            <img onClick={() => handleExpand(subclass)} src='/expand.svg' style={{cursor:"pointer"}}/>
          </div>
          {expandedSubclass === subclass && (
            <div>
              {subclassRoutes.map((route) => (
                <div key={route.code} className='subRow'>
                  <div className='text'>
                    <h2>{route.name}</h2>
                    <p>{route.description}</p>
                  </div>
                  <img src={route.img} alt={route.name}/>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RouteComponent;