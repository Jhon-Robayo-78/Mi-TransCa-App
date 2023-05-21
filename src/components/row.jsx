import React from "react";

const Row = (props) =>{
  const [isImageExpanded, setIsImageExpanded] = React.useState(false);
  const toggleImageExpansion = () => {
    setIsImageExpanded(!isImageExpanded);
  };
   return(
    <div>
        <strong>{props.data.code} -</strong> {props.data.description} 
        <img src={props.data.img} width={isImageExpanded ? 200 :50}
        onClick={toggleImageExpansion}
        style={{ cursor:'pointer' }}/>     
    </div>
   )
}

export default Row;