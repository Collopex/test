import ReservationMap from "./ReservationMap";

function ReservationDetails() {
  return (
    <div className="mdm-margin-top flex-column ">
      <h2 className="reservation-caption-up ">
        Özel Localarmız için lütfen rezervasyon yapmayı unutmayınız...
      </h2>

      <p className="reservation-number ">+90 224 223 43 72</p>

      <div className="grid-55-45-map s-padding ">
        <ReservationMap />
        <div>
          <h2 className="reservation-location">Konumumuz</h2>
          <p className="reservation-caption md-margin-bottom  ">
            Yeni Hisar Gazinosu Kayhan Mah., İnönü Cad. Ersan İş Hanı No:6,
            16230 Osmangazi/Bursa
            <br />
            <br />
            Açılış - Kapanış: 23:00 - 05:30
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReservationDetails;
