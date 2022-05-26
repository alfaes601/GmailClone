import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    let collRef = await collection(db, "emails"); // returns a collection ref. ie. creates one if one does not exist.
    await addDoc(
      collRef,
      {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      },
      { merge: true }
    );
    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h1>New Message</h1>
        <Close
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })}
          placeholder="To"
          type="email"
        />
        {errors.to && <p className="sendMail__error">To is required</p>}
        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
          type="text"
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required</p>
        )}
        <input
          {...register("message", { required: true })}
          placeholder="Message..."
          type="text"
          className="sendMail__message"
        />
        {errors.message && (
          <p className="sendMail__error">Message is required</p>
        )}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
