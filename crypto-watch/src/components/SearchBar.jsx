const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search coin..."
      onChange={e => setSearchTerm(e.target.value)}
    />
  )
}

export default SearchBar
