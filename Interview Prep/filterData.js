//how to filter data in search box

import React, { useState } from "react";

export default function Demo() {
  const [search, setSearch] = useState("");
  const arr = ["Sam", "Sami", "Rupai", "Mmi"];

  const handleClick = (value) => {
    setSearch(value);
  };

  const filteredArr = arr.filter((val) => {
    if (search === "")
      return val; // Return all list of strings if search is empty
    else if (val.toLowerCase().includes(search.toLowerCase())) {
      // Return matching strings
      return val;
    }
  });

  return (
    <>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {filteredArr.length > 0 ? (
        filteredArr.map((val) => {
          const index = val.toLowerCase().indexOf(search.toLowerCase()); // For every string, find the index of the match like if i take "Sami" as value and If search = "sa" and  so index 0
          const beforeStr = val.substring(0, index); // String before the match index  Example: beforeStr = "Sami".substring(0, 0) => ""
          const matchStr = val.substring(index, index + search.length); // Matching string  Example: matchStr = "Sami".substring(0, 2) => "Sa"
          const afterStr = val.substring(index + search.length); // String after the match Example: afterStr = "Sami".substring(2) => "mi"

          return (
            // Concatenate beforeStr + matchStr + afterStr
            <div key={val} onClick={() => handleClick(val)}>
              <p>
                {beforeStr}
                <b>{matchStr}</b>
                {afterStr}
              </p>
            </div>
          );
        })
      ) : (
        <p>No match found</p>
      )}
    </>
  );
}


Note:

{props?.value && && Array.isArray(props?.value).filter((data) => {
    if (props?.condition) {
        return data?.name?.substring(1);
    } else {
        return data?.name;
    }
}).map((data, index) => {
    return (
        <div key={index}>
            <p>{data?.name}</p>
        </div>
    );
})}