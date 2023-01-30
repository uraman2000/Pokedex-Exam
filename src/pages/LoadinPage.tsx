import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    minHeight: "100vh",
  },
  text: {
    fontSize: "36px",
    textAlign: "center" as "center",
  },
};

export default function LoadinPage() {
  return (
    <div style={styles.container}>
      <Header />

      <div style={styles.text}>Mommy  Jennina Balba Iloveyou!!!!</div>


      <Footer />
    </div>
  );
}
