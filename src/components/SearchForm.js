import React from "react";
import styled from "styled-components";

const SearchBar = styled.div`
  margin: 1%;
  border: 1px solid red;
  text-align: center;
  width: 50%;
`;

const Input = styled.input`
  width: 200px;
`;
export default function SearchForm(props) {
  const changer = event => {
    props.setSearch(event.target.value);
  };
  //   console.log(props.search);

  //   console.log(props);
  return (
    <section className="search-form">
      {/* // Add a search form here */}
      <SearchBar>
        <Input
          onChange={changer}
          type="text"
          name="search"
          placeholder="Type here to find..."
        />
      </SearchBar>
    </section>
  );
}
