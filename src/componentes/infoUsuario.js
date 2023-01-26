import react from "react";

const imagem = "";
const titulos = "TV";

function infoUsuario() {
  return (
    <div>
      <img src={imagem} alt="" />
      <h4>{titulos}</h4>
    </div>
  );
}
export default infoUsuario;
