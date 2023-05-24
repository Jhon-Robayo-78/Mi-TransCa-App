import { Link } from "react-router-dom";
import './css/RowNews.css';

const RowNews = (props) =>{
     return(
      <div className="RowNews">
            <div className="NewsText">
                <h2>{props.data.title}</h2> 
                <span>{props.data.description}</span>
            </div>
            <div className="NewsImg">
                <Link to={props.data.url}><img src={props.data.img} width={50}
            style={{ cursor:'pointer' }}/></Link>  
            </div>
      </div>
     )
  }
  
  export default RowNews;