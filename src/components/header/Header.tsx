import React, { FC } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/hooks";
import { GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Layout, Typography, Input, Dropdown, Menu, Button } from "antd";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { addLanguageActionCreator, changeLanguageActionCreator } from "../../redux/language/languageActions";

export const Header: FC = (props) => {
  // history 导航操作
  const history = useHistory();
  // location 当前路径的信息
  const location = useLocation();
  // params url中的参数
  const params = useParams();
  //match 路径匹配的数据
  const match = useRouteMatch();

  const language = useSelector((state) => state.language);
  const languageList = useSelector((state) => state.languageList);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const menuData = [
    { id: 1, label: t("header.weekend") },
    { id: 2, label: t("header.group") },
    { id: 3, label: t("header.backpack") },
    { id: 4, label: t("header.private") },
    { id: 6, label: t("header.cruise") },
    { id: 7, label: t("header.hotel") },
    { id: 8, label: t("header.local") },
    { id: 9, label: t("header.theme") },
    { id: 10, label: t("header.custom") },
    { id: 11, label: t("header.study") },
    { id: 12, label: t("header.visa") },
    { id: 13, label: t("header.enterprise") },
    { id: 14, label: t("header.high_end") },
    { id: 15, label: t("header.outdoor") },
    { id: 16, label: t("header.insurance") },
  ];

  const MenuHandlerClick = (e: { key: any }) => {
    if (e.key === "new") {
      dispatch(addLanguageActionCreator("newLanguage", "新语言"));
    } else {
      dispatch(changeLanguageActionCreator(e.key));
    }
  };
  return (
    <div className={styles["app-header"]}>
      {/* 顶部功能区 */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>{t("header.slogan")}</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            icon={<GlobalOutlined />}
            overlay={
              <Menu onClick={MenuHandlerClick}>
                {languageList.map((item, index) => {
                  return <Menu.Item key={item.code}>{item.name}</Menu.Item>;
                })}
                <Menu.Item key={"new"}>{t("header.add_new_language")}</Menu.Item>
              </Menu>
            }
          >
            {language === "en" ? "English" : "中文"}
          </Dropdown.Button>

          <Button.Group className={styles["button-group"]}>
            <Button
              onClick={() => {
                history.push("signIn");
              }}
            >
             {t("header.signin")}
            </Button>
            <Button
              onClick={() => {
                history.push("register");
              }}
            >
               {t("header.register")}
            </Button>
          </Button.Group>
        </div>
      </div>

      {/* 顶部展示 */}
      <Layout.Header className={styles["main-header"]}>
        <span
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={logo} alt="" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles.title}>
          {t("header.title")}
          </Typography.Title>
        </span>
        <Input.Search placeholder="请输入目的地" className={styles["search-input"]} />
      </Layout.Header>

      {/* 顶部菜单 */}
      <Menu mode="horizontal" className={styles["main-menu"]}>
        {menuData.map((item) => (
          <Menu.Item key={item.id}>{item.label}</Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Header;
