import React from "react";
import styles from "./RegisterForm.module.css";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout =  {
  wrapperCol: {offset: 8, span: 16}
};


export const RegisterForm: React.FC = () => {
  return (
    <>
      <Form
        {...layout}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        className={styles.registerForm}

        autoComplete="off"
      >
        <Form.Item label="用户名" name="username" rules={[{ required: true, message: "请输入用户名！" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码!" }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item label="再次输入密码" name="Repassword" rules={[{ required: true, message: "请再次输入密码!" }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" {...tailLayout}>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
