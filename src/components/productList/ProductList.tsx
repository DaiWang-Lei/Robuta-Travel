import React from "react";
import { Image, List, Rate, Space, Tag, Typography } from "antd";
import { LikeOutlined, StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;
interface ProductTypes {
  departureCity: string;
  description: string;
  discountPresent: number;
  id: string;
  originalPrice: number;
  price: number;
  rating: number;
  title: string;
  touristRoutePictures: any[];
  travelDays: string;
  tripType: string;
}

interface PropsType {
  data: any[];
  pagination?: any;
  onPageChange?: (page: number, pageSize: number | undefined) => void;
}

const listData = (productList: ProductTypes[]) => {
  return productList.map((p) => ({
    ...p,
    imgSrc: p.touristRoutePictures[0].url,
    tags: (
      <>
        {p.departureCity && <Tag color="#f50">{p.departureCity}出发</Tag>}
        {p.travelDays && <Tag color="#108ee9">{p.travelDays}天</Tag>}
        {p.discountPresent && <Tag color="#87d068">超低折扣</Tag>}
        {p.tripType && <Tag color="#2db7f5">{p.tripType}</Tag>}
      </>
    ),
  }));
};

const IconText = ({ icon, text }: { icon: any; text: any }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const ProductList: React.FC<PropsType> = ({
  data,
  pagination,
  onPageChange,
}) => {
  const products = listData(data);
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={
        pagination
          ? {
              total: pagination.total,
              current: pagination.page,
              pageSize: pagination.pageSize,
              onChange: (page, pageSize) =>
                onPageChange && onPageChange(page, pageSize),
            }
          : false
      }
      dataSource={products}
      footer={
        pagination && (
          <div>
            搜索总路线: <Text strong={true}>{pagination.total}</Text>条
          </div>
        )
      }
      renderItem={(item) => {
        return (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                key="list-vertical-star-o"
                icon={StarOutlined}
                text="156"
              />,
              <IconText
                key="list-vertical-like-o"
                icon={LikeOutlined}
                text="156"
              />,
              <>
                <Rate defaultValue={3} />
                <Text strong={true} className="ant-rate-text">
                  {item.rating}
                </Text>
              </>,
            ]}
            extra={
              <Image width={272} height={172} alt="image" src={item.imgSrc} />
            }
          >
            <List.Item.Meta
              title={
                <>
                  {item.discountPresent ? (
                    <>
                      <Text
                        style={{ fontSize: 20, fontWeight: 400 }}
                        delete={true}
                      >
                        ￥ {item.originalPrice}
                      </Text>
                      <Text
                        type="danger"
                        style={{ fontSize: 20, fontWeight: 400 }}
                      >
                        {" "}
                        ￥ {item.price}
                      </Text>
                    </>
                  ) : (
                    <Text style={{ fontSize: 20, fontWeight: 400 }}>
                      ￥ {item.price}
                    </Text>
                  )}
                  <Link to={`/detail/${item.id}`}>{item.title}</Link>
                </>
              }
              description={item.tags}
            />
            {item.description}
          </List.Item>
        );
      }}
    />
  );
};
