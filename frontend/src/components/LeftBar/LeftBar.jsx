import React,{useContext} from 'react';
import "./LeftBar.scss";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import EventIcon from '@mui/icons-material/Event';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideocamIcon from '@mui/icons-material/Videocam';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ComputerIcon from '@mui/icons-material/Computer';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { AuthContext } from "../../context/authContext";

export const LeftBar = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
          <img src={currentUser.profilePic} alt=""/>
          <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <PeopleIcon className='icon'/>
            <span>Friends</span>
          </div>
          <div className="item">
            <Diversity3Icon className='icon'/>
            <span>Groups</span>
          </div>
          <div className="item">
            <StoreIcon className='icon'/>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <SlideshowIcon className='icon'/>
            <span>Watch</span>
          </div>
          <div className="item">
            <EventRepeatIcon className='icon'/>
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Shortcuts</span>
        <div className="item">
            <EventIcon className='icon'/>
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsIcon className='icon'/>
            <span>Gaming</span>
          </div>
          <div className="item">
            <CollectionsIcon className='icon'/>
            <span>Gallery</span>
          </div>
          <div className="item">
            <VideocamIcon className='icon'/>
            <span>Videos</span>
          </div>
          <div className="item">
            <ChatBubbleIcon className='icon'/>
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
        <span>Others</span>
        <div className="item">
            <VolunteerActivismIcon className='icon'/>
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <RememberMeIcon className='icon'/>
            <span>Tutorials</span>
          </div>
          <div className="item">
            <ComputerIcon className='icon'/>
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}
