import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailList from "./EmailList";
import Header from "./Header";
import Mail from "./Mail";
import Sidebar from "./Sidebar";
import "./App.css";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
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
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
