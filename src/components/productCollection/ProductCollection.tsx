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

  debugger;
  const upProductData: ProductImageProps[][] = [
    [
      { id: products[1].id, title: products[1].title, imageSrc: products[1].touristRoutePictures[0].url, price: products[1].price, size: 'small' },
      { id: products[2].id, title: products[2].title, imageSrc: products[2].touristRoutePictures[0].url, price: products[2].price, size: 'small' }
    ],
    [
      { id: products[3].id, title: products[3].title, imageSrc: products[3].touristRoutePictures[0].url, price: products[3].price, size: 'small' },
      { id: products[4].id, title: products[4].title, imageSrc: products[4].touristRoutePictures[0].url, price: products[4].price, size: 'small' }
    ]
  ]
  const productData: ProductImageProps[] = [
    { id: products[5].id, title: products[5].title, imageSrc: products[5].touristRoutePictures[0].url, price: products[5].price, size: 'small' },
    { id: products[6].id, title: products[6].title, imageSrc: products[6].touristRoutePictures[0].url, price: products[6].price, size: 'small' },
    { id: products[7].id, title: products[7].title, imageSrc: products[7].touristRoutePictures[0].url, price: products[7].price, size: 'small' },
    { id: products[8].id, title: products[8].title, imageSrc: products[8].touristRoutePictures[0].url, price: products[8].price, size: 'small' }
  ]


  return (
    <div className={styles.content}>
      <Divider orientation='left'>{title}</Divider>

      <Row>
        <Col span={4}>
          <a href="#" >
            <Image style={{paddingRight:10}} className={styles["side-image"]} src={sideImage} preview={false}></Image>
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
                upProductData.map((items, indexs) => {
                  return (
                    <Row key={`row-${indexs}`}>
                      {
                        items.map((item, index) => {
                          return (
                            <Col span={12} key={item.id}>
                              <ProductImage
                                id={item.id}
                                title={item.title}
                                size={item.size}
                                imageSrc={item.imageSrc}
                                price={item.price}
                              />
                            </Col>
                          )
                        })
                      }
                    </Row>
                  )
                })
              }
            </Col>
          </Row>
          <Row>
            {
              productData.map((item, index) => {
                return (
                  <Col span={6} key={item.id}>
                    <ProductImage
                      id={item.id}
                      title={item.title}
                      size='small'
                      imageSrc={item.imageSrc}
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