const SearchTrain = () => {
  return (
    <div className="search-trains" align="center">
      <h2>Search For Trains Here</h2>

      <form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label htmlFor="from">Departure Station:</label>
            <input
              id="from"
              type="text"
              className="form-control"
              placeholder="From"
              required
            />
          </div>

          <div class="form-group col-md-4">
            <label htmlFor="destination">Destination Station:</label>
            <input
              id="destination"
              type="text"
              class="form-control"
              placeholder="To"
              required
            />
          </div>

          <div class="form-group col-md-4">
            <label htmlFor="division">Division:</label>
            <select class="form-control" id="division">
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Khulna</option>
              <option>Rajshahi</option>
              <option>Sylhet</option>
              <option>Rangpur</option>
              <option>Barisal</option>
              <option>Mymensingh</option>
            </select>
          </div>

          <div class="form-group col-md-4">
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" class="form-control" required />
          </div>

          <button type="submit" class="btn btn-primary">
            Find
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchTrain;
