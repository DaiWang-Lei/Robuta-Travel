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
  const httpImage = [
    { src: 'https://dimg04.c-ctrip.com/images/700v0z000000nw0fo1F65.jpg' },
    { src: 'https://dimg04.c-ctrip.com/images/70020z000000ns1kiD9E9.jpg' },
    { src: 'https://dimg04.c-ctrip.com/images/70050z000000nngwoAF78.jpg' },
    { src: 'https://dimg04.c-ctrip.com/images/700v0z000000nw0fo1F65.jpg' },

  ]
  return (
    <AntCarousel autoplay className={styles.slider}>
      {httpImage.map((item, index) => (
          <Image src={item.src} key={`carousel-image-${index}`} preview={false} style={{cursor:'pointer'}} />
      ))}
    </AntCarousel>
  )
}

export default Carousel;