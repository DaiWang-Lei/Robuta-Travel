import React, { useEffect } from "react";
import { MainLayout } from "../../layouts/mainLayout";
import { Col, Row, Affix } from "antd";
import { PaymentCard, ProductList } from "../../components";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/hooks";
import styles from "./ShoppingCart.module.css";
import { checkOut, clearShoppingCart } from "../../redux/shoppingCart/slice";
import { useHistory } from "react-router-dom";

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shoppingCart.data);
  const loading = useSelector((state) => state.shoppingCart.loading);
  const jwt = useSelector((state) => state.user.token);
  const history = useHistory();

  return (
    <MainLayout>
      <Row>
        {/* 购物车清单 */}
        <Col span={18}>
          <div className={styles.productListContainer}>
            {Array.isArray(products) && (
              <ProductList data={products.map((s) => s.touristRoute)} />
            )}
          </div>
        </Col>

        {/* 支付 */}
        <Col span={6}>
          <Affix className={styles.paymentCardContainer}>
            <PaymentCard
              loading={loading}
              originalPrice={
                Array.isArray(products) &&
                products.map((s) => s.originalPrice).reduce((a, b) => a + b, 0)
              }
              //@ts-ignore
              price={
                Array.isArray(products)
                  ? products
                      .map((s) => s.originalPrice * (s.discountPresent || 1))
                      .reduce((a, b) => a + b, 0)
                  : []
              }
              onCheckout={() => {
                console.log("剁手了！");
                if (products.length <= 0) {
                  return;
                }

                jwt && dispatch(checkOut(jwt)) && history.push("/placeOrder");
              }}
              onShoppingCartClear={() => {
                jwt &&
                  dispatch(
                    clearShoppingCart({
                      jwt,
                      itemsId: Array.isArray(products)
                        ? products.map((p) => p.id)
                        : [],
                    })
                  );
              }}
            />
          </Affix>
        </Col>
      </Row>
    </MainLayout>
  );
};
