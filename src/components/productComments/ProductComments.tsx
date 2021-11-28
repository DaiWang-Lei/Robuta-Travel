import React from "react";
import { List, Comment, Tooltip } from "antd";

interface PropsType {
  data: {
    author: string;
    avatar: string;
    content: string;
    createDate: string;
  }[];
}

export const ProductComments: React.FC<PropsType> = ({ data }) => {
  return (
    <List
      dataSource={data}
      renderItem={(item) => {
        return (
          <li>
            <Comment author={item.author} avatar={item.avatar} content={item.content} datetime={item.createDate} />
          </li>
        );
      }}
    ></List>
  );
};
