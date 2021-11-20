import React,{ useState } from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownOutlined from '@material-ui/icons/KeyboardArrowDownOutlined'
import '../Common/table.css'

function Table() {
    
    const [counts, setCount]=useState([23,4,23143,65,75,])
    
    
    return (
        <div>
            <div>
  <table class="container-fluid">
    <thead>
      <tr>
        <th>Time<KeyboardArrowDownOutlined /></th>
        <th>clientip</th>
        <th>geo.srcdest</th>
        <th>request</th>
        <th>response</th>
      </tr>
    </thead>
    <tbody>
      {
          counts.map(count=>(
              
          <tr>
        <td> <KeyboardArrowRightIcon /> John</td>
        <td>Doe</td>
        <td>john@example.com</td>
        <td>john@example.com</td>
        <td>john@example.com</td>
        <td>john@example.com</td>
              </tr>
          ))
      }
    </tbody>
  </table>
</div>
  </div>
    )
}

export default Table
