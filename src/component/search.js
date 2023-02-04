function Search({handleSearch}) {
  return (
    <div className="search__container">
        <h1>Weather Web App</h1>
        <div className='d-flex justify-content-center'>
          <div className='col-lg-3 col-sm-2'>
            <input className="form-control input-search" type="text" placeholder="City Name" onKeyUp={(e)=>handleSearch(e)}/>
          </div>
        </div>
    </div>
  );
}

export default Search;
