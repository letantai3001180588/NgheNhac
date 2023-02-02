
function Search({handleSearch}) {
  return (
    <div className="search__container float-center">
        <h1>Weather Web App</h1>
        <div className='row justify-content-center'>
        <div className='col-xl-3 col-sm-2'>
          <input className="form-control input-search" type="text" placeholder="City Name" onKeyUp={(e)=>handleSearch(e)}/>
        </div>
        </div>
    </div>
  );
}

export default Search;
