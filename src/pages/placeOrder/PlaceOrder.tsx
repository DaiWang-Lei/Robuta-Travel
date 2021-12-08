import React from "react";
// import { MainLayout } from "@/layouts/mainLayout";
import { MainLayout } from '../../layouts/mainLayout';
import { Col, Row } from "antd";
// import { CheckOutCard, PaymentForm } from "@/components";
import { CheckOutCard, PaymentForm } from "../../components";

// import { useSelector } from "@/redux/hooks";
import { useSelector } from "../../redux/hooks";

import { useDispatch } from "react-redux";
// import { placeOrder } from "@/redux/order/slice";
import { placeOrder } from "../../redux/order/slice";

export const PlaceOrder: React.FC = () => {
  const jwt = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);
  const order = useSelector((state) => state.order.currentOrder);
  debugger;
  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          <PaymentForm />
        </Col>
        <Col span={12}>
          <CheckOutCard
            loading={loading}
            order={order}
            onCheckOut={() => {
              jwt &&  dispatch(placeOrder({ jwt,orderId:order.id}));
            }}
          />
        </Col>
      </Row>
    </MainLayout>
  );
};
