import React, { FC, useEffect, useState } from "react";
import { Col, Row, Typography, Spin } from "antd";
import { Footer, Header, SideMenu, Carousel, ProductCollection, BusinessPartners } from "../../components";

import sideImage1 from "../../assets/images/sider1.png";
import sideImage2 from "../../assets/images/sider2.png";
import sideImage3 from "../../assets/images/sider3.png";
import styles from "./HomePage.module.css";
import { productList1, productList2, productList3 } from "./mockups";
import { ProductCollectionProps } from "../../components/productCollection/ProductCollection";
import { useTranslation } from "react-i18next";
import axios from "axios";
type prodoctsListsProps = ProductCollectionProps & { type: "danger" | "warning" | "success" } & { id: number };

export const HomePage: FC = () => {
  const { t } = useTranslation();

  const defaultProductList: prodoctsListsProps[] = [
    { title: t("home_page.hot_recommended"), sideImage: sideImage1, products: productList1, type: "danger", id: 1 },
    { title: t("home_page.domestic_travel"), sideImage: sideImage2, products: productList2, type: "warning", id: 2 },
    { title: t("home_page.outbound_travel"), sideImage: sideImage3, products: productList3, type: "success", id: 3 },
  ];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productList, setProductList] = useState<prodoctsListsProps[]>(defaultProductList);

  const getProducts = async () => {
    const { data } = await axios.get("http://123.56.149.216:8080/api/productCollections", {
      headers: {
        "x-icode": "B5052179AFA61ABB",
      },
    });
    if (data) {
      const customData = data.map((item: prodoctsListsProps) => {
        const curType = item.id === 1 ? "danger" : item.id === 2 ? "warning" : "success";
        const curSideImg = item.id === 1 ? sideImage1 : item.id === 2 ? sideImage2 : sideImage3;

        return {
          ...item,
          products: item.touristRoutes,
          type: curType,
          sideImage: curSideImg,
        };
      });
      debugger;
      setProductList(customData);
      setLoading(false);
      setError(null);
    }
  };
  useEffect(() => {
    try {
      getProducts();
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setProductList(defaultProductList);
    }
  }, []);

  if (loading) {
    return <Spin size="large" style={{ marginTop: 200, marginBottom: 200, marginLeft: "auto", marginRight: "auto", width: "100%" }} />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <Header />
      <div className={styles["page-content"]}>
        <Row>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>

        {productList.map((item, index) => {
          return (
            <ProductCollection
              title={
                <Typography.Title level={3} type={item.type}>
                  {item.id === 1 ? t("home_page.hot_recommended") : item.id === 2 ? t("home_page.domestic_travel") : t("home_page.outbound_travel")}
                </Typography.Title>
              }
              sideImage={item.sideImage}
              products={item.products}
            />
          );
        })}
      </div>
      <BusinessPartners />
      <Footer />
    </div>
  );
};

export default HomePage;
