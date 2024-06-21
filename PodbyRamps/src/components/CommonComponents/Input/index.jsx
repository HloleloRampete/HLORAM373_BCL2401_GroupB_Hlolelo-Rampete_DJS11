import "./styles.css";

export default function InputComponent({
  type,
  state,
  setState,
  placeholder,
  required,
  sortOrder,
  handleSortChange,
}) {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="custom-input"
      />
      <select
        value={sortOrder}
        onChange={handleSortChange}
        className="custom-select"
      >
        <option value="A-Z">Sort A-Z</option>
        <option value="Z-A">Sort Z-A</option>
      </select>
    </div>
  );
}
