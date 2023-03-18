import {
  getSingleOrder, getOrders, updateOrder, createOrder
} from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';
import { showOrders } from '../pages/orders';

const addOrderFormEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    e.preventDefault();
    // ADD ORDER
    if (e.target.id.includes('submit-orderForm')) {
      const payload = {
        orderName: document.querySelector('#order-name').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType-select-input').value,
        orderStatus: false,
        timestamp: new Date(Date.now()).toLocaleString()
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }

    // EVENT FOR UPDATING ORDER
    if (e.target.id.includes('update-order')) {
      console.warn('update order');
      if (e.target.id.split('--')) {
        const [, firebaseKey] = e.target.id.split('--');
        const payload = {
          orderName: document.querySelector('#order-name').value,
          phone: document.querySelector('#phone').value,
          email: document.querySelector('#email').value,
          firebaseKey,
          timestamp: new Date(Date.now()).toLocaleString()
        };
        updateOrder(payload).then(() => {
          getOrders().then(showOrders);
        });

        getSingleOrder(firebaseKey).then((entryObj) => addOrderForm(entryObj));
      }
    }
  });
};

export default addOrderFormEvents;
