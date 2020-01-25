import React from "react";

export default function SearchForm(props) {
  const changer = event => {
    props.setSearch(event.target.value);
  };
  console.log(props.search);

  //   console.log(props);
  return (
    <section className="search-form">
      {/* // Add a search form here */}
      <form>
        <input
          onChange={changer}
          type="text"
          name="search"
          placeholder="Type here to find..."
        />
      </form>
    </section>
  );
}
