import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <div className='Heading'>
            <h2>Hello, Good Morning</h2>
            <h3>Today's Lessons</h3>
      </div>
      <div className='Lesson-Table'>
           <table>
            <tr>
                <th>Unit</th>
                <th>Unit Title</th>
                <th>Time</th>
                <th>Venue</th>
            </tr>
            <tr>
                <td>CCS101</td>
                <td>Fundamentals of Computing</td>
                <td>0800hrs - 1000hrs</td>
                <td>L Block Room 12</td>
            </tr>
            <tr>
                <td>CCS105</td>
                <td>Electrical Principles</td>
                <td>1100hrs - 1300hrs</td>
                <td>L Block Room 16</td>
            </tr>
            <tr>
                <td>CCS102</td>
                <td>Linear Algebra</td>
                <td>1400hrs - 1600hrs</td>
                <td>L Block Room 10</td>
            </tr>
           </table>
      </div>
    </div>
  )
}

export default Home
