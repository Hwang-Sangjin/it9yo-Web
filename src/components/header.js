import "../css/header.css";
import title from "../img/title.png";
import download from "../img/download.png";
import iphone from "../img/iphone.png";
import town from "../img/town.png";

function Header() {
  return (
    <div className="header snap">
      <img className="title" src={title} />
      <div className="quote">이웃끼리 함께 저렴한 가격으로 공동구매 해요</div>
      <img className="download" src={download} />
      <img className="town" src={town} />
      <img className="iphone" src={iphone} />
    </div>
  );
}

export default Header;
