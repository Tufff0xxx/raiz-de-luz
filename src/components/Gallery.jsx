import "./Gallery.css"
import vela1 from "../assets/vela1.jpeg";
import vela2 from "../assets/vela2.jpeg";
import vela3 from "../assets/vela3.jpeg";
import vela4 from "../assets/vela4.jpeg";
import vela5 from "../assets/vela5.jpeg";
import vela6 from "../assets/vela6.jpeg";


const products = [
  {
    image: vela1,
    name: "Lavanda"
  },
  {
    image: vela2,
    name: "Cristal Rosa"
  },
  {
    image: vela3,
    name: "Rosa Encapsulada"
  },
  {
    image: vela4,
    name: "Flores Amarillas"
  },
  {
    image: vela5,
    name: "Flor de Café"
  },
  {
    image: vela6,
    name: "Flor de Café"
  }
];

export default function Gallery() {
  return (
    <section className="gallery">

      <h2>Nuestra Colección</h2>

      <div className="gallery-grid">
        {products.map((item,index)=>(
          <div className="card" key={index}>
            <img src={item.image} alt={item.name}/>

            <div className="card-overlay">
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}