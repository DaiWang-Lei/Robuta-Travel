import React from "react";
import { Button, Card, Skeleton, Table, Typography } from "antd";
import {
  CheckCircleOutlined,
  DeleteOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { Redirect, useHistory } from "react-router-dom";

const { Meta } = Card;
const { Title, Text } = Typography;

interface OrderItem {
  key: number;
  item: string;
  amount: string | number | JSX.Element;
}

const columns: ColumnsType<OrderItem> = [
  { title: "产品", dataIndex: "item", key: "item" },
  { title: "价格", dataIndex: "amount", key: "amount" },
];

interface PropsType {
  loading?: boolean;
  order?: any;
  onCheckOut: () => void;
}

export const CheckOutCard: React.FC<PropsType> = ({
  loading,
  order,
  onCheckOut,
}) => {
  const history = useHistory();
  debugger;
  const paymentData: OrderItem[] = order
    ? order.orderItems.map((i: any, index: number) => ({
        key: index,
        item: i.touristRoute.title,
        amount: (
          <>
            <Text delete={true}>￥ {i.originalPrice}</Text>
            <Text>￥ {i.originalPrice * i.discountPresent}</Text>
          </>
        ),
      }))
    : [];
  return (
    <Card
      actions={[
        order && order.state === "Completed" ? (
          <Button
            type="primary"
            danger={true}
            loading={loading}
            onClick={() => {
              history.push("/");
            }}
          >
            <HomeOutlined />
            回到首页
          </Button>
        ) : (
          <Button
            type="primary"
            danger={true}
            loading={loading}
            onClick={onCheckOut}
          >
            <CheckCircleOutlined />
            支付
          </Button>
        ),
      ]}
    >
      <Skeleton loading={loading} active={true}>
        <Meta
          title={
            <Title level={2}>
              {order && order.state === "Completed" ? "支付成功" : "总计"}
            </Title>
          }
          description={
            <Table<OrderItem>
              columns={columns}
              dataSource={paymentData}
              showHeader={false}
              size="small"
              bordered={false}
              pagination={false}
            />
          }
        />
      </Skeleton>
    </Card>
  );
};
