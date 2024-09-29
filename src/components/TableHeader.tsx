// Define the TableHeaderProps type
type TableHeaderProps = {
  sortAZ: (input: "login" | "location" | "email" | "company" | "bio") => void;
  sortZA: (input: "login" | "location" | "email" | "company" | "bio") => void;
};

// Create the TableHeader component with the TableHeaderProps type
const TableHeader = ({ sortAZ, sortZA }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        <th className="non-selectable">Image</th>
        <th className="headerSort">
          <span className="label">Name</span>
          <div className="sort">
            <button
              className="button"
              onClick={() => {
                sortAZ("login");
              }}
            >
              <span className="non-selectable">A</span>
            </button>
            <button
              className="button"
              onClick={() => {
                sortZA("login");
              }}
            >
              <span className="non-selectable">Z</span>
            </button>
          </div>
        </th>
        <th className="headerSort">
          <span className="label">Location</span>
          <div className="sort">
            <button
              className="button"
              onClick={() => {
                sortAZ("location");
              }}
            >
              <span className="non-selectable">A</span>
            </button>
            <button
              className="button"
              onClick={() => {
                sortZA("location");
              }}
            >
              <span className="non-selectable">Z</span>
            </button>
          </div>
        </th>
        <th className="headerSort">
          <span className="label">Email</span>
          <div className="sort">
            <button
              className="button"
              onClick={() => {
                sortAZ("email");
              }}
            >
              <span className="non-selectable">A</span>
            </button>
            <button
              className="button"
              onClick={() => {
                sortZA("email");
              }}
            >
              <span className="non-selectable">Z</span>
            </button>
          </div>
        </th>
        <th className="headerSort">
          <span className="label">Company</span>
          <div className="sort">
            <button
              className="button"
              onClick={() => {
                sortAZ("company");
              }}
            >
              <span className="non-selectable">A</span>
            </button>
            <button
              className="button"
              onClick={() => {
                sortZA("company");
              }}
            >
              <span className="non-selectable">Z</span>
            </button>
          </div>
        </th>
        <th className="headerSort">
          <span className="label">Bio</span>
          <div className="sort">
            <button
              className="button"
              onClick={() => {
                sortAZ("bio");
              }}
            >
              <span className="non-selectable">A</span>
            </button>
            <button
              className="button"
              onClick={() => {
                sortZA("bio");
              }}
            >
              <span className="non-selectable">Z</span>
            </button>
          </div>
        </th>
        <th className="non-selectable">Reject</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
