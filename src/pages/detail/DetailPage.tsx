import React, { FC, useState, useEffect } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import axios from "axios";
import { Spin, DatePicker, Space, Row, Col } from "antd";
import { Footer, Header, ProductIntro } from "@/components";
import styles from "./Detail.module.css";
const { RangePicker } = DatePicker;

interface MatchProps {
  touristRouteId: string;
}
export const DetailPage: FC<RouteComponentProps<MatchProps>> = (props) => {
  const { touristRouteId } = useParams<MatchProps>();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/touristRoutes/1`);
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
                pictures={product.touristRoutePictures.map((p:any) => p.url)}
              />
            </Col>
            <Col span={11}>
              <RangePicker open style={{ marginTop: 20 }} />
            </Col>
          </Row>
        </div>
        {/* 锚点菜单 */}
        <div className={styles.productDetailAnchor}></div>
        {/* 产品特色 */}
        <div id="feature" className={styles.productDetailContainer}></div>
        {/* 费用 */}
        <div id="fees" className={styles.productDetailContainer}></div>
        {/* 预定须知 */}
        <div id="notes" className={styles.productDetailContainer}></div>
        {/* 产品评价 */}
        <div id="comments" className={styles.productDetailContainer}></div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
