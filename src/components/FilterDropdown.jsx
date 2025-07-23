const FilterDropdown = ({ selected, onChange }) => {
  const options = ["All Status", "Completed", "Failed", "Running"];

  return (
    <select
      className="border rounded px-2 py-1"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
};

export default FilterDropdown;
