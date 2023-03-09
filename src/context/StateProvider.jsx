import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "./reducer";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [productList, setProductList] = useState();
  const [search, setSearch] = useState("");
  const [homeLoad, setHomeLoad] = useState(false);

  const initialState = {
    products: [],
    cart: [],
  };

  const fetchData = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    const newProductList = data.map((item) => ({
      ...item,
      added: false,
      quantity: 1,
      originalPrice: item.price,
    }));
    console.log(newProductList);
    setProductList(newProductList);
    setHomeLoad(false);
  };

  useEffect(() => {
    setHomeLoad(true);
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: productList });
    const filterProduct = productList?.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch({ type: "GET_PRODUCTS", payload: filterProduct });
  }, [productList, search]);

  const [state, dispatch] = useReducer(reducer, initialState);
  const data = { state, dispatch, search, setSearch, homeLoad };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useContextCustom = () => useContext(StateContext);
