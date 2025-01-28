import React, { useState, useEffect } from 'react';
import './Home.css';

function Home({ userRole }) {
  const [lessons, setLessons] = useState([]);

  // Fetch lessons data 
  useEffect(() => {
    fetch('/lesson')
      .then(response => response.json())
      .then(data => setLessons(data))
      .catch(error => console.error('Error fetching lessons:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`/lesson/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setLessons(prevLessons => prevLessons.filter(lesson => lesson.id !== id));
      })
      .catch(error => console.error('Error deleting lesson:', error));
  };
 // Navigate to the edit page (implement route for editing lesson)
  const handleEdit = (id) => {
    console.log('Editing lesson with id:', id);
  };
 // Navigate to the add lesson page (implement route for adding lesson)
  const handleAdd = () => { 
    console.log('Adding new lesson');
  };

  return (
    <div>
      <div className="Heading">
        <h2>Hello, Good Morning</h2>
        <h3>Today's Lessons</h3>
      </div>

      <div className="Lesson-Table">
        <table>
          <thead>
            <tr>
              <th>Unit</th>
              <th>Unit Title</th>
              <th>Time</th>
              {userRole === 'Employee' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson) => (
              <tr key={lesson.id}>
                <td>{lesson.unit}</td>
                <td>{lesson.unit_title}</td>
                <td>{time_stamp}</td>
                {userRole === 'Employee' && (
                  <td>
                    <button onClick={() => handleEdit(lesson.id)}>Edit</button>
                    <button onClick={() => handleDelete(lesson.id)}>Delete</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {userRole === 'Employee' && (
        <div className="add-lesson">
          <button onClick={handleAdd}>Add Lesson</button>
        </div>
      )}
    </div>
  );
}

export default Home;
