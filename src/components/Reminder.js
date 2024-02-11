import React, { useState } from 'react';
import './Reminder.css';

function Reminder() {
  const [reminder, setReminder] = useState([]);
  const [newReminder, setNewReminder] = useState('');

  const handleInputChange = (event) => {
    setNewReminder(event.target.value);
  }

  const handleAddReminder = () => {
    if (newReminder.trim()) {
      setReminder([...reminder, newReminder]);
      setNewReminder('');
    }
  }

    const handleDeleteReminder=(index)=>{
        setReminder(reminder.filter((item,itemIndex) => itemIndex !=index))

    }

  return (
    <div className='container'>
      <h1>Reminder App</h1>
      <div className='input-container'>
        <input type='text' placeholder='Enter a reminder' value={newReminder} onChange={handleInputChange} />

        <button className='add-btn' onClick={handleAddReminder}>
          Add Reminder
        </button>
      </div>
      {
        reminder.length>0 ?(
      <ul className='reminder-list'>
        {
        reminder.map((reminder, index) => (
          <li key={index}>{reminder}
          <button onClick={()=>handleDeleteReminder(index)} className='delete-btn'>Delete</button>
          </li>
        ))}
       </ul>):
       <p>No reminder found</p>
}
    </div>
  )
}

export default Reminder;
