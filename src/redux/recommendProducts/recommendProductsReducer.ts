import {
  recommendProductsActions,
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  FETCH_RECOMMEND_PRODUCTS_FAIL,
} from "./recommendProductsActions";

import sideImage1 from "../../assets/images/sider1.png";
import sideImage2 from "../../assets/images/sider2.png";
import sideImage3 from "../../assets/images/sider3.png";
import { productList1, productList2, productList3 } from "./mockups";

interface RecommendProductsState {
  productList: any[];
  loading: boolean;
  error: undefined | null;
}


const defaultState: RecommendProductsState = {
  productList: [
    { title: "home_page.hot_recommended", sideImage: sideImage1, products: productList1, type: "danger", id: 1 },
    { title: "home_page.domestic_travel", sideImage: sideImage2, products: productList2, type: "warning", id: 2 },
    { title: "home_page.outbound_travel", sideImage: sideImage3, products: productList3, type: "success", id: 3 },
  ],
  loading: true,
  error: null,
};

export default (state = defaultState, action: recommendProductsActions) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return { ...state, loading: true };
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return { ...state, loading: false, productList: action.payload };
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
};
