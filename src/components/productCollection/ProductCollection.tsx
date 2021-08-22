import React, { FC } from 'react'
import { Col, Row, Divider, Image } from 'antd'
import ProductImage from './ProductImage'
import styles from "./ProductCollection.module.css";
import { ProductImageProps } from './ProductImage';

export interface ProductCollectionProps {
  title: JSX.Element | string;
  sideImage: string;
  products: any[];
}



export const ProductCollection: FC<ProductCollectionProps> = ({ title, sideImage, products }) => {
  return (
    <div className={styles.content}>
      <Divider orientation='left'>{title}</Divider>

      <Row>
        <Col span={4}>
          <a href="#" >
            <Image style={{ paddingRight: 10 }} className={styles["side-image"]} src={sideImage} preview={false}></Image>
          </a>
        </Col>
        <Col span={20}>

          <Row>
            <Col span={12}>
              <ProductImage
                id={products[0].id}
                title={products[0].title}
                size='large'
                imageSrc={products[0].touristRoutePictures[0].url}
                price={products[0].price}
              />
            </Col>
            <Col span={12}>
              {
                <Row>

                  {
                    products.slice(1,5).map((item, index) => {
                      return (
                        <Col span={12} key={item.id}>
                          <ProductImage
                            id={item.id}
                            title={item.title}
                            size={item.size}
                            imageSrc={item.touristRoutePictures[0].url}

                            price={item.price}
                          />
                        </Col>
                      )
                    })}
                </Row>

              }
            </Col>
          </Row>
          <Row>
            {
               products.slice(5,9).map((item, index) => {
                return (
                  <Col span={6} key={item.id}>
                    <ProductImage
                      id={item.id}
                      title={item.title}
                      size='small'
                      imageSrc={item.touristRoutePictures[0].url}
                      price={item.price}
                    />
                  </Col>
                )
              })
            }
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ProductCollection;