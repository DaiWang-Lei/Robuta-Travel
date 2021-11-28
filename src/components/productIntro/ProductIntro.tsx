import styles from "./ProductIntro.module.css";
import React from "react";
import { Typography, Carousel, Image, Table, Rate } from "antd";
import { ColumnsType } from "antd/es/table";

export interface PropsType {
  title: string;
  shotDescription: string;
  price: string | number;
  coupons: string;
  points: string;
  discount: string;
  rating: string | number;
  pictures: string[];
}

interface RowType {
  title: string;
  description: string | number | JSX.Element;
  key: number;
}
const columns: ColumnsType<RowType> = [
  {
    title: "",
    dataIndex: "title",
    key: "title",
    align: "left",
    width: 120,
  },
  {
    title: "",
    dataIndex: "description",
    key: "description",
    align: "center",
  },
];

export const ProductIntro: React.FC<PropsType> = ({ title, shotDescription, price, coupons, points, discount, rating, pictures }) => {
  const tableDataSource: RowType[] = [
    {
      key: 0,
      title: "路线名称",
      description: title,
    },
    {
      key: 1,
      title: "价格",
      description: (
        <>
          ￥{" "}
          <Typography.Text type="danger" strong>
            {price}
          </Typography.Text>
        </>
      ),
    },
    {
      key: 2,
      title: "限时抢购折扣",
      description: discount ? (
        <>
          ￥<Typography.Text delete>{price}</Typography.Text> ￥
          <Typography.Text type="danger" strong>
            ￥{discount}
          </Typography.Text>
        </>
      ) : (
        "暂无折扣"
      ),
    },
    {
      key: 3,
      title: "领取优惠券",
      description: coupons ? discount : "无优惠券可领",
    },
    {
      key: 4,
      title: "路线评价",
      description: (
        <>
          <Rate allowHalf defaultValue={+rating} />
          <Typography.Text style={{marginLeft:10}}>{rating}分</Typography.Text>
        </>
      ),
    },
  ];

  return (
    <div className={styles.introContainer}>
      {/* 标题 */}
      <Typography.Title>{title}</Typography.Title>
      {/* 简介 */}
      <Typography.Text>{shotDescription}</Typography.Text>
      <div className={styles.introDetailContent}>
        <Typography.Text style={{ marginLeft: 20 }}>
          ￥<span className={styles.introDetailStrongText}>{price}</span>/人起
        </Typography.Text>
        <Typography.Text style={{ marginLeft: 50 }}>
          <span className={styles.introDetailStrongText}>{rating}</span>分
        </Typography.Text>
      </div>
      <Carousel autoplay={true} slidesToShow={3}>
        {pictures.map((p, index) => (
          <Image key={index} height={150} src={p} />
        ))}
      </Carousel>
      <Table<RowType> columns={columns} dataSource={tableDataSource} bordered={false} pagination={false}  />
    </div>
  );
};

export default ProductIntro;
