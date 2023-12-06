import React,{useContext} from 'react'
import "./Stories.scss"
import { AuthContext } from "../../context/authContext";

export const Stories = () => {
    const {currentUser} = useContext(AuthContext);
    const stories=[
        {
            id:1, 
            name:"Lorena Torres",
            img:"https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id:2, 
            name:"Lorena Torres",
            img:"https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id:3, 
            name:"Lorena Torres",
            img:"https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id:4, 
            name:"Lorena Torres",
            img:"https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
    ];


  return (
    <div className='stories'>
        <div className="story">
                <img src={currentUser.profilePic}/>
                <span>{currentUser.name}</span>
                <button>+</button>
        </div>
        {stories.map(story=>(
            <div className="story">
                <img src={story.img} key={story.id}/>
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}
