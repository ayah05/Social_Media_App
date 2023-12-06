import React from 'react';
import './Profile.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="cover" className='cover' />
        <img src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile" className='profile'/>
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookIcon fontSize="large"/>
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large"/>
            </a><a href="http://twitter.com">
              <TwitterIcon fontSize="large"/>
            </a><a href="http://linkedin.com">
              <LinkedInIcon fontSize="large"/>
            </a><a href="http://pinterest.com">
              <PinterestIcon fontSize="large"/>
            </a>
          </div>
          <div className="center">
            <span>Ayah EL-Sharkawy</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>lama.dev</span>
              </div>
              <button>Follow</button>
            </div>
          </div>
          <div className="right">
            <MailOutlineIcon/>
            <MoreVertIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}
