import logoutButton from '../components/Buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import homePage from '../pages/homePage';

const startApp = (user) => {
  domBuilder();
  homePage(user);
  navBar();
  logoutButton();
};

export default startApp;
