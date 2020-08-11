import React from "react";

const styles = {
  hitsDiv: {
    width: "600px",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    maxHeight: "500px",
    overflow: "auto",
  },
  descriptionDiv: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10px",
  },
  hit: {
    display: "flex",
    alignItems: "center",
    margin: "10px",
  },
};
const Hits = ({ hits }) => {
  return (
    <div style={styles.hitsDiv}>
      {hits.map((hit, key) => (
        <div key={key} style={styles.hit}>
          <img src={hit.Poster} width='50px' alt={hit.Title}></img>
          <div style={styles.descriptionDiv}>
            <b>{hit.Title}</b>
            <span style={{ color: "grey" }}>{hit.Year}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hits;
