const Gender = () => {
    return (
      <div className="mb-4 mt-4">
        <label className="block mb-3">Gender:</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2"> 
            <input type="radio" name="gender" value="male" required /> Male
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="gender" value="female" required /> Female
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="gender" value="other" required /> Other
          </label>
        </div>
      </div>
    );
  };
  
  export default Gender;
  