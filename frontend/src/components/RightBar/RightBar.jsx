import React from 'react'
import "./RightBar.scss"
export const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
        <span>Suggestions</span>
        <div className="user">
          <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <span>Marta Dumo</span>
          </div>
          <div className="buttons">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <span>Max Mustermann</span>
          </div>
          <div className="buttons">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>
        </div>
        <div className="item">
        <span>Latest Activities</span>
        <div className="user">
          <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <p>
            <span>Jane Doe </span>
             changed their profile picture
            </p>
          </div>
          <span>1 min ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <p>
            <span>Lorena Torres </span>
             commented on a post of Mary James
            </p>
          </div>
          <span>1 hour ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <p>
            <span>Mary James </span>
             liked your post
            </p>
          </div>
          <span>30 min ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <p>
            <span>Lara Alevi </span>
             changed their profile picture
            </p>
          </div>
          <span>2 min ago</span>
        </div>
        </div>
        <div className="item">
          <span>Friends Online</span>
        <div className="user">
          <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <div className="online"/>
            <span>Jane Doe</span>
          </div>
        </div>  
          <div className="user">
          <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <div className="online"/>
            <span>Lorena Torres</span>
          </div>
          </div> 
          <div className="user">
          <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <div className="online"/>
            <span>Lara Alevi</span>
          </div>
          </div>
          <div className="user">
          <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <div className="online"/>
            <span>Mary James </span>
          </div>
          </div> 
        </div>   
        </div>   
    </div>
  
 
  )
}
