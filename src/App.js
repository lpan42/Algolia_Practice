import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  connectSearchBox,
  connectHits,
} from "react-instantsearch-dom";
import Hits from "./Hits";

const searchClient = algoliasearch(
  "JMTNZZLDZ9",
  "c3de62a395cab0ce32181ac24fa2ddda"
);

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  form: { display: "flex", justifyContent: "center" },
  SearchBox: {
    width: "400px",
    height: "50px",
    marginRight: "10px",
  },
};

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form style={styles.form} noValidate action='' role='search'>
    <input
      style={styles.SearchBox}
      type='search'
      placeholder='Search Movies'
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
    <button onClick={() => refine("")}>Clear</button>
    {isSearchStalled ? "My search is stalled" : ""}
  </form>
);
const CustomSearchBox = connectSearchBox(SearchBox);
const CustomHits = connectHits(Hits);

function App() {
  return (
    <div style={styles.app}>
      <h1>AlgoliaTest</h1>
      <InstantSearch searchClient={searchClient} indexName='Hypertube'>
        <CustomSearchBox autoFocus />
        <CustomHits />
      </InstantSearch>
    </div>
  );
}

export default App;
