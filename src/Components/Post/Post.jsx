import React,{useEffect,useState} from 'react'
import './post.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constant'
function Post(props) {
  const[post,setPost] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmViOTI5ODNmZGYyZGNmMzU0NWU0OTFjNjg5NjFhOSIsInN1YiI6IjY1ZGVkMTBjZDVkYmMyMDE3YzU3ZTViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oKK7RQwi7UqIcbpEAGKF6Qhv3hGEY07J4p_5B44REh0'
    }
  };
  useEffect(()=>{
    axios.get(`${props.url}`,options)
    .then((response) => {            
      console.log("post",response.data.results);
      setPost(response.data.results)
    }) 
    .catch(error=>{
    alert('Network error')
    })
  },[])
  return (
    <div className='row'>
      <h2>{props.title}</h2>
    <div className='posters'>
      {
        post.map((obj)=>{

          return <img className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path} `} alt="post" />
        }) 
      }
   </div>
    </div>
  )
}

export default Post
