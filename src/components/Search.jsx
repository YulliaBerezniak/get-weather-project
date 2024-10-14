const Search = ({ onSearch, onDelete }) => {
    const [query, setQuery] = useState('');
  
    const handleSearch = () => {
      onSearch(query);
    };
  
    return (
      <div>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for a city..." 
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  };

export default Search;