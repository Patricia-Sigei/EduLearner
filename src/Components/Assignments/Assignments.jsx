import React from 'react'
import './Assignments.css'

function Assignments() {
  return (
    <div>
        <h2>Semester Assignments</h2>
      <div className='Current-Assignments'>
        <h3>Current Assignments</h3>
          <table>
            <tr>
                <th>Unit Code</th>
                <th>Unit Title</th>
                <th>Assignment</th>
                <th>Due Date</th>
            </tr>
            <tr>
                <td>CCS101</td>
                <td>Fundamentals of Computing</td>
                <td>Algorithms</td>
                <td>20/01/2025</td>
            </tr>
            <tr>
                <td>CCS103</td>
                <td>Discrete Structures I</td>
                <td>Analysis of the Set Theory</td>
                <td>30/01/2025</td>
            </tr>
            <tr>
                <td>CCS105</td>
                <td>Electrical Principles</td>
                <td>Understanding Binary Numbers</td>
                <td>24/01/2025</td>
            </tr>
          </table>
      </div>
      <div className='Upcoming-Assignments'>
        <h3>Upcoming Assignments</h3>
      <table>
            <tr>
                <th>Unit Code</th>
                <th>Unit Title</th>
                <th>Assignment</th>
                <th>Due Date</th>
            </tr>
            <tr>
                <td>CCS101</td>
                <td>Fundamentals of Computing</td>
                <td>Computer Network</td>
                <td>14/02/2025</td>
            </tr>
            <tr>
                <td>CCS102</td>
                <td>Linear Algebra</td>
                <td>Matrix Operations</td>
                <td>20/02/2025</td>
            </tr>
            <tr>
                <td>CCS106</td>
                <td>Discrete Structures II</td>
                <td>Modular Arithmetic and Cryptography</td>
                <td>26/01/2024</td>
            </tr>
          </table>
      </div>
      <div className='Completed-Assignments'>
        <h3>Completed Assignments</h3>
      <table>
            <tr>
                <th>Unit Code</th>
                <th>Unit Title</th>
                <th>Assignment</th>
                <th>Grading Status</th>
            </tr>
            <tr>
                <td>CCS102</td>
                <td>Linear Algebra</td>
                <td>Vector Spaces</td>
                <td>Graded</td>
            </tr>
            <tr>
                <td>CCS105</td>
                <td>Electrical Principles</td>
                <td>Power and Energy</td>
                <td>Pending</td>
            </tr>
          </table>
      </div>
    </div>
  )
}

export default Assignments
