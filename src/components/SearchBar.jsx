import { useState } from 'react';
import './SearchBar.css';


const SearchBar = ({onFetchList}) => {
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState('title');
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  const handleSubmit = (event) => {
    if(searchValue.trim() === '') {
      alert('Please enter a search term.');
      event.preventDefault();
      return;
    }
    onFetchList(searchValue, filter);
    event.preventDefault();
  }

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input type="text" name="searchValue" placeholder={`Search by ${filter.toUpperCase()}`} 
              value={searchValue} onChange={handleChange} /> 
            </label> <br/><br/>
            <label>
              <input type="submit" value="search" />
            </label>
          </div>
          <div>
            <h4>Change Filter:</h4>
            <label className='radioText'>
              <input type="radio" name="filter" value="title" 
              checked={ filter === 'title' }
              onChange={handleFilter} /> &nbsp;
              by song title 
            </label> &nbsp; &nbsp;
            <label className='radioText'>
              <input type="radio" name="filter" value="artist"
              checked={ filter === 'artist' }
              onChange = {handleFilter} /> &nbsp;
              by artiste name 
            </label>
          </div>
        </form>
    )
}

export default SearchBar;

