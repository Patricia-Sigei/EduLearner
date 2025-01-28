import React, { useEffect, useState } from 'react';
import './Lessons.css';

function Lessons({ userRole }) {
  const [lessons, setLessons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch lessons from the backend
    fetch('/lessons')
      .then((response) => response.json())
      .then((data) => {
        setLessons(data);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    // Send DELETE request to backend
    fetch(`/lessons/${id}`, { method: 'DELETE' })
      .then(() => {
        setLessons(lessons.filter((lesson) => lesson.id !== id));
      });
  };

  const handleEdit = (id) => {
    // Open a modal or form for editing lesson (to be implemented)
  };

  const handleCreate = () => {
    // Open a form for creating a new lesson (to be implemented)
  };

  return (
    <div>
      <h2>This Week's Lessons</h2>
      <div className="Weekly-Lessons">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6">Loading...</td>
              </tr>
            ) : (
              // Loop through the lessons and display them
              ['0800hrs - 1000hrs', '1100hrs - 1300hrs', '1400hrs - 1600hrs'].map((timeSlot, index) => (
                <tr key={index}>
                  <td>{timeSlot}</td>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, dayIndex) => (
                    <td key={dayIndex}>
                      {lessons
                        .filter((lesson) => lesson.time_slot === timeSlot && lesson.day_of_week === day)
                        .map((lesson) => (
                          <div key={lesson.unit}>
                            <span>{lesson.unit_title}</span>
                            {userRole === 'teacher' && (
                              <>
                                <button onClick={() => handleEdit(lesson.id)}>Edit</button>
                                <button onClick={() => handleDelete(lesson.id)}>Delete</button>
                              </>
                            )}
                          </div>
                        ))}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>

        {userRole === 'teacher' && (
          <button onClick={handleCreate}>Create Lesson</button>
        )}
      </div>
    </div>
  );
}

export default Lessons;
