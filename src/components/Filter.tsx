// Define the FilterProps type
type FilterProps = {
  onFilterChange: (filterValue: string) => void;
};

// Filter component that takes onFilterChange function as a prop
// The Filter component renders a search input field
const Filter = ({ onFilterChange }: FilterProps) => {
  // Render the search input field
  return (
    <input
      type="text"
      placeholder="Search by name"
      className="search"
      onChange={(e) => {
        onFilterChange(e.target.value.toLowerCase());
      }}
    />
  );
};

export default Filter;
