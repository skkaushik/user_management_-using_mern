import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import './ViewData.css'

function ViewData() {
    const url = "http://localhost:5050/view";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className='container'>


<h3 style={{ color: "green" }}>All User </h3>
      
      <table className='table'>
                    <tr>
                    <th> S.No</th>
                    <th> Name</th>
                    <th>Email</th>
                    <th>Job Titile</th>
                    <th>Address</th>
                    </tr>
                
        {data.map((data, index) => {
          
          return (
            <tr>
                <td>{index+1}</td>
                <td>{data.firstName}{data.lastName}</td>
                
                <td>{data.email}</td>
                <td>{data.job}</td>
                <td>{data.address}</td>
            </tr>
            
                
              
            
          );
        })}
        </table>
      
    


    </div>
  )
}

export default ViewData