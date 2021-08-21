import React from 'react';
import { Divider, Typography, Row, Col } from 'antd';

import facebook from '../../assets/images/facebook.png'
import youtube from '../../assets/images/youtube.png'
import follow from '../../assets/images/follow.png'
import microsoft from '../../assets/images/microsoft.png'


const companies = [
  { src: facebook, title: 'facebook' },
  { src: youtube, title: 'youtube' },
  { src: microsoft, title: 'microsoft' },
  { src: follow, title: 'follow' },
]
export const BusinessPartners: React.FC = () => {
  return (
    <div>
      <Divider>
        <Typography.Title level={3}>合作企业</Typography.Title>
      </Divider>
      <Row>
        {
          companies.map((item, index) => {
            return (
              <Col key={`businese-${index}`} span={6}>
                <a href="#">
                  <img
                    src={item.src}
                    alt="businese-partner"
                    style={{ width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                  />
                </a>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default BusinessPartners;