import renderToDOM from '../utils/renderToDom';
// import loginButton from '../components/Buttons/loginButton';

const homePage = (user) => {
  console.warn(user);
  const domString = `<h1 id="display-3">WELCOME ${user.displayName} </h1>
  <br>
  <h3 id="display-4">SIGN IN TO GET STARTED!</h3>
  <br>
  <div id="login-button"></div>
  <br>
  <button id="viewOrder-btn">View Orders</button>
  <button id="createOrder-btn">Create New Order</button>
  <button id="viewRev-btn">View Revenue</button>
  `;
  renderToDOM('#main-container', domString);
};

export default homePage;
