import React from 'react'
import './Lessons.css'

function Lessons() {
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
            <tr>
              <td>0800hrs - 1000hrs</td>
              <td>CSS101 - Fundamentals of Computing<br />L Block Room 12</td>
              <td>CSS104 - Object Oriented Programming<br />L Block Room 14</td>
              <td>CSS103 - Discrete Structures I<br />L Block Room 15</td>
              <td>CSS102 - Linear Algebra<br />L Block Room 10</td>
              <td>CSS105 - Electrical Principles<br />L Block Room 16</td>
            </tr>
            <tr>
              <td>1100hrs - 1300hrs</td>
              <td>CSS105 - Electrical Principles<br />L Block Room 16</td>
              <td>CSS101 - Fundamentals of Computing<br />L Block Room 12</td>
              <td>CSS106 - Discrete Structures II<br />L Block Room 13</td>
              <td>CSS102 - Linear Algebra<br />L Block Room 10</td>
              <td>CSS104 - Object Oriented Programming<br />L Block Room 14</td>
            </tr>
            <tr>
              <td>1400hrs - 1600hrs</td>
              <td>CSS102 - Linear Algebra<br />L Block Room 10</td>
              <td>CSS106 - Discrete Structures II<br />L Block Room 13</td>
              <td>CSS105 - Electrical Principles<br />L Block Room 16</td>
              <td>CSS103 - Discrete Structures I<br />L Block Room 14</td>
              <td>CSS101 - Fundamentals of Computing<br />L Block Room 12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Lessons
