import { useState, useEffect, useRef } from "react";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

  const messageRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    const el = messageRef.current;
    gsap.fromTo(
      el,
      {
        x: -120,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.05,
        x: 0,
        opacity: 1,
        ease: "Power2.easeOut",
      }
    );
  }, []);

  useEffect(() => {
    const el = locationRef.current;
    gsap.fromTo(
      el,
      {
        x: 120,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.05,
        x: 0,
        opacity: 1,
        ease: "Power2.easeOut",
      }
    );
  }, []);

  return (
    <>
      <div className=" grid-50-50">
        <div ref={messageRef}>
          <h2 className="thoughts-caption">Fikirleriniz Bizim İçin Değerli</h2>
          <form
            name="contact"
            method="post"
            id="message-form"
            onSubmit={handleSubmit}
          >
            <div className="grid-form ">
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

        <div className="location-div">
          <div className="location" ref={locationRef}>
            <h2 className="location-caption">Konumumuz</h2>
            <p className="location-detail">
              Yeni Hisar Gazinosu Kayhan Mah. İnönü Cad. Ersan İş Hanı No:6,
              16230 Osmangazi/Bursa
              <br />
              <br />
              Açılış - Kapanış: 23:00 - 05:30
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReservationContactUs;
