import React from 'react';
import ToDoItem from './components/common/ToDoItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Pagination } from 'semantic-ui-react';

const index = () => {

  const [todoItems, setTodoItems] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  useEffect(async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos'); // link in google classroom
    const data = res.data;
    setTodoItems(data);
  }, [])

  const handleChange = (e, data) => {
    console.log(data);
    setCurrPage(data.activePage);
  };
  ``
  return (
    <div style={{ marginTop: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          totalPages={todoItems.length / 10}
          siblingRange={2}
          onPageChange={handleChange}
        />
      </div>
      <List>
        {todoItems.slice(currPage * 10 - 10, currPage * 10).map((item) => {
          return <ToDoItem todoObject={item} key={item.id} />
        })}
      </List>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          totalPages={todoItems.length / 10}
          siblingRange={2}
          onPageChange={handleChange}
        />
      </div>
    </div>
  )
}

export default index;