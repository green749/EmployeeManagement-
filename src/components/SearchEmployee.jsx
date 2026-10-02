function SearchEmployee({ search, setSearch }) {
    return (
        <div className="search card">
            <h2>Search Employee</h2>
           
            
            <input
                type="text"
                placeholder="Search Employee..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
           
        </div>
    );
}

export default SearchEmployee;