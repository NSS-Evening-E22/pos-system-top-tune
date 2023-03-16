import { getSingleOrder } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';

// TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
const addOrderFormEvent = () => {
  if (e.target.id.includes('update-order')) {
      console.warn('update order');
      if (e.target.id.split('--')) {
        const [, firebaseKey] = e.target.id.split('--');

        getSingleOrder(firebaseKey).then((entryObj) => addOrderForm(user.uid, entryObj));
      }
    }
};

export default addOrderFormEvent;
