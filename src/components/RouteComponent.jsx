import React, { useState } from 'react';
import './css/RouteComponent.css';

const RouteComponent = ({ routes }) => {
  const [expandedSubclass, setExpandedSubclass] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  const handleExpand = (subclass) => {
    if (expandedSubclass === subclass) {
      setExpandedSubclass(null);
    } else {
      setExpandedSubclass(subclass);
    }
  };
  const handleImageClick = (img) => {
    setExpandedImage(img);
  };

  const handleCloseImage = () => {
    setExpandedImage(null);
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
            <h1 className='subclassText'>{subclass}</h1>
            <img className='expandIcon' onClick={() => handleExpand(subclass)} src='/expand.svg' />
          </div>
          {expandedSubclass === subclass && (
            <div>
              {subclassRoutes.map((route) => (
                <div key={route.code} className='subRow'>
                  <div className='text'>
                    <h2>{route.name}</h2>
                    <p>{route.description}</p>
                  </div>
                  <img 
                    src={route.img} 
                    alt={route.name} 
                    onClick={() => handleImageClick(route.img)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      {expandedImage && (
        <div className="modal" onClick={handleCloseImage}>
          <img src={expandedImage} alt="Expanded" />
        </div>
      )}
    </div>
  );
};

export default RouteComponent;