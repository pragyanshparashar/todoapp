import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    if (!activity) {
      window.alert("Please enter a todo!");
      return;
    }

    setListData((listData) => {
      const updatedList = [...listData, activity];
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updateListData = listData.filter((elem, id) => {
      return i != id;
    });
    setListData(updateListData);
  }

  function removeAll() {
    setListData([]);
    return;
  }
  return (
    <>
      <div className="container">
        <div className="header">Todo List</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is Your List Data 🙈</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div>{data}</div>
                  <button onClick={() => removeActivity(i)}>Remove</button>
                </p>
              </>
            );
          })}

        {listData.length >= 1 && (
          <button onClick={removeAll}>Remove All</button>
        )}
      </div>
    </>
  );
}

export default TodoList;
