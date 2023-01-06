import { AutoComplete, Input } from 'antd';
import React from 'react';
const SearchBar = ({ options, onSelect, handleSearch, value, setValue }) => {
  return (
    <>
      <div className='bar'>
        <div className='btn btn-info' style={{ marginRight: '3px' }}>
          <select
            defaultValue={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <option value='title'>Title</option>
            <option value='genre'>Genre</option>
            <option value='actor'>Actor</option>
          </select>
        </div>
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: 300 }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
        >
          <Input.Search size='large' placeholder='search here' enterButton />
        </AutoComplete>
      </div>
    </>
  );
};

export default SearchBar;
