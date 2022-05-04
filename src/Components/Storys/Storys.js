import "./styleStorys.css";
import matue from "../../img/perfil matue.jpg";
import jao from "../../img/jao.jpg";
import Egho from "../../img/ecghostudios.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
export function Story() {
  const [storys, setStorys] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=15")
      .then(function ({ data }) {
        setStorys(data.results);
      });
  }, []);
  return (
    <div className="container">
      {storys.map((profile) => {
        return (
          <div className="user-elements">
            <div className="back">
              <img className="image-perfil" src={profile.picture.thumbnail} />
            </div>
            <span>{profile.name.first}</span>
          </div>
        );
      })}
    </div>
  );
}
