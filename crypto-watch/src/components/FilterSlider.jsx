const FilterSlider = ({ minChange, setMinChange }) => {
  return (
    <div>
      <label>Min 24h Change (%): {minChange}</label>
      <input
        type="range"
        min={-50}
        max={50}
        value={minChange}
        onChange={e => setMinChange(Number(e.target.value))}
      />
    </div>
  )
}

export default FilterSlider
