import React, { useContext } from 'react';
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";

export const Comments = () => {
  const{currentUser} = useContext(AuthContext)
    const comments=[
        {
            id:1, 
            name:"Lorena Torres",
            userId:1,
            profilePic:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit quam cursus lectus faucibus dapibus eget et tellus.",
            
        },
        {
            id:2, 
            name:"Maria Alevi",
            userId:2,
            profilePic:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc:"Donec dui orci, aliquet sed magna porta, sagittis rutrum turpis" 
        },
    ];
    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type='text' placeholder='Write a comment'/>
                <button>Send</button>
            </div>
          {comments.map(comment => (
            <div className='comment'>
              <img src={comment.profilePic} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">1 hour ago</span>
            </div>
          ))}
        </div>
      );
      
}
