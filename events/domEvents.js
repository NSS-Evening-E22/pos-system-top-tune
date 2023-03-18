import { showOrders } from '../pages/orders';
import { getOrders, deleteOrder, getSingleOrder } from '../api/orderData';
import getSingleItem from '../api/itemData';
import closeOrderForm from '../components/forms/closeOrderForm';
import addItemForm from '../components/forms/addItemForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrder(firebaseKey).then(() => {
          getOrders().then(showOrders);
        });
      }
    }
    // CLICK EVENT FOR SHOWING FORM FOR CLOSING ORDER
    if (e.target.id.includes('payment-btn')) {
      console.warn('clicked closed order');
      if (e.target.id.split('--')) {
        const [, firebaseKey] = e.target.id.split('--');

        getSingleOrder(firebaseKey).then((obj) => closeOrderForm(obj));
      }
    }

    // click event for editing item
    if (e.target.id.includes('edit-item-btn')) {
      console.warn('EDIT ITEM', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((itemObj) => addItemForm(itemObj));
    }
  });
};
export default domEvents;
