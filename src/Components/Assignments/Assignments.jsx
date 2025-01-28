import React, { useEffect, useState } from 'react';
import './Assignments.css';

function Assignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/assignments')
      .then((response) => response.json())
      .then((data) => setAssignments(data))
      .catch((error) => console.error('Error fetching assignments:', error));
  }, []);

  return (
    <div>
      <h2>Semester Assignments</h2>
      <div className='Current-Assignments'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.length > 0 ? (
              assignments.map((assignment, index) => (
                <tr key={index}>
                  <td>{assignment.name}</td>
                  <td>{assignment.deadline}</td>
                  <td>{assignment.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No assignments available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Assignments;
