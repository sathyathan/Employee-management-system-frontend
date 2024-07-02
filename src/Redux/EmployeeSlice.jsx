import { createSlice } from "@reduxjs/toolkit";


const EmployeeSlice=createSlice({

    name: "employees",
    initialState: {
      employees: [],
    },
    reducers: {
      //getemployee,createemployee,updateemployee,deleteemployee
      getEmployee: (state, action) => {
        state.employees = action.payload.map((ele) => {
          return { id: ele._id, name: ele.name, email: ele.email, age: ele.age ,salary:ele.salary,designation:ele.designation,role:ele.role};
        });
      },
      createEmployee: (state, action) => {
        state.employees.push(action.payload);
      },
      updateEmployee: (state, action) => {
        const index = state.employees.findIndex(
          (ele) => ele.id === action.payload.id
        );
        state.employees[index] = {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          age: action.payload.age,
          salary: action.payload.salary,
          designation: action.payload.designation,
          role: action.payload.role,
  
        };
      },
      deleteEmployee: (state, action) => {
        const id = action.payload.id;
        state.employees = state.employees.filter((ele) => ele.id !== id);
      },
    },
  });
  
  export const { getEmployee, createEmployee, updateEmployee, deleteEmployee } =
    EmployeeSlice.actions;
  export default EmployeeSlice.reducer;

