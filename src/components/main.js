import "../css/main.css";
import iphone2 from "../img/iphone2.png";
import people from "../img/people.png";
import iphone3 from "../img/iphone3.png";
import message from "../img/message.png";
import chat from "../img/chat.png";
import intersect from "../img/intersect.png";
import backIcon from "../img/backIcon.png";
import iphone4 from "../img/iphone4.png";
import blind from "../img/blind.png";
import review1 from "../img/review1.png";
import review2 from "../img/review2.png";
import user from "../img/user.png";

function Main() {
  return (
    <div className="main">
      <div className="firstSection snap">
        <img className="iphone2" src={iphone2} />
        <img className="people" src={people} />
        <div className="circle1"></div>
        <div className="quote2">이웃과 이웃을</div>
        <div className="quote3">'잇구요' </div>
      </div>
      <div className="secondSection">
        <img className="intersect" src={intersect} />
        <img className="backIcon" src={backIcon} />
        <img className="iphone3" src={iphone3} />
        <img className="chat" src={chat} />
        <img className="message" src={message} />
        <div className="quote4">이웃과 판매자를</div>
        <div className="quote5">
          직거래로 <text style={{ color: "#FF9E3E" }}>'잇구요'</text>{" "}
        </div>
      </div>
      <div className="thirdSection">
        <img className="iphone4" src={iphone4} />
        <div className="blind" src={blind}></div>
        <img className="review1" src={review1} />
        <img className="review2" src={review2} />
        <img className="user" src={user} />
        <div className="quote6">신뢰를 위해</div>
        <div className="quote7">블록체인으로</div>
        <div className="quote8">'잇구요'</div>
      </div>
      <div className="secondSnap snap"></div>
      <div className="thirdSnap snap"></div>
      <div className="firstCover"></div>
      <div className="secondCover"></div>
      <div className="thirdCover"></div>
    </div>
  );
}

export default Main;
