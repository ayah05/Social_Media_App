import React from 'react'
import "./Posts.scss"
import { Post } from '../Post/Post';
export const Posts = () => {
    const posts=[
        {
            id:1, 
            name:"Lorena Torres",
            userId:1,
            profilePic:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit quam cursus lectus faucibus dapibus eget et tellus. Suspendisse rhoncus bibendum mauris eget molestie. Nunc non congue elit. Duis nec ante suscipit, aliquet arcu nec, commodo sapien. Nulla facilisi. Curabitur convallis lectus vel leo molestie, at placerat ante consequat. Donec placerat semper nisi, vitae laoreet erat ultricies quis. ",
            img:"https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id:2, 
            name:"Maria Alevi",
            userId:2,
            profilePic:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." 
        },
    ];

  return (
    <div className='posts'>
        {posts.map(post=>(
            <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}
