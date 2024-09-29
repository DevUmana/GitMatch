import { useState, useEffect } from "react";

import { Candidate } from "../interfaces/Candidate.interface";
import TableHeader from "./TableHeader";
import Row from "./Row";

// Define the TableProps type
type TableProps = {
  filterValue: string;
};

// Table component that takes TableProps as a prop
// The Table component renders a table with candidate information
const Table = ({ filterValue }: TableProps) => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);

  type SortableFields = "login" | "location" | "email" | "company" | "bio";

  // fetch stored candidates from local storage on component mount
  // and set the candidates and filteredCandidates state
  useEffect(() => {
    const storedCandidates = fetchStoredCandidates();
    setCandidates(storedCandidates);
    setFilteredCandidates(storedCandidates);
  }, []);

  // filter candidates based on the filter value
  // and set the filteredCandidates state
  useEffect(() => {
    const filtered = candidates.filter((candidate) =>
      candidate.login.toLowerCase().includes(filterValue)
    );
    setFilteredCandidates(filtered);
  }, [filterValue, candidates]);

  // fetch stored candidates from local storage
  const fetchStoredCandidates = (): Candidate[] => {
    const storedCandidates = localStorage.getItem("storedCandidates");
    return storedCandidates
      ? (JSON.parse(storedCandidates) as Candidate[])
      : [];
  };

  // remove a candidate from the stored candidates
  const removeStoredCandidate = (login: string) => {
    const removeStoredCandidate = candidates.filter(
      (candidate) => candidate.login !== login
    );
    setCandidates(removeStoredCandidate);
    localStorage.setItem(
      "storedCandidates",
      JSON.stringify(removeStoredCandidate)
    );
  };

  // sort the candidates in ascending
  const sortAZ = (input: SortableFields) => {
    const sortedAZ = [...candidates].sort((a, b) =>
      (a[input] ?? "").localeCompare(b[input] ?? "")
    );
    setCandidates(sortedAZ);
    setFilteredCandidates(sortedAZ);
    localStorage.setItem("storedCandidates", JSON.stringify(sortedAZ));
  };

  // sort the candidates in descending
  const sortZA = (input: SortableFields) => {
    const sortZA = [...candidates].sort((a, b) =>
      (b[input] ?? "").localeCompare(a[input] ?? "")
    );
    setCandidates(sortZA);
    setFilteredCandidates(sortZA);
    localStorage.setItem("storedCandidates", JSON.stringify(sortZA));
  };

  // render the table with the filtered candidates
  return (
    <>
      <table>
        <TableHeader sortAZ={sortAZ} sortZA={sortZA} />
        <tbody>
          {filteredCandidates.map((candidate: Candidate, i: number) => (
            <Row
              candidate={candidate}
              key={i}
              removeStoredCandidate={() =>
                removeStoredCandidate(candidate.login)
              }
            />
          ))}
        </tbody>
      </table>
      {candidates.length === 0 ? (
        <p className="alert">
          No candidates listed, visit the home page to add some!
        </p>
      ) : filteredCandidates.length === 0 ? (
        <p className="alert">No candidates found matching the filter value</p>
      ) : (
        ""
      )}
    </>
  );
};

export default Table;
