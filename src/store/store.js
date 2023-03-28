import { createStore } from "redux";
// import reducers from "./reducers";
import rootReducers from "./reducers";

const store = createStore(rootReducers);

export default store;
