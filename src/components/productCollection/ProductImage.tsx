import React, { FC } from 'react';
import { Image, Typography } from 'antd';
import { Link } from 'react-router-dom'

export interface ProductImageProps  {
  id: string | number;
  title: string;
  imageSrc: string;
  price: string | number;
  size: 'small' | 'large'
}

const ProductImageComponent: FC<ProductImageProps> = ({ id, title, imageSrc, price, size }) => {
  return (
    // Link 自带 a标签属性,简化代码，不用改造interface
    /**跳转到详情页 */
    <Link to={`/detail/${id}`}>
      {
        size === 'large' ? <Image src={imageSrc} height={285} width={490} preview={false} /> : <Image src={imageSrc} height={120} width={240} preview={false} />
      }
      <div>
        <Typography.Text type='secondary'>
          {title.slice(0, 25)}
        </Typography.Text>
        <Typography.Text type='danger'>
          ￥ {price} 起
        </Typography.Text>
      </div>
    </Link>
  )
}
// export const ProductImage = withRouter(ProductImageComponent);
export const ProductImage = ProductImageComponent

export default ProductImage;