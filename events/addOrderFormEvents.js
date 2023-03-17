import { getSingleOrder } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';

const addOrderformEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // EVENT FOR UPDATING ORDER
    if (e.target.id.includes('update-order')) {
      console.warn('update order');
      if (e.target.id.split('--')) {
        const [, firebaseKey] = e.target.id.split('--');

        getSingleOrder(firebaseKey).then((entryObj) => addOrderForm(entryObj));
      }
    }
  });
};

export default addOrderformEvents;
