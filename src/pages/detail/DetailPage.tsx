import React, { FC, useState, useEffect } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import axios from "axios";
import { Spin, DatePicker, Space, Row, Col, Divider, Typography, Anchor, Menu } from "antd";
import { Footer, Header, ProductIntro, ProductComments } from "@/components";
import styles from "./Detail.module.css";
// import { c } from "@/../mock/comments";
const { RangePicker } = DatePicker;

interface MatchProps {
  touristRouteId: string;
}
export const DetailPage: FC<RouteComponentProps<MatchProps>> = (props) => {
  const { touristRouteId } = useParams<MatchProps>();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [comments, setCommnets] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/touristRoutes/1`);
        const commentsResult = await axios.get("/api/comments");
        setCommnets(commentsResult.data);
        setProduct(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Spin size="large" style={{ marginTop: 200, marginBottom: 200, marginLeft: "auto", marginRight: "auto", width: "100%" }} />;
  }
  /** 后台接口出错，使用默认数据展示 */
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <Header />
      <div className={styles.pageContent}>
        {/* 产品简介与日期选择 */}
        <div className={styles.productIntroContainer}>
          <Row>
            <Col span={13}>
              <ProductIntro
                title={product.title}
                shotDescription={product.shotDescription}
                price={product.price}
                coupons={product.coupons}
                points={product.points}
                discount={product.discount}
                rating={product.rating}
                pictures={product.touristRoutePictures.map((p: any) => p.url)}
              />
            </Col>
            <Col span={11}>
              <RangePicker open style={{ marginTop: 20 }} />
            </Col>
          </Row>
        </div>
        {/* 锚点菜单 */}
        <Anchor className={styles.productDetailAnchor} onClick={(e)=>{e.preventDefault()}}>
          <Menu mode="horizontal">
            <Menu.Item key="1">
              <Anchor.Link href="#features" title="产品特色"></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Anchor.Link href="#fees" title="费用"></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Anchor.Link href="#notes" title="预定须知"></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Anchor.Link href="#comments" title="用户评价"></Anchor.Link>
            </Menu.Item>
          </Menu>
        </Anchor>
        {/* 产品特色 */}
        <div id="features" className={styles.productDetailContainer}>
          <Divider>
            <Typography.Title level={3}>产品特色</Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{ __html: product.features }}></div>
        </div>
        {/* 费用 */}
        <div id="fees" className={styles.productDetailContainer}>
          <Divider>
            <Typography.Title level={3}>费用</Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{ __html: product.fees }}></div>
        </div>
        {/* 预定须知 */}
        <div id="notes" className={styles.productDetailContainer}>
          <Divider>
            <Typography.Title level={3}>预定须知</Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{ __html: product.notes }}></div>
        </div>
        {/* 产品评价 */}
        <div id="comments" className={styles.productDetailContainer}>
          <Divider>
            <Typography.Title level={3}>用户评价</Typography.Title>
          </Divider>
          <ProductComments data={comments} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
