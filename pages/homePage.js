import renderToDOM from '../utils/renderToDom';
// import loginButton from '../components/Buttons/loginButton';

const homePage = (user) => {
  // console.warn(user);
  const domString = `<h1 id="display-3">WELCOME ${user.displayName} </h1>
  <br>
  <div id="login-button"></div>
  <br>
  <button id="viewOrder-btn">View Orders</button>
  <br>
  <button id="createOrder-btn">Create New Order</button>
  <br>
  <button id="viewRev-btn">View Revenue</button>
  `;
  renderToDOM('#main-container', domString);
};

export default homePage;
