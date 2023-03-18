import logoutButton from '../components/Buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import addItemFormEvents from '../events/addItemFormEvents';
import addOrderformEvents from '../events/addOrderFormEvents';
import homePage from '../pages/homePage';

const startApp = (user) => {
  domBuilder();
  homePage(user);
  navBar();
  addItemFormEvents();
  addOrderformEvents();
  logoutButton();
};

export default startApp;
