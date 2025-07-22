const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  isLoading = true;
  const res = await fetch(url);
  const data = await res.json();
  isLoading = false;
  return data;
};

//autofetch fetch again when error happen until maximum count
async function autoFetch(fetcher, count) {
  let lastError;

  for (let i = 0; i < count; i++) {
    try {
      return await fetcher();
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError;
}
autoFetch(fetchData, 3)
  .then((data) => console.log(data))
  .catch((err) => console.error("Failed after retries:", err));


  ASSIGNMENT 5
FETCH DATA

//fetching data store in a bootstrap table
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import axios from "axios";

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      //.then((res) => {setUser(res.data); })
      .then(({ data }) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h3 className="text-primary">User List</h3>
      <Table
        variant="info"
        striped
        bordered
        hover
        className="shadow-lg text-center"
      >
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user?.length > 0 &&
            user.map((userData) => {
              return (
                <tr key={userData.id}>
                  <td>{userData.id}</td>
                  <td>{userData.name}</td>
                  <td>{userData.username}</td>
                  <td>{userData.email}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
Note:after getting data using get method of axios it will return you a promise and you can get data from its data property that is passed an first args. You can directly set state which will be an array of objects.
.then(({ data }) => setUsers(data)) destructed the object to get only the data property.


//Q)Github user profile 
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState("");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`https://api.github.com/users/${val}`)
      .then((res) => res.json())
      .then((value) => {
        setData(value);
        setIsLoading(false);
        setVal("");
      })
      .catch(() => {
        setIsLoading(false); // Ensure loading state is reset even if there's an error
      });
  };

  return (
    <div className="App">
      <h1>GitHub User Profile</h1>
      <form onSubmit={Submit}>
        <input value={val} onChange={(e) => setVal(e.target.value)} />
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "Search"
          )}
        </button>
      </form>
      <hr />
      {data.avatar_url && <img src={data.avatar_url} alt="" height="60" />}
      <div>{data.login}</div>
      <div>{data.followers}</div>
    </div>
  );
}



  //Top-level async function that never rejects
  (async () => {
    try {
        const text = await useFetch();
        console.log(text);
    } catch (e) {
        // Deal with the fact the chain failed
    }
})();









Q)How to create a custom React hook
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return [data, loading];
};

export default useFetch;


import useFetch from "./useFetch";
import { useState, useEffect } from "react";
export default function App() {
  const [disabled, setDisabled] = useState(false);
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const handleClick = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  useEffect(() => {
    if (!loading) {
      setDisabled(false);
    }
  }, [loading]);
  return (
    <div className="App">
      <button disabled={loading || disabled} onClick={handleClick}>
        Click
      </button>
	  {data?
      <div>{JSON.stringify(data,null,2)}</div>:<div>Loading...</div>}
    </div>
  );
}



###until fetch data button will disabled

import React, { useState } from 'react';

export default function App() {
  const [disable, setDisable] = useState(false);

  async function fetchData() {
    try {
      setDisable(true);
      const response = await fetch('https://reqres.in/api/users?page=2');
      if (!response.ok) {
        throw new Error('Response not OK');
      }
      const resData = await response.json();
      setTimeout(() => setDisable(false), 2000);
      console.log(resData);
    } catch (e) {
      console.error('Error:', e);
      setDisable(false);
    }
  }

  return (
    <div>
      <button onClick={fetchData} disabled={disable}>
        Click
      </button>
    </div>
  );
}









// axios vs fetch:
// Axios is a stand-alone third-party package that can be easily installed and is recommended for handling more complex HTTP requests
// Fetch is built into most modern browsers and is suitable for simple requests 

import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  const [post, setPost] = useState([]);
  async function fetchData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setPost(await response.data);
      console.log(response.data);
    } catch (error) {
      console.error("unsuccessful api call", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {post.map((posts) => (
        <li key={posts.id}>{posts.username}</li>
      ))}
    </div>
  );
}







//example of data cashing by react query
//Data caching with React Query is simple and straightforward. The following example demonstrates how to use React Query to cache a list of users:



//API Call Optimization with React Query    
//it makes fetching, caching, synchronizing and updating server state in your React applications
import React from "react";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, isFetching, data, error, refetch } = useQuery(
    ["repoData"],
    () =>
      axios
        .get("https://api.github.com/users/eunit99/repos")
        .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.slice(0, 5).map((repo) => (
        <div key={repo.id}>
          <ul>
            <li>
              <a href={repo.clone_url}>{repo.name}</a>
            </li>
          </ul>
        </div>
      ))}
      <button type="button" onClick={refetch} disabled={isFetching}>
        {isFetching ? "Fetching..." : "Fetch again"}
      </button>
    </div>
  );
}


