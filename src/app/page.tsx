"use client";
import { Provider } from "react-redux";
import { store } from "./stores";
import { HomePage } from "./home";

export default async function Home() {
  return (
    <Provider store={store}>
      <div className="bg-darkSecondBlue h-full">
        <HomePage />
      </div>
    </Provider>
  );
}
