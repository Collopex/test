import { useState } from "react";
import FacebookLogo from "../../util/FacebookLogo";
import InstagramLogo from "../../util/InstagramLogo";
import FoursquareLogo from "../../util/FoursquareLogo";

import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

function ReservationContactUs() {
  const [username, setUserName] = useState("");
  const [usernumber, setUsernumber] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [message, setMessage] = useState("");

  const userCollectionRef = collection(db, "messages");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(userCollectionRef, {
      name: username,
      number: usernumber,
      Email: emailAdress,
      message: message,
    })
      .then(() => {
        alert("Bildiriminiz için teşekkür ederiz...");
      })
      .catch((error) => {
        alert(error.message("Lütfen daha sonra tekrar deneyiniz"));
      });

    setUserName("");
    setUsernumber("");
    setEmailAdress("");
    setMessage("");
  };

  return (
    <>
      <div className="grid-45-55 md-margin-top s-padding  ">
        <div>
          <h2 className="reservation-contactus-up">
            Fikirleriniz Bizim İçin Değerli
          </h2>
          <br />
          <p className="reservation-contactus">
            Bizi aşağıdaki sosyal medyalarımızdan takip edebilirsiniz.
          </p>
          <br />

          <div className="flex-icons md-margin-top">
            <a
              href="https://www.facebook.com/people/Yenihisar-Gazinosu/100068385632516/"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookLogo />
            </a>
            <a
              href="https://www.instagram.com/hisarnight/?hl=en"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramLogo />
            </a>
            <a
              href="https://foursquare.com/v/hisar-gazinosu/5081a701e4b052212d9ae067"
              rel="noreferrer"
              target="_blank"
            >
              <FoursquareLogo />
            </a>
          </div>
        </div>
        <form
          name="contact"
          method="post"
          id="message-form"
          onSubmit={handleSubmit}
        >
          <div className="grid-form sm-margin-top">
            <div>
              <input
                onChange={(event) => setUserName(event.target.value)}
                value={username}
                className="inputs"
                placeholder="Isim*"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div>
              <input
                onChange={(event) => setUsernumber(event.target.value)}
                value={usernumber}
                className="inputs"
                placeholder="Telefon"
                type="text"
                id="usernumber"
                name="usernumber"
              />
            </div>
            <div className="expand">
              <input
                onChange={(event) => setEmailAdress(event.target.value)}
                value={emailAdress}
                className="inputs "
                placeholder="E-Posta*"
                type="text"
                id="emailAdress"
                name="emailAdress"
                required
              />
            </div>
            <div className="expand">
              <textarea
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                className="inputs "
                placeholder="Mesajınız*"
                type="text"
                id="message"
                name="message"
                required
              />
            </div>
            <div>
              <button className="button" type="submit">
                Mesajı Gönder
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ReservationContactUs;
