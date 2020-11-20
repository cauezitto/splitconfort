import React, { useEffect, useState } from 'react';
import loadPosts from '../../utils/loadInstagramPosts'

import styles from './styles.module.css';
import {FiInstagram} from 'react-icons/fi'

const InstagramSection = () => {
  const [posts, setPosts] = useState([])
  async function loadPostsData (){
      const posts = await loadPosts()
      setPosts(posts)
  }

  useEffect(()=>{
    //loadPostsData()
  })

  return(
      <section className = {styles.instagram_section} >
          <h3> <FiInstagram/>  INSTAGRAM &nbsp;<b><a href="https://www.instagram.com/splitconfort/" target = "_blank">@SPLITCONFORT</a></b></h3>

          <div className = {styles.posts}>
          {
                posts.map(post => (
                    <a href = {`https://instagram.com/p/${post.shortcode}`}>
                    <img key = {post.shortcode} src = {post.display_url} />
                    </a>
                    ))
                }
          </div>
      </section>
  )
}

export default InstagramSection;