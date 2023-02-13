import { createStore, applyMiddleware } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  painting: "",
  film: "",
  handle: "",
  width: "",
  height: "",
  openingType: true,
  accessories: [],
  price: 0,
};

const middleware = [thunk];

const reducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case "SET_PAINTING_COLOR":
      return { ...state, painting: action.payload };
    case "SET_FILM_COLOR":
      return { ...state, film: action.payload };
    case "SET_HANDLE_COLOR":
      return { ...state, handle: action.payload };
    case "SET_WIDTH":
      return { ...state, width: action.payload };
    case "SET_HEIGHT":
      return { ...state, height: action.payload };
    case "SET_OPENING_TYPE":
      return { ...state, openingType: action.payload };
    case "SET_ACCESSORIES":
      return { ...state, accessories: action.payload };
    case "SET_PRICE":
      return calculatePrice(state);
    default:
      return state;
  }
};


/*
  Высчитывание суммы заказа
*/
function calculatePrice (state) {
  let price = 0;
  if (state.accessories.length > 0) {
    price += state.accessories.reduce((sum, a) => sum + a.price, 0);
  }
  if (state.width.price) {
    price += parseInt(state.width.price)
  }
  if (state.width.price) {
    price += parseInt(state.width.price)
  }
  if (state.painting.price) {
    price += parseInt(state.painting.price)
  }
  if (state.handle.price) {
    price += parseInt(state.handle.price)
  }
  if (state.film.price) {
    price += parseInt(state.film.price)
  }
  
  return { ...state, price: price};
}

// middleware для devtools
export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

const makeStore = () => {
  return store
};

// Оборачиваем в оболочку для nextjs
export const wrapper = createWrapper(makeStore);

export default wrapper;
