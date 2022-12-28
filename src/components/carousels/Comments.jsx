import { Carousel } from "antd";

function CommentSlider() {
  return (
    <>
      <Carousel autoplay autoplaySpeed={5500} draggable>
        <div className="comments">
          <h3>
            Çok sevdiğim mekanlardan biri. Alemi sevenlerin Bursa'daki tek
            eğlence mekânı
          </h3>
          <p className="author mdm-margin-top ">- Mustafa A.</p>
        </div>
        <div className="comments ">
          <h3>
            Mezeler harika, çalışanlar kibar, ortam sıcacık, kızlar güzel hele
            bir de dostlarlaysan keyfe diyecek yok..
          </h3>
          <p className="author mdm-margin-top">- Hüseyin P.</p>
        </div>
        <div className="comments">
          <h3>
            Dostlarımla gittğim seçili mekanlardan biri fiyatları piyasaya göre
            bi tık pahalı ama hizmetten çok memnunuz.
          </h3>
          <p className="author mdm-margin-top ">- Bülent K.</p>
        </div>
        <div className="comments ">
          <h3>İçerisi tam bir şampiyonlar ligi gibi süper</h3>
          <p className="author mdm-margin-top">- İsmail Y.</p>
        </div>
      </Carousel>
    </>
  );
}
export default CommentSlider;
