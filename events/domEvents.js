import { getSingleOrder } from '../api/orderData';
import closeOrderForm from '../components/forms/closeOrderForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR CLOSING ORDER
    if (e.target.id.includes('payment-btn')) {
      console.warn('clicked closed order');
      if (e.target.id.split('--')) {
        const [, firebaseKey] = e.target.id.split('--');

        getSingleOrder(firebaseKey).then((obj) => closeOrderForm(obj));
      }
    }
  });
};

export default domEvents;
