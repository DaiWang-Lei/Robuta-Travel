import React from "react";
import { MainLayout } from "@/layouts/mainLayout";
import { Col, Row, Affix } from "antd";
import { PaymentCard } from "@/components";
export const ShoppingCart: React.FC = () => {
  return (
    <MainLayout>
      <Row>
        {/* 购物车清单 */}
        <Col span={18}>购物车</Col>

        {/* 支付 */}
        <Col span={6}>
          <PaymentCard />
        </Col>
      </Row>
    </MainLayout>
  );
};
