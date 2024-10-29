const Input = () => {

    return (
        <>
      <label className="block mb-3">Name:</label>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="First Name"
            name="firstName" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Middle Name"
            name="middleName"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            required 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <label className="block mb-3">Email:</label>
        <div className="mb-4 mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      
      </>
    );
  };
  
  export default Input;
  