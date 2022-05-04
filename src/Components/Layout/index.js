import { Story } from "../Storys/Storys";
import { Feed } from "../Feed/Feed";
import { Suggestion } from "../Sugestao/index";
import "./styles.css";
import Logo from "../../img/logopost1.jpg";
import Post1 from "../../img/post1.jpg";
import Logo2 from "../../img/logopost2.jpg";
import Post2 from "../../img/post2.jpg";
import Logo3 from "../../img/logopost3.jpg";
import Post3 from "../../img/post3.jpg";
import Logo4 from "../../img/logopost4.jpg";
import Post4 from "../../img/post4.jpg";
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
                nomeLogo="silvestri_gabriel"
                Logo={Logo2}
                PostoPhoto={Post2}
                curtidas="15M de curtidas"
                legenda=" Se você precisa de motivação para continuar estudando UX, leia esse livro! Com ele aprendi lições incríveis sobre desafios e dificuldades e consegui superar muitas etapas na minha jornada de UX Designer :)"
              />
            </div>
            <div className="box1">
              <Feed
                nomeLogo="Onebitcode"
                Logo={Logo}
                PostoPhoto={Post1}
                curtidas="1k de curtidas"
                legenda='Entenda o que é uma API de uma forma
                extremamente simplificada e com um exemplo da vida real 😎💻 1. Apoie
                curtindo 2. Comenta um "🤘" 3. Salva para não perder'
              />
            </div>
            <div className="box1">
              <Feed
                nomeLogo="hyesers"
                Logo={Logo3}
                PostoPhoto={Post3}
                curtidas="1M de curtidas"
                legenda="Desafio lançado: será que você conhece alguma dessas ferramentas? 👀"
              />
            </div>
            <div className="box1">
              <Feed
                nomeLogo="forboysbrecho"
                Logo={Logo4}
                PostoPhoto={Post4}
                curtidas="245 curtidas"
                legenda="#forboysbrecho 📺 Tricô PP R$79,90 • alfaiataria n36 R$79,90 🚀 disponíveis no site clicando no link da bio!"
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
