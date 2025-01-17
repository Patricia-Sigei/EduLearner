import React from 'react';
import './Resources.css';

function Resources() {
  return (
    <div className="resources">
      <h2>Learning Resources</h2>
      
      <div className="resources-list">
        <h3>Available Resources</h3>
        <table>
          <thead>
            <tr>
              <th>Unit</th>
              <th>Title</th>
              <th>Resource Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CSS101</td>
              <td>Intro to Computing</td>
              <td><a href="#">Download</a></td>
            </tr>
            <tr>
              <td>CSS102</td>
              <td>Linear Programming Basics</td>
              <td><a href="#">Download</a></td>
            </tr>
            <tr>
              <td>CSS104</td>
              <td>Algorithms in Practice</td>
              <td><a href="#">Download</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Resources;
