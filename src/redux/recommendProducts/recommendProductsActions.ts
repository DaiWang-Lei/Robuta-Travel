import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
/** 兼容可以请求到数据的情况 */
import sideImage1 from "../../assets/images/sider1.png";
import sideImage2 from "../../assets/images/sider2.png";
import sideImage3 from "../../assets/images/sider3.png";
/** 正在调用推荐信息api */
export const FETCH_RECOMMEND_PRODUCTS_START = "fetch_recommend_products_start";

/** 推荐信息api调用成功 */
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = "fetch_recommend_products_success";

/** 推荐信息api调用失败 */
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "fetch_recommend_products_fail";

interface FetchRecommendProductsStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START;
}

interface FetchRecommendProductsSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS;
  payload: any;
}

interface FetchRecommendProductsFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL;
  payload: any;
}

export interface ProductsListProps {
  title: JSX.Element | string;
  sideImage: string;
  products: any[];
  touristRoutes?: any[];
  type: "danger" | "warning" | "success";
  id: number;
}

export type recommendProductsActions =
  | FetchRecommendProductsStartAction
  | FetchRecommendProductsSuccessAction
  | FetchRecommendProductsFailAction
  | ProductsListProps;

export const fetchRecommendProductsStartActionCreator = (): FetchRecommendProductsStartAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START,
  };
};

export const fetchRecommendPRoductsSuccessActionCreator = (data: any): FetchRecommendProductsSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const fetchRecommendProductsFailActionCreator = (error: any): FetchRecommendProductsFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error,
  };
};

/**
 *
 * @returns ThunkAction
 * R:return 定义最终的输出类型
 * S:state
 * E:定义action中额外的参数
 * A:action
 */
export const getProductsActionCreator = (): ThunkAction<void, RootState, unknown, recommendProductsActions> => async(dispatch, getState) => {
  try {
    dispatch(fetchRecommendProductsStartActionCreator());
    const { data } = await axios.get("http://123.56.149.216:8080/api/productCollections");
    if (data) {
      const customData = data.map((item: ProductsListProps) => {
        const curType = item.id === 1 ? "danger" : item.id === 2 ? "warning" : "success";
        const curSideImg = item.id === 1 ? sideImage1 : item.id === 2 ? sideImage2 : sideImage3;
        return {
          ...item,
          products: item.touristRoutes,
          type: curType,
          sideImage: curSideImg,
        };
      });
      dispatch(fetchRecommendPRoductsSuccessActionCreator(customData));
    }
  } catch (error) {
    dispatch(fetchRecommendProductsFailActionCreator(error.message));
  }
};
