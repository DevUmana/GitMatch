import { useState } from "react";
import Filter from "../components/Filter";
import Table from "../components/Table";

const SavedCandidates = () => {
  // filterValue is the state that stores the value of the filter input
  const [filterValue, setFilterValue] = useState("");

  return (
    <>
      <h1>Match</h1>
      <Filter onFilterChange={setFilterValue} />
      <Table filterValue={filterValue} />
    </>
  );
};

export default SavedCandidates;
