import React from "react";
const styles = {
  container: {
    backgroundColor: "#3F3F3F",
    fontSize: "3.9em",
    color: "white",
    textAlign: "center" as "center",
    padding: "25px",
    marginBottom: "45px",
  },
};
export default function Header() {
  return <div style={styles.container}>The Online Pokedex</div>;
}
