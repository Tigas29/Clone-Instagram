/* eslint-disable jsx-a11y/alt-text */
import "./style.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsChat, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import Logo from "../../img/logopost1.jpg";

export function Feed(props) {
  return (
    <>
      <div className="containter-post">
        <div className="infos-post">
          <img className="Logo-cabecalho" src={props.Logo} />
          <p>{props.nomeLogo}</p>
        </div>
        <FiMoreHorizontal />
      </div>
      <div className="img-post">
        <img src={props.PostoPhoto} />
      </div>
      <div className="infos-footer-post">
        <IconContext.Provider value={{ size: "30px" }}>
          <div className="icons-container">
            <div className="icons1">
              <div className="icon">
                <IoMdHeartEmpty />
              </div>
              <div className="icon">
                <BsChat />
              </div>
              <div className="icon">
                <FiSend />
              </div>
            </div>
            <div className="icons-right">
              <BsBookmark />
            </div>
          </div>
        </IconContext.Provider>
      </div>

      <section className="like">
        <span>{props.curtidas}</span>
      </section>

      <section className="legend">
        <p>
          <span>{props.nomeLogo}</span> {props.legenda}
        </p>
      </section>
      <section className="time-post">
        <time>HÁ 1 HORA</time>
      </section>

      <div className="input-fake-comment">
        <div className="fake-input">
          <IconContext.Provider value={{ size: "25px" }}>
            <div className="icon-comment">
              <BsEmojiSmile />
            </div>
          </IconContext.Provider>
          <input classnametype="comment" placeholder="Adicione um comentario" />
        </div>
        <button>Publicar</button>
      </div>
    </>
  );
}
