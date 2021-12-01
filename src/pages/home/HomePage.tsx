import React, { FC, useEffect } from "react";
import { Col, Row, Typography, Spin } from "antd";
import { Footer, Header, SideMenu, Carousel, ProductCollection, BusinessPartners } from "../../components";

import styles from "./HomePage.module.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ProductsListProps, getProductsActionCreator } from "../../redux/recommendProducts/recommendProductsActions";

import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { MainLayout } from "@/layouts/mainLayout";

export const HomePage: FC = () => {
  const { t } = useTranslation();

  /** 换成Redux架构 Hook模式 */
  const loading = useSelector((state) => state.recommendProducts.loading);
  const error = useSelector((state) => state.recommendProducts.error);
  const productList: ProductsListProps[] = useSelector((state) => state.recommendProducts.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsActionCreator());
  }, []);

  if (loading) {
    return <Spin size="large" style={{ marginTop: 200, marginBottom: 200, marginLeft: "auto", marginRight: "auto", width: "100%" }} />;
  }
  /** 后台接口出错，使用默认数据展示 */
  // if (error) {
  //   return <div>{error}</div>;
  // }
  return (
    <div>
      <MainLayout>
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

        <BusinessPartners />
      </MainLayout>
    </div>
  );
};

export default HomePage;
