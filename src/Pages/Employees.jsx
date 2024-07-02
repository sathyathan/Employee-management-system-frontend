import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEmployee, getEmployee } from '../Redux/EmployeeSlice';
import axios from 'axios';

const Employees = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state)=>state.employees.employees);

useEffect (()=>{
  fetchData();
},[])

const fetchData = async ()=>{
    try {
       const response = await axios.get("https://employee-management-backend-zoar.onrender.com/api/get-employee");
       dispatch(getEmployee(response.data.result));
    } catch (error) {
        console.log(error);
    }
}

const handleDelete = async (id)=>{
   try {
    const response = await axios.delete(`https://employee-management-backend-zoar.onrender.com/api/delete-employee/${id}`)
    dispatch(deleteEmployee({id}))

   } catch (error) {
    console.log(error);
   }
}

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
           <div className='w-50 bg-dark rounded p-3'>
            <Link to='/create' className='btn btn-success btn-sm mb-2'>Create User</Link>
            <table className='table'>
              <thead>
                 <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Designation</th>
                    <th>Role</th>
                    <th>Actions</th>
                 </tr>
              </thead>
              <tbody>
                 {employees.map((ele)=>{
                  return(
                    <tr key={ele.id}>
                       <td>{ele.name}</td>
                       <td>{ele.email}</td>
                       <td>{ele.age}</td>
                       <td>{ele.salary}</td>
                       <td>{ele.designation}</td>
                       <td>{ele.role}</td>
                       <td>
                        <Link to={`/update/${ele.id}`} className='btn btn-warning btn-sm me-2'>Edit</Link>
                        <button onClick={()=>handleDelete(ele.id)} className='btn btn-danger btn-sm'>Delete</button>
                       </td>
                    </tr>
                  )
})}
              </tbody>
            </table>
           </div>
        </div>
    );
};

export default Employees;