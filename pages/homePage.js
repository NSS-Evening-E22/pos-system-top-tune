import renderToDom from '../utils/renderToDom';
// import loginButton from '../components/Buttons/loginButton';

const homePage = (user) => {
  // console.warn(user);
  const domString = `<div id="whateverForCSS"> <h1 id="display-3">WELCOME ${user.displayName} </h1>
  <br>
  <button id="viewOrder-btn" class="btn btn-success">View Orders</button>
  <br>
  <button id="createOrder-btn" class="btn btn-info">Create New Order</button>
  <br>
  <button id="viewRev-btn" class="btn btn-warning">View Revenue</button></div>
  `;
  renderToDom('#home-container', domString);
};

export default homePage;
