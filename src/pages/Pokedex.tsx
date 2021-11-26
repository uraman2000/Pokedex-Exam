import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pokemon, { Ipokemon } from "../components/Pokemon";
var data: Ipokedex = require("../data/pokemon.json");

const styles = {
  container: {
    marginLeft: "3%",
    marginRight: "3%",
    display: "flex",
    flexFlow: "row wrap",
    gap: "55px 10px",
    justifyContent: "space-between",
    marginBottom: "65px",
  },
};
export default function Pokedex() {
  return (
    <>
      <Header />
      <div style={styles.container}>
        {data.entries.map((item: Ipokemon) => {
          return (
            <Link to={"/loading"}>
              <Pokemon name={item.name} image={item.image} number={item.number} types={item.types} />{" "}
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

interface Ipokedex {
  entries: Array<Ipokemon>;
  total: number;
}
