import { useEffect, useState } from "react";
import img1 from "../Images/1.jpeg";
import img2 from "../Images/2.jpeg";
import img3 from "../Images/3.jpeg";
import img4 from "../Images/4.jpeg";
import img5 from "../Images/5.jpeg";
import img6 from "../Images/6.jpeg";
import img7 from "../Images/7.jpeg";
import img8 from "../Images/8.jpeg";
import img9 from "../Images/9.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={styles.container}>
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        style={styles.image}
      />
    </section>
  );
}

const styles = {
  container: {
    maxWidth: "90%",
    margin: "40px auto",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "900px",
    maxHeight: "500px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    transition: "opacity 0.5s ease-in-out",
  },
};

export default Slider;