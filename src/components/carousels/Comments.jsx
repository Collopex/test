import { Carousel } from "antd";

function CommentSlider() {
  return (
    <>
      <div>
        <Carousel
          autoplay
          autoplaySpeed={4000}
          draggable
          dots={false}
          pauseOnHover={false}
        >
          <div className="comments">
            <h3>
              Çok sevdiğim mekanlardan biri. Alemi sevenlerin Bursa'daki tek
              eğlence mekânı
            </h3>
            <p className="author ">- Mustafa A.</p>
          </div>
          <div className="comments ">
            <h3>
              Mezeler harika, çalışanlar kibar, ortam sıcacık, kızlar güzel hele
              bir de dostlarlaysan keyfe diyecek yok..
            </h3>
            <p className="author">- Hüseyin P.</p>
          </div>
          <div className="comments">
            <h3>
              Dostlarımla gittğim seçili mekanlardan biri fiyatları piyasaya
              göre bi tık pahalı ama hizmetten çok memnunuz.
            </h3>
            <p className="author ">- Bülent K.</p>
          </div>
          <div className="comments ">
            <h3>İçerisi tam bir şampiyonlar ligi gibi süper</h3>
            <p className="author">- İsmail Y.</p>
          </div>
        </Carousel>
      </div>
    </>
  );
}
export default CommentSlider;
