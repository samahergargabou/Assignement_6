export default function FilterForm({ filterText, onFilterChange }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: '20px' }}>
      <label htmlFor="filter-input" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
        Filter posts by title:
      </label>
      <input
        id="filter-input"
        type="text"
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Type to filter..."
        style={{ padding: '8px', width: '100%', maxWidth: '400px', boxSizing: 'border-box' }}
      />
    </form>
  );
}