import "../css/footer.css";
import footerIcon from "../img/footerIcon.png";

function Footer() {
  return (
    <div className="footer snap">
      <div className="quote9">신뢰있는 플랫폼에서</div>
      <div className="quote10">주변 이웃과 함께 공동구매하자!</div>
      <img className="footerIcon" src={footerIcon} />
    </div>
  );
}

export default Footer;
