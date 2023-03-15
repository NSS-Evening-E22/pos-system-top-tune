import domBuilder from '../components/shared/domBuilder';
import homePage from '../pages/homePage';

const startApp = (user) => {
  domBuilder();
  homePage(user);
};

export default startApp;
