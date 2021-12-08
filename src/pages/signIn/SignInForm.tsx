import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import styles from "./SignInForm.module.css";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/user/slice";
import { useSelector } from "../../redux/hooks";
import { useHistory, useLocation } from "react-router-dom";

export const SignInForm = () => {
  const loading = useSelector((state) => state.user.loading);
  const jwt = useSelector((state) => state.user.token);
  const dispathch = useDispatch();
  const history = useHistory();
  const location = useLocation<{ to: string }>();
  const path = (location.state && location.state.to) || "/";

  useEffect(() => {
    if(!!jwt){
      history.push(path)
    }
  }, [jwt, history, path]);
  const onFinish = (values: any) => {
    dispathch(signIn({ password: values.password, account: values.username }));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className={styles.sigInForm}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="账号" name="username" rules={[{ required: true, message: "请输入账号!" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码!" }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
