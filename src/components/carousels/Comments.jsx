import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FacebookReview from "../util/FacebookReview";
import FoursquareReview from "../util/FoursquareReview";
import GoogleReview from "../util/GoogleReview";
import RestaurantGuru from "../util/RestaurantGuru";

function CommentSlider() {
  return (
    <>
      <div>
        <Carousel
          showStatus={false}
          showThumbs={false}
          interval={6000}
          autoPlay={true}
          infiniteLoop
        >
          <div className="comments">
            <h3>
              Çok sevdiğim mekanlardan biri. Alemi sevenlerin Bursa'daki tek
              eğlence mekânı
            </h3>
            <p className="author">- Mustafa A.</p>
          </div>
          <div className="comments">
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
          <div className="comments ">
            <h3>Kaliteli ve nezih bir mekan</h3>
            <p className="author">- İrfan C.</p>
          </div>
        </Carousel>
      </div>

      <div className="reviews">
        <div className="review">
          <FoursquareReview />
          <span className="review-pts">8.4/10</span>
        </div>
        <div className="review">
          <RestaurantGuru />
          <span className="review-pts">4/5</span>
        </div>
        <div className="review">
          <GoogleReview />
          <span className="review-pts">4.6/5</span>
        </div>
        <div className="review">
          <FacebookReview />
          <span className="review-pts">3.4/5</span>
        </div>
      </div>
    </>
  );
}
export default CommentSlider;
