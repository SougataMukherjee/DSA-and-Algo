import React from "react";
import { MdDeleteForever, MdSearch } from "react-icons/md";
export default function Todo() {
  const [newitem, setNewitem] = React.useState("");
  const [list, setList] = React.useState([]);
  const addItem = (value) => {
    const newItem = {
      id: list.length + 1,
      value,
      isDone: false,
      editable: false,
    };
    setNewitem("");
    setList((prev) => [...prev, newItem]);
  };

  const deleteItem = (id) => {
    alert(id);
    const updatedlist = [...list].filter((item) => item.id !== id); //list er j element id er sathe match korbe seta chere baki sob dekhao
    setList(updatedlist);
  };
  const updateItemValue = (id, newValue) => {
    const updatedList = list.map((todo) => {
      if (todo.id === id) {
        return { ...todo, value: newValue };
      }

      return todo;
    });

    setList(updatedList);
  };

  const onCheck = (id) => {
    const updatedList = list.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone, editable: !todo.editable };
      }
      return todo;
    });
    setList(updatedList);
  };
  const searchStyle = {
    background: "white",
    input: {
      border: "2px solid transparent",
    },
    container: {
      background: "yellow",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      margin: "auto auto",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      listStyle: "upper-roman",
      color: list.length > 0 ? "white" : "black",
      background: list.length > 0 ? "red" : "yellow",
    },
  };
  console.log(list);
  return (
    <div style={searchStyle.container}>
      <div style={searchStyle}>
        <MdSearch />
        <input
          type="text"
          style={searchStyle["input"]}
          placeholder="add item..."
          required
          value={newitem}
          onChange={(e) => setNewitem(e.target.value)}
        />
      </div>
      <button
        clasName="add-btn"
        onClick={() => addItem(newitem)}
        disabled={!newitem}
      >
        Add Todo
      </button>
      <div>
        <ul style={searchStyle.list}>
          {list.length > 0 ? (
            list.map((item) => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.isDone}
                  onChange={() => onCheck(item.id)}
                />
                <span
                  contentEditable={item.editable}
                  suppressContentEditableWarning={true}
                  onBlur={(e) => updateItemValue(item.id, e.target.textContent)}
                >
                  {item.value}
                </span>
                <button className="btn" onClick={() => deleteItem(item.id)}>
                  <MdDeleteForever size="1.2em" />
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p>Please add item</p>
          )}
        </ul>
      </div>
    </div>
  );
}







//////////////proj2(todo)
//for showing design https://tailblocks.cc/
//here in another terminal npm i -D json-server and
//then inside package.json inside script "json-server": "json-server --watch src/app/todos.json --port 3001" and
//then npm run json-server
//TodoList.tsx---------------->
import React, { useEffect, useState, Suspense } from "react";
import { getTodo, updateTodo, deleteTodo, addTodo } from "./apiService";
import { MdDeleteOutline } from "react-icons/md";
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
const App: React.FC = () => {
  const [todoData, setTodoData] = useState<Todo[]>([]);
  const [_addTodo, setAddTodo] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodo();
      setTodoData(data || []);
    };
    const storedData = localStorage.getItem("todoData");
    if (storedData) {
      setTodoData(JSON.parse(storedData));
    } else {
      fetchData();
    }
    fetchData();
  }, []);
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  const handleCheckboxChange = async (id: any, text: any, completed: any) => {
    const updatedTask = await updateTodo(id, text, completed);

    setTodoData((prevTodo: any) =>
      prevTodo.map((task: any) =>
        task.id === updatedTask?.id ? updatedTask : task
      )
    );
  };
  const handleAddTodo = async () => {
    if (_addTodo.trim() !== "") {
      const newTask = await addTodo(Date.now(), _addTodo, false);
      setTodoData((prevTodo) => [...prevTodo, newTask]);
      setAddTodo("");
    }
  };
  const handleDelete = async (id: any) => {
    await deleteTodo(id);
    setTodoData((prevTodo) => prevTodo.filter((task) => task.id !== id));
  };
  console.log(todoData);

  return (
    <div>
      <input
        value={_addTodo}
        onChange={(e) => setAddTodo(e.target.value)}
        placeholder="todo..."
        className="input input-primary text-black input-sm"
      />
      <button onClick={handleAddTodo} className="btn btn-success btn-sm">
        Add TODO
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {todoData.map((task) => (
            <li key={task.id} className="pl-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(e) =>
                  handleCheckboxChange(task.id, task.text, e.target.checked)
                }
              />
              {task.text}
              <MdDeleteOutline
                className="inline-block cursor-pointer"
                onClick={() => handleDelete(task.id)}
              />
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
};

export default App;

apiService.tsx--------------->
const getTodo = async () => {
  try {
    const response = await fetch("http://localhost:3001/tasks", {
      next: { revalidate: 1000 },
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const updateTodo = async (id: any, text: any, completed: any) => {
  try {
    const response = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, text, completed }),
    });
    const updatedTask = await response.json();
    return updatedTask;
  } catch (error) {
    console.error("Error updating data:", error);
  }
};
const addTodo = async (name: any, text: any, completed: any) => {
  try {
    const response = await fetch(`http://localhost:3001/tasks/`, {
      method: "POST",
      body: JSON.stringify({ name, text, completed }),
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const deleteTodo = async (id: any) => {
  try {
    const response = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    });
    const deletedTask = await response.json();
    return deletedTask;
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};

export { getTodo, updateTodo, addTodo, deleteTodo };
todo.json-------------->
{
  "tasks": [
    {
      "id": "1",
      "text": "eat",
      "completed": false
    },
    {
      "id": "2",
      "text": "sleep",
      "completed": false
    },
    {
      "id": "3",
      "text": "code",
      "completed": false
    }
  ]
}