import React, { useState } from "react";
import styles from "./PaymentForm.module.css";
import {} from "antd";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Form, Input } from "antd";

interface cardState {
  cvc: string;
  expiry: string;
  focused: undefined;
  name: string;
  number: string;
}

const initState = {
  cvc: "",
  expiry: "",
  focused: undefined,
  name: "",
  number: "",
};

export const PaymentForm: React.FC = () => {
  const [card, setCard] = useState<cardState>(initState);

  const handleInputFocus = (e: any) => {
    console.log(e.target.name);
    setCard({ ...card, focused: e.target.name });
  };

  const handleInputChange = (e: any) => {
    console.log(e.target);
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };
  return (
    <div style={{ marginTop: 50 }}>
      <Cards
        cvc={card.cvc}
        expiry={card.expiry}
        focused={card.focused}
        name={card.name}
        number={card.number}
      />
      <Form className={styles.paymentForm}>
        <Input
          type="tel"
          name="number"
          placeholder="银行卡号"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </Form>
    </div>
  );
};
