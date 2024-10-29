

const Password = () => {
  return (
    <div className="mb-4 mt-4">
     <label className="block mb-3">Password:</label>
      <input
        type="text"
        placeholder="Enter your Password"
        name="Password"
        required 
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
  );
};

export default Password;
