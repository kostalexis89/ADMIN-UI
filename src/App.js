import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AppEntries from "./pages/AppEntries";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppDetails from "./App/AppDetails";

function App() {

  return (
    <>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entries" element={<AppEntries />} />
          <Route path='/entries/app/:id' element={<AppDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
