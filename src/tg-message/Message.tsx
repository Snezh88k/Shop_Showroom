import axios from "axios";
import React from "react";

export default function Message() {
  const TOKEN = "6038802604:AAGJX09ew1KdPN9Fk1bGVd_VhCLkGX5yn6g";
  const CHAT_ID = "-1001874434119";
  const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const sendMessage = (e: any) => {
    e.preventDefault();
    console.log(e.target.firstName.value);
    console.log(e.target.mail.value);

    let message = `<b>Новая заявка:</b>\n`;
    message += `<b>Имя: </b> ${e.target.firstName.value}\n`;
    message += `<b>Почта:</b> ${e.target.mail.value}\n`;

    axios
      .post(URL, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((response) => {
        e.target.firstName.value = "";
        e.target.mail.value = "";
      })
      .catch((err) => console.warn(err));
  };
  return (
    <div>
      message
      <div className="container">
        <form id="tg" action="" onSubmit={(e) => sendMessage(e)}>
          <input type="text" name="firstName" className="form-control" />
          <label className="form-group">
            Email
            <input
              id="email"
              type="email"
              name="mail"
              className="form-control"
            />
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}
