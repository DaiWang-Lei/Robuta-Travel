import React, { FC } from 'react';
import { Col, Row, Typography } from 'antd';
import { Footer, Header, SideMenu, Carousel, ProductCollection, BusinessPartners } from '../../components'

import sideImage1 from '../../assets/images/sider1.png';
import sideImage2 from '../../assets/images/sider2.png';
import sideImage3 from '../../assets/images/sider3.png';
import styles from './HomePage.module.css'
import { productList1, productList2, productList3 } from './mockups';
import { ProductCollectionProps } from '../../components/productCollection/ProductCollection';


type prodoctsListsProps = ProductCollectionProps & { type: 'danger' | 'warning' | 'success' };

const prodoctsLists: prodoctsListsProps[] = [
  { title: '爆款推荐', sideImage: sideImage1, products: productList1, type: 'danger' },
  { title: '境内旅游', sideImage: sideImage2, products: productList2, type: 'warning' },
  { title: '出境旅游', sideImage: sideImage3, products: productList3, type: 'success' },
]


export const HomePage: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles['page-content']}>
        <Row>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>

        {
          prodoctsLists.map((item, index) => {
            return (
              <ProductCollection
                title={<Typography.Title level={3} type={item.type}>{item.title}</Typography.Title>}
                sideImage={item.sideImage}
                products={item.products}
              />
            )
          })
        }
      </div>
      <BusinessPartners />
      <Footer />
    </div>
  )
}

export default HomePage;