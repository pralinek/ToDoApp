import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";

import "./Todo.css";

const Todo = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    document.title = "ToDoApp"
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((request) => {
        return request.json();
      })
      .then((apilist) => {
        let arr = [];
        while (arr.length < 8) {
          var r = Math.floor(Math.random() * 100) + 1;
          if (arr.indexOf(r) === -1) arr.push(r);
        }
        let array = [];
        for (let i = 0; i < 7; i++) {
          array.push(apilist[arr[i]]);
        }

        array = array.map((obj, index) => {
          return {
            color: index,
            icon: index,
            userId: obj.userId,
            title: obj.title,
            id: obj.id,
            completed: false,
          };
        });

        setTaskList(array);
      });
  }, []);

  const addTask = (taskName) => {
    setTaskList([
      {
        color: Math.round(Math.random() * 7) - 1,
        icon: Math.round(Math.random() * 7) - 1,
        userId: Math.round(Math.random() * 10),
        id: new Date().getTime(),
        title: taskName,
        completed: false,
      },
      ...taskList,
    ]);
    //tasklist.length is bad idea for key value, maybe miliseconds.
  };

  const handleComplete = (id, e) => {
    if (e.target.value === "delete") {
      const deletionTaskList = taskList.filter((task) => {
        return task.id !== id;
      });
      setTaskList(deletionTaskList);
    } else {
      const completionTaskList = taskList.map((obj) =>
        obj.id === id
          ? {
              color: obj.color,
              icon: obj.icon,
              userId: obj.userId,
              title: obj.title,
              id: obj.id,
              completed: !obj.completed,
            }
          : obj
      );

      setTaskList(completionTaskList);
    }
  };

  return (
    <div className="container">
      <div className="transparent">
        <div className="circle"> </div> <div className="circle2"> </div>
        {true && (
          <AddTask addTask={addTask} counterChange={taskList.length} />
        )}{" "}
        {taskList.map((task) => {
          return (
            <div
              onClick={(e) => {
                handleComplete(task.id, e);
              }}
              className="card"
              style={{
                backgroundColor: task.completed
                  ? ""
                  : `${
                      task.icon === 0
                        ? "#00A19D"
                        : task.icon === 1
                        ? "#FFB344"
                        : task.icon === 2
                        ? "#E05D5D"
                        : task.icon === 3
                        ? "#112031"
                        : task.icon === 4
                        ? "#22577A"
                        : task.icon === 5
                        ? "#C36839"
                        : task.icon === 6
                        ? "#911F27"
                        : ""
                    }`,
                    textDecoration: task.completed ? "line-through": "",
                    color: "white",
              }}
              key={task.id}
            >
              <div>
                <p
                  className={
                    task.icon === 0
                      ? "bebas"
                      : task.icon === 1
                      ? "im"
                      : task.icon === 2
                      ? "it"
                      : task.icon === 3
                      ? "lobster"
                      : task.icon === 4
                      ? "pt"
                      : task.icon === 5
                      ? "qahiri"
                      : task.icon === 6
                      ? "roboto"
                      : ""
                  }
                >
                  {" "}
                  {task.title}{" "}
                </p>{" "}
                <button value="delete" className="delete">
                  {" "}
                  <span className="cross"> </span>
                </button>
              </div>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
