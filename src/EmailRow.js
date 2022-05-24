import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./EmailRow.css";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow({ id, subject, message, time }) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const openEmail = () => {
    history("/email");
    dispatch(
      selectMail({
        id,
        subject,
        message,
        time,
      })
    );
  };
  return (
    <div onClick={openEmail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{subject}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description">
            {" - "}
            {message}
          </span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
