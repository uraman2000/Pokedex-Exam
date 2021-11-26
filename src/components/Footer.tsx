import React from "react";
const styles = {
  container: {
    backgroundColor: "#3F3F3F",
    fontSize: "1.2em",
    color: "white",
    textAlign: "center" as "center",
    padding: "50px",
    marginTop: "auto",
    height: "120px",
  },
};
export default function Footer() {
  return (
    <div style={styles.container}>
      <div>Copyright @ 2020 React Code Challenge. All Rights Reserved</div>
      <div>Use of pokemon images prerfomed under fair use. Not for</div>
      <div>sale or redistribution.</div>
    </div>
  );
}
