// create a makeStore function
import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {rootReducer, RootState} from "./reducers";
import {createStore, Store} from "redux";

const makeStore:MakeStore<Store> = (context: Context) => createStore(rootReducer);

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});