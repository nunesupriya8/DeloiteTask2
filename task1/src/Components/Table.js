import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './table.css'

function Table() {
  const [items, setItems] = useState([]);
  const [First_name, setFirstName] = useState('');
  const [Second_name, setSecondName] = useState('');
  const [Location, setLocation] = useState('');
  const [Job_Role, setJobRole] = useState('');
  const [Email, setEmail] = useState('');
  

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then(response => {
        setItems(response.data);
      });
  }, []);

  const addItem = () => {
    axios.post('http://localhost:5000/items', { First_name, Second_name, Location, Job_Role, Email })
      .then(response => {
        setItems([...items, response.data]);
        setFirstName('');
        setSecondName('');
        setLocation('');
        setJobRole('');
        setEmail('');
        
      });
  };

  return (
    <html>
      <body className='body'>

        <div>
        <h2>Add New Item</h2>
          <input
            type="text"
            value={First_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <input
            type="text"
            value={Second_name}
            onChange={(e) => setSecondName(e.target.value)}
            placeholder="Second Name"
          />
          <input
            type="text"
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
          <input
            type="text"
            value={Job_Role}
            onChange={(e) => setJobRole(e.target.value)}
            placeholder="Job Role"
          />
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Mail"
          />
          <button onClick={addItem}>Add Item</button>
          <h1>Items Table</h1>
          <table border="1" className='table'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Second Name</th>
                <th>Location</th>
                <th>Job Role</th>
                <th>Email</th>
                
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.First_name}</td>
                  <td>{item.Second_name}</td>
                  <td>{item.Location}</td>
                  <td>{item.Job_Role}</td>
                  <td>{item.Email}</td>

                </tr>
              ))}
            </tbody>
          </table>
          {/* <h2>Add New Item</h2>
          <input
            type="text"
            value={First_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <input
            type="text"
            value={Second_name}
            onChange={(e) => setSecondName(e.target.value)}
            placeholder="Second Name"
          />
          <input
            type="text"
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
          <input
            type="text"
            value={Job_Role}
            onChange={(e) => setJobRole(e.target.value)}
            placeholder="Job Role"
          />
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Mail"
          />
          <button onClick={addItem}>Add Item</button> */}
        </div>
      </body>
    </html>
  );
}

export default Table;
