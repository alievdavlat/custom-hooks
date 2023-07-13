import React from "react";
import {  Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import CardsForUseAxios from "./components/CardsForUseAxios";
import ModalFiled from "./components/ModalFiled";
import Input from "./components/Input";

const App = () => {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/useaxios" element={<CardsForUseAxios/>}/>
      <Route path="/usemodal" element={<ModalFiled/>}/>
      <Route path="/usedebounce" element={<Input/>}/>

     </Routes>
    </>
  );
};

export default App;
