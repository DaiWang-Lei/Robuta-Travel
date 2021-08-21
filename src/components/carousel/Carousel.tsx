import React, { FC } from 'react'
import { Carousel as AntCarousel, Image } from 'antd'
import styles from './Carousel.module.css'
import sky from '../../assets/images/sky.jpg'
import castle from '../../assets/images/castle.jpg'
import deepPit from '../../assets/images/deepPit.jpg'
import lake from '../../assets/images/lake.jpg'
import mount from '../../assets/images/mount.jpg'
import cave from '../../assets/images/cave.jpg'
import cloudSea from '../../assets/images/cloudSea.jpg'



export const Carousel: FC = () => {
  const images = [
    { src: sky },
    { src: castle },
    { src: deepPit },
    { src: lake },
    { src: mount },
    { src: cave },
    { src: cloudSea },

  ]
  return (
    <AntCarousel autoplay className={styles.slider}>
      {images.map((item, index) => (
        <Image src={item.src} key={`carousel-image-${index}`} preview={false} />
      ))}
    </AntCarousel>
  )
}

export default Carousel;