import { useEffect, useState } from "react";
import Navbar from "../componentes/Navbar";
import "../estilos/HomeEstilos.css";
import Universe from "../componentes/Universe";

function Home() {
  //estado de la foto
  const [foto, setFoto] = useState(null);
  //definimos api
  const API_URL =
    "https://api.nasa.gov/planetary/apod?api_key=HQv6UAEI02DCGIGaJrCSSAfTgANTZ5pNadylTRVY";
  //llamada a la api
  const getFoto = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setFoto(data);
    } catch (error) {
      console.log("Error al obtener la información");
    }
  };
  //renderizamos la foto
  useEffect(() => {
    getFoto();
  }, []);
  return (
    <>
      <Universe />
      {!foto ? (
        <p>Cargando ...</p>
      ) : (
        <>
          <div
            className="d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start gap-4"
            style={{ marginTop: "50px" }}
          >
            {/* Card */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={foto.url} className="card-img-top" alt={foto.title} />
              <div className="card-body">
                <h5 className="card-title">{foto.title}</h5>
              </div>
            </div>

            {/* Contenedor de descripción */}
            <div
              className="descripcion-contenedor p-4  text-light rounded shadow"
              style={{ maxWidth: "600px" }}
            >
              <p className="mb-0 text-justify">{foto.explanation}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Home;
