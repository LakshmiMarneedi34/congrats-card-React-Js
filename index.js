const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="blue-background">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="short-heading">Kiran V</h1>
      <p className="paragraph">
        Vishnu institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="watch-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
