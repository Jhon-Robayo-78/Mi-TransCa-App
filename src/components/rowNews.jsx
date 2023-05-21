import { Link } from "react-router-dom";

const RowNews = (props) =>{
     return(
      <div>
          <strong>{props.data.title} -</strong> {props.data.description} 
          <Link to={props.data.url}><img src={props.data.img} width={50}
          style={{ cursor:'pointer' }}/></Link>     
      </div>
     )
  }
  
  export default RowNews;