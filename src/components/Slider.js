import { useEffect, useState } from "react";

const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
  "/images/8.jpeg",
  "/images/9.jpeg",
];

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3s
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