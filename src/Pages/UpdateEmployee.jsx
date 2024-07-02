import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateEmployee } from '../Redux/EmployeeSlice';
import axios from 'axios';

const UpdateEmployee = () => {
const {id} = useParams();
const employees = useSelector((state)=>state.employees.employees);
//to check the id
const employee = employees.find((ele)=>ele.id === id);
const dispatch = useDispatch();
const navigate = useNavigate();
const [name, setName] = useState(employee.name);
const [email, setEmail]= useState(employee.email);
const [age,setAge]= useState(employee.age);
const [salary,setSalary]= useState(employee.salary);
const [designation,setDesignation]= useState(employee.designation);
const [role,setRole]= useState(employee.role);

const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        const response = await axios.put(`http://localhost:5000/api/update-employee/${id}`,{name,email,age,salary,designation,role});
        dispatch(updateEmployee(response.data.result));
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3y">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" value={name} className="form-control" id="name" placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" value={email} className="form-control" id="email" placeholder='Enter Your Email Id' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="number" value={age} className="form-control" id="age" placeholder='Enter Your Age' onChange={(e)=>setAge(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label">Salary</label>
                        <input type="number" value={salary} className="form-control" id="salary" placeholder='Enter Your Salary' onChange={(e)=>setSalary(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="designation" className="form-label">Designation</label>
                        <input type="text" value={designation} className="form-control" id="designation" placeholder='Enter Your Designation' onChange={(e)=>setDesignation(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Role</label>
                        <input type="text" value={role} className="form-control" id="role" placeholder='Enter Your Role' onChange={(e)=>setRole(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
                
            </div>
          
        </div>
    );
};

export default UpdateEmployee;