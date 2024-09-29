import type { Candidate } from "../interfaces/Candidate.interface";

// Define the CardProps type
type CardProps = {
  currentCandidate: Candidate;
  handleStoredCandidate: () => void;
  fetchNewCandidate: () => void;
};

// Create the Card component with the CardProps type
// The Card component renders a card with candidate information
const Card = ({
  currentCandidate,
  handleStoredCandidate,
  fetchNewCandidate,
}: CardProps) => {
  // Render the card with candidate information
  return (
    <>
      <section className="cardSection">
        <div className="card">
          <img
            src={`${currentCandidate.avatar_url}`}
            alt={`${currentCandidate.login}`}
            className="non-selectable"
          />
          <div className="cardInfo">
            <h3>{currentCandidate.login}</h3>
            <p className={currentCandidate.location ? "" : "missing"}>
              {currentCandidate.location}
            </p>
            <p className={currentCandidate.email ? "" : "missing"}>
              {currentCandidate.email}
            </p>
            <p className={currentCandidate.company ? "" : "missing"}>
              {currentCandidate.company}
            </p>
            <p className={currentCandidate.bio ? "" : "missing"}>
              {currentCandidate.bio}
            </p>
          </div>
        </div>
        <div className="cardButton">
          <button className="button nope" onClick={fetchNewCandidate}>
            <span className="non-selectable">-</span>
          </button>
          <button className="button yup" onClick={handleStoredCandidate}>
            <span className="non-selectable">+</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Card;
