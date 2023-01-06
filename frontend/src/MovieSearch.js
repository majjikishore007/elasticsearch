import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from './Card';
import SearchBar from './SearchBar';

const MovieSearch = () => {
  const [qp, setQp] = useState({
    name: '',
    value: '',
  });
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const searchResult = (titles) => {
    return <div>hello</div>;
  };
  const handleSearch = (e) => {
    setQp({ ...qp, name: value, value: e });

    console.log('movies :::::::::::::::::::', movies);
    // setOptions(movies ? searchResult(movies) : []);
  };

  // const onSelect = (value) => {
  //   console.log('onSelect', value);
  // };
  useEffect(() => {
    const searchMovies = async () => {
      console.log('searchMovies');
      const res = await axios.get('http://localhost:5000/search', {
        proxy: {
          host: 'cors-proxy.com',
        },
        params: {
          qp,
        },
      });
      setMovies(res.data.hits.hits);
    };
    // name || actors || genre || date
    if (qp) {
      searchMovies();
    } else {
      setMovies([]);
    }
  }, [qp, value]);

  return (
    <>
      <SearchBar
        value={value}
        setValue={setValue}
        options={options}
        handleSearch={handleSearch}
      ></SearchBar>
      <div className='container split'>
        {movies.map((movie) => (
          <Card key={movie._id} movie={movie}></Card>
        ))}
      </div>
    </>
  );
};





export default MovieSearch;
