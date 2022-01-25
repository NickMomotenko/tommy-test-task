import React from "react";

import { Route, Routes } from "react-router-dom";

import List from "./components/List";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import Container from "./components/UI/Container";
import Header from "./components/UI/Header";

import { DataContext } from "./context/DataContext";

const App = () => {
  const {
    data: { data },
    favorites,
  } = React.useContext(DataContext);

  return (
    <div className="wrapper">
      <Container>
        <Header>
          <Logo />
          <Menu />
        </Header>
        <Routes>
          <Route path="/" element={<List data={data} />} />
          <Route path="/favorites" element={<List data={favorites} />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
