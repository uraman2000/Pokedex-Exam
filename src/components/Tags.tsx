import React from "react";

const styles = {
  container: {
    display: "flex",
    gap: "10px",
  },
};
export default function Tags({ types }: Itags) {
  const typesColor = (props: string) => {
    if (props === "Water") return "#051BD9";
    if (props === "Grass") return "#83C27E";
    if (props === "Fire") return "#FD8900";
    if (props === "Poison") return "#C27EBC";
    if (props === "Bug") return "#99B001";
  };
  return (
    <div style={styles.container}>
      {types.map((item: string, index: any) => {
        return (
          <div
            id={index}
            style={{
              padding: "0.4em",
              backgroundColor: typesColor(item),
              borderRadius: "9px",
              fontSize: "0.5em",
              height: "1em",
              width: "6em",
              textAlign: "center",
              margin: "auto",
              marginBottom: "15px",
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export interface Itags {
  types: Array<string>;
}
