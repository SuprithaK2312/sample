import React from 'react'

function SearchBar() {
  function search() {

    let input = document.getElementById('searchBar').value
    let filter = input.toUpperCase();
    let item = document.querySelectorAll('.searchProduct');
    let l = document.getElementsByClassName('searchProductName');
    var searchProducts_container = document.getElementById('searchProducts_container')
    if (input.length > 0) {
      searchProducts_container.style.display = "flex";
    } else {
      searchProducts_container.style.display = "none";
    }

    let searchWords = filter.split(" ").filter(word => word.length > 0);

    for (var i = 0; i < l.length; i++) {
      let a = item[i].getElementsByClassName('searchProductName')[0];
      let value = (a.innerHTML || a.innerText || a.textContent).toUpperCase();

      // check if all words exist inside product text
      let match = searchWords.every(word => value.includes(word));
      if (match) {
        item[i].style.display = "";
      } else {
        item[i].style.display = "none";
      }
    }
  }

  return (
    <div id='search-section'>
      <input id='searchBar' type='text' placeholder='Search ...' onKeyUp={search} />
    </div>
  )

}
export default SearchBar
