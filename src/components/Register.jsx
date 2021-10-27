const Register = () => {
  return (
    <div className="register" align="center">
      <h2>Register Here</h2>

      <form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label htmlFor="username">User Name:</label>
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="Create a Username"
              required
            />
          </div>

          <div class="form-group col-md-4">
            <label htmlFor="fname">First Name:</label>
            <input
              id="fname"
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              required
            />
          </div>

          <div class="form-group col-md-4">
            <label htmlFor="lname">Last Name:</label>
            <input
              id="lname"
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              required
            />
          </div>

          <div class="form-group col-md-4">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter Email"
              required
            />
          </div>

          <div class="form-group col-md-4">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Create a Password"
              required
            />
          </div>

          <div class="form-group col-md-4">
            <label htmlFor="rpassword">Re-type Password:</label>
            <input
              id="rpassword"
              type="password"
              className="form-control"
              placeholder="Re-type Password"
              required
            />
          </div>

          <button class="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
