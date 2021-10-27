const SignUp = () => {
  return (
    <div className="login" align="center">
      <h2>Log In Here</h2>

      <form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label htmlFor="username">User Name:</label>
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="username"
              required
            />
          </div>

          <div class="form-group col-md-4">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
