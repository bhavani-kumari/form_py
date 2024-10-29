import React from "react";
import Address from "./Address";
import Gender from "./Gender";
import Input from "./Input";
import Password from "./Password"; 
import DateOfBirth from "./Dateofbrith"; 

const RegistrationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert("Form submitted!"); 
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("img/reg.jpg")' }} 
    >
      <form
      className="bg-white bg-opacity-90 p-10 rounded-lg shadow-2xl w-[700px] h-[800px]" 
     
        onSubmit={handleSubmit}
      >
       <h1 className="text-center text-2xl font-bold mb-4 underline decoration-black-900 decoration-2">
  Registration Form
</h1>

        
        <Input />
        <DateOfBirth/>
       
        <Gender />
        <Address />
        <Password/>
      
   
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg mt-4 shadow-lg transform transition duration-300 hover:shadow-xl hover:scale-105"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
