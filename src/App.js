import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailList from "./EmailList";
import Header from "./Header";
import Mail from "./Mail";
import Sidebar from "./Sidebar";
import "./App.css";
import SendMail from "./SendMail";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/email" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
        <SendMail />
      </div>
    </Router>
  );
}

export default App;
