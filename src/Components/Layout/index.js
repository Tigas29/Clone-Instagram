import { Story } from "../Storys/Storys";
import { Feed } from "../Feed/Feed";
import { Suggestion } from "../Sugestao/index";
import "./styles.css";
import Logo from "../../img/logopost1.jpg";
import Post1 from "../../img/post1.jpg";

export function Layout() {
  return (
    <>
      <div className="container-container">
        <div className="MainGrid">
          <div className="first-column" style={{ gridArea: "firstColumn" }}>
            <div className="box">
              <Story />
            </div>
            <div className="box1" style={{ margin: "30px 0" }}>
              <Feed
                nomeLogo="Onebitcode"
                Logo={Logo}
                PostoPhoto={Post1}
                curtidas="15M de curtidas"
                legenda='Entenda o que é uma API de uma forma
              extremamente simplificada e com um exemplo da vida real 😎💻 1. Apoie
              curtindo 2. Comenta um "🤘" 3. Salva para não perder'
              />
            </div>
          </div>
          <div style={{ gridArea: "secondColumn" }}>
            <div className="suggestionBox">
              <Suggestion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
