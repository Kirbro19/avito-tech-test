import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import StoryPage from "./pages/StoryPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/story/:id" element={<StoryPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
