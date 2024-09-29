import { useState, useEffect } from "react";

import { searchGithub, searchGithubUser } from "../api/API";
import { Candidate } from "../interfaces/Candidate.interface";
import Card from "../components/Card.tsx";

const CandidateSearch = () => {
  // Create a state variable to store the current candidate with a default values
  const [candidate, setCandidate] = useState<Candidate>({
    login: "",
    avatar_url: "",
    location: "",
    email: "",
    company: "",
    bio: "",
  });

  // Fetch a random candidate from the GitHub API
  const fetchRandomCandidate = async () => {
    try {
      // Fetch a list of candidates
      const data = await searchGithub();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomCandidate: Candidate = data[randomIndex];

      // Fetch the user data for the selected candidate
      const user = await searchGithubUser(randomCandidate.login);

      // If no user is found, try again
      if (!user.login) {
        fetchRandomCandidate();
      } else {
        setCandidate(user);
      }
    } catch (error) {
      console.error("Error fetching candidate: ", error);
    }
  };

  // Fetch a random candidate when the component mounts
  useEffect(() => {
    fetchRandomCandidate();
  }, []);

  // Store the current candidate in local storage
  const handleStoredCandidate = () => {
    let parsedCandidates: Candidate[] = [];
    const storedCandidates = localStorage.getItem("storedCandidates");

    // If there are stored candidates, parse the data
    if (storedCandidates) {
      parsedCandidates = JSON.parse(storedCandidates) as Candidate[];
    }

    // Check if the candidate is already stored
    const candidateExists = parsedCandidates.some(
      (storedCandidate) => storedCandidate.login === candidate.login
    );

    // If the candidate is not stored, add it to the list of stored candidates
    if (!candidateExists) {
      parsedCandidates.push(candidate);
      localStorage.setItem(
        "storedCandidates",
        JSON.stringify(parsedCandidates)
      );
    }

    // Fetch a new candidate
    fetchRandomCandidate();
  };

  return (
    <div className="searchPage">
      <h1>GitMatch</h1>
      <Card
        currentCandidate={candidate}
        handleStoredCandidate={handleStoredCandidate}
        fetchNewCandidate={fetchRandomCandidate}
      />
    </div>
  );
};

export default CandidateSearch;
