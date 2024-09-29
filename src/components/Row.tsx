import type { Candidate } from "../interfaces/Candidate.interface";

// Define the RowProps type
type RowProps = {
  candidate: Candidate;
  removeStoredCandidate: () => void;
};

// Create the Row component with the RowProps type
// The Row component renders a table row with candidate information
const Row = ({ candidate, removeStoredCandidate }: RowProps) => {
  console.log(candidate);

  // Render the table row with candidate information
  return (
    <>
      <tr>
        <td>
          <img
            src={`${candidate.avatar_url}`}
            alt={`${candidate.login}`}
            className="non-selectable"
          />
        </td>
        <td>{candidate.login}</td>
        <td>{candidate.location}</td>
        <td>{candidate.email}</td>
        <td>{candidate.company}</td>
        <td>{candidate.bio}</td>
        <td>
          <button className="button reject" onClick={removeStoredCandidate}>
            <span className="non-selectable">-</span>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Row;
