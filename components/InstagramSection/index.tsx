import React, { useEffect, useState } from 'react';
import loadPosts from '../../utils/loadInstagramPosts'
import Caroussel from 'nuka-carousel'

import styles from './styles.module.css';
import {FiInstagram} from 'react-icons/fi'

const InstagramSection = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const [posts, setPosts] = useState([])
  async function loadPostsData (){
      const posts = await loadPosts()
      setPosts(posts)
  }

  useEffect(()=>{
    loadPostsData()
  }, [])

  return(
      <section className = {styles.instagram_section} >
          <h3> <FiInstagram/>  INSTAGRAM &nbsp;<b><a href="https://www.instagram.com/splitconfort/" target = "_blank">@SPLITCONFORT</a></b></h3>

          <div className = {styles.posts}>
          {
                posts.map(post => (
                    <a href = {`https://instagram.com/p/${post.shortcode}`} key = {post.shortcode}>
                    <img key = {post.shortcode} src = {post.display_url} />
                    </a>
                    ))
                }
          </div>

          <div className = {styles.mobile} >
          <Caroussel
             autoplay
             autoplayInterval = {8000}
             renderCenterLeftControls={({ previousSlide }) => (
                <button style = {{display: 'none'}} onClick={previousSlide}/>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button style = {{display: 'none'}}  onClick={nextSlide}/>
            )}  >
                    {
                posts.map(post => (
                    <a href = {`https://instagram.com/p/${post.shortcode}`} key = {post.shortcode}>
                    <img key = {post.shortcode} src = {post.display_url} />
                    </a>
                    ))
                }
            </Caroussel>
          </div>
      </section>
  )
}

export default InstagramSection;