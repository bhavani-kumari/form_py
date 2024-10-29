const Address = () => {
    return (
      <div className="mb-4 mt-4">
        <label className="block mb-3">Address:</label>
        <textarea
          placeholder="Enter your Address"
          name="address"
          required
          className="w-full h-24 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
    );
  };
  
  export default Address;
  