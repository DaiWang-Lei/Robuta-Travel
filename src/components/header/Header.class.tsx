import React, { FC } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { GlobalOutlined } from "@ant-design/icons";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Layout, Typography, Input, Dropdown, Menu, Button } from "antd";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { RootType } from "../../redux/store";
import { withTranslation, WithTranslation } from "react-i18next";
import { LanguageState } from "../../redux/language/languageReducer";
import { addLanguageActionCreator, changeLanguageActionCreator } from "../../redux/language/languageActions";

interface State extends LanguageState {}

const mapStateToProps = (state: RootType) => {
  return {
    language: state.language,
    languageList: state.languageList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage: (code: "zh" | "en") => {
      const action = changeLanguageActionCreator(code);
      dispatch(action);
    },
    addLanguage: (code: string, name: string) => {
      const action = addLanguageActionCreator(code, name);
      dispatch(action);
    },
  };
};

type PropsTypes = RouteComponentProps & WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
class HeaderComponent extends React.Component<PropsTypes> {
  MenuHandlerClick(e: { key: any }) {
    if (e.key === "new") {
      /**
       * 方式1
       * const action = {
       *  type: "add_language",
       *  payload: { code: "newLanguage", name: "新语言" },
       * };
       */

      /**
       * 方式2:工厂模式
       * const action = addLanguageActionCreator("newLanguage", "新语言");
       * store.dispatch(action);
       */

      // 方式3：react-redux+工厂模式
      this.props.addLanguage("newLanguage", "新语言");
    } else {
      // 方式1
      // const action = { type: "change_language", payload: e.key };
      /**
       * 方式2:工厂模式
       *  const action = changeLanguageActionCreator(e.key);
       *  store.dispatch(action);
       */

      // 方式3：react-redux+工厂模式
      this.props.changeLanguage(e.key);
    }
  }

  render() {
    const { history, t } = this.props;
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
                <Menu onClick={this.MenuHandlerClick}>
                  {this.props.languageList.map((item, index) => {
                    return <Menu.Item key={item.code}>{item.name}</Menu.Item>;
                  })}
                  <Menu.Item key={"new"}>{t("header.add_new_language")}</Menu.Item>
                </Menu>
              }
            >
              {this.props.language === "en" ? "English" : "中文"}
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
  }
}
export const Header = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(HeaderComponent)));
export default Header;
