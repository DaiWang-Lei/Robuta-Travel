import React, { FC } from 'react';
import { Image, Typography } from 'antd';


export interface ProductImageProps {
  id: string | number;
  title: string;
  imageSrc: string;
  price: string | number;
  size: 'small' | 'large'
}

export const ProductImage: FC<ProductImageProps> = ({ id, title, imageSrc, price, size }) => {
  return (
    <>
      {
        size === 'large' ? <Image src={imageSrc} height={285} width={490} /> : <Image src={imageSrc} height={120} width={240} />
      }
      <div>
        <Typography.Text type='secondary'>
          {title.slice(0,25)}
        </Typography.Text>
        <Typography.Text type='danger'>
          ￥ {price} 起
        </Typography.Text>
      </div>
    </>
  )
}

export default ProductImage;