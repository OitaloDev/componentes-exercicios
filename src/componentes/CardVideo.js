import react from "react";
import infoUsuario from "./infoUsuario";

const titulo = "Título do vídeo";
function CardVideo() {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div className="box-pagina-principal" onclick={reproduzVideo}>
      <img src="https://picsum.photos/400/488?a=1 " alt="" />
      <infoUsuario/>
    </div>
  );
}
export default CardVideo;
