import React, { useState, useEffect,useMemo } from "react";

const App = () => {
  //or in useEffect  fetch and set data
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Ayesha",
      body: "Ahmed",
    },
    {
      id: 2,
      title: "Sam",
      body: "Ahmed",
    },
    {
      id: 3,
      title: "Poo",
      body: "Ahmed",
    },
    {
      id: 4,
      title: "Ram",
      body: "Ahmed",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const getCurrentPosts = () => {
  //first render curr=1,perPage=2,so startIndex=(1-1)*2=0,endIndex=0+2=2,slice(0,2) so 2objs.map()
  //at the time of 2nd button click startIndex=(2-1)*2=2,endIndex=2+2=4  slice(2,4)
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return posts.slice(startIndex, endIndex);
  };

    const getPageNumbers =() => {
	//totalPage=(4/2)=2, so in forloop push(1 and 2)
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  return (
    <div>
      <h1>Emp List</h1>
      <ul>
        {getCurrentPosts().map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>
        {getPageNumbers().map((number) => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;



import Pagination from "@mui/material/Pagination";
import { useState } from "react";

export default function App() {
  const employees = [
    { id: 2, name: "Bob", country: "Belgium" },
    { id: 3, name: "Carl", country: "Canada" },
    { id: 1, name: "Alice", country: "Austria" },
    { id: 2, name: "Mike", country: "USA" },
    { id: 3, name: "Sam", country: "India" },
    { id: 1, name: "Jake", country: "Japan" },
  ];
  const [emp] = useState(employees);
  const rowsPerPage = 3;
  const [page, setPage] = useState(1);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const sortedData = [...emp].sort((a, b) => (a.name > b.name ? 1 : -1)); //for number use arr.sort((a, b) => a - b) and descending order (a.name > b.name ? -1 : 1)
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = sortedData.slice(startIndex, endIndex);

  return (
    <>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Country</th>
        </thead>
        {displayedRows.map((data, i) => (
          <tbody key={i}>
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.country}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <Pagination
        count={Math.ceil(emp.length / rowsPerPage)}
        color="primary"
        variant="outlined"
        page={page}
        onChange={handleChangePage}
      />
    </>
  );
}




  import { useEffect, useState, useCallback } from "react";
  import axios from "axios";
  import Pagination from "@mui/material/Pagination";

  export default function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const url = "https://jsonplaceholder.typicode.com/posts";

    const fetchData = useCallback(async () => {
      try {
        setLoading(true);
        const results = await axios(url);
        setData(results.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }, [url]);

    useEffect(() => {
      fetchData();
    }, [fetchData]);

    const rowsPerPage = 5;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const displayedRows = data?.slice(startIndex, endIndex) || [];

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {displayedRows.map((userData) => (
          <p key={userData.id}>
            {userData.id}-{userData.title}
          </p>
        ))}
        <Pagination
          count={Math.ceil(data.length / rowsPerPage)}
          color="secondary"
          page={page}
          onChange={handleChangePage}
        />
      </div>
    );
  }

