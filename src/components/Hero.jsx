import "./Hero.css";
import heroVelas from "../assets/heroVelas.jpeg"

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        
        <img src={heroVelas} alt="Raíz de Luz" className="hero-logo" />
        <p>
            VELAS ARTESANALES CREADAS PARA LLENAR TUS ESPACIOS DE CALMA, AROMA Y BIENESTAR 
        </p>

      </div>
    </section>
  );
}