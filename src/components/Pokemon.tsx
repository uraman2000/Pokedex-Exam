import React from "react";
import padLeadingZeros from "../utils/PadLeadingZero";
import Tags from "./Tags";

const styles = {
  container: {
    backgroundColor: "#747474",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    width: "257px",
    fontSize: "1.6em",
    color: "white",
    gap: "5px",
    borderRadius: "10px",
  },
  image: {
    width: "200px",
    height: "auto",
  },
};

export default function Pokemon({ number, name, types, image }: Ipokemon) {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={`../${image.url}`} />
      <div>#{padLeadingZeros(parseInt(number), 3)}</div>
      <div>{name}</div>
      <Tags types={types} />
    </div>
  );
}
export interface Ipokemon {
  number: string;
  name: string;
  types: Array<string>;
  image: IimagePokemon;
}

export interface IimagePokemon {
  url: string;
  width: string;
  height: string;
}
