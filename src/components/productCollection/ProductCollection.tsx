import React, { FC } from 'react'
import { Col, Row, Divider, Image } from 'antd'
import ProductImage from './ProductImage'
import styles from "./ProductCollection.module.css";

export interface ProductCollectionProps {
  title: JSX.Element | string;
  sideImage: string;
  products: any[];
  touristRoutes?:any[]
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
            {
              products.slice(0, 1).map((item, index) => {
                return (
                  <Col span={12} key={item.id}>
                    <ProductImage
                      id={item.id}
                      title={item.title}
                      size='large'
                      imageSrc={item.touristRoutePictures[0].url}
                      price={item.price}
                    />
                  </Col>
                )
              })
            }
            <Col span={12}>
              {
                <Row>
                  {
                    products.slice(1, 5).map((item, index) => {
                      return (
                        <Col span={12} key={item.id}>
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

              }
            </Col>
          </Row>
          <Row>
            {
              products.slice(5, 9).map((item, index) => {
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