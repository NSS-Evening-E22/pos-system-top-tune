import { getSingleOrder, getOrders, updateOrder,createOrder } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';
import { showOrders } from '../pages/orders';

const addOrderformEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    e.preventDefault();
    // ADD ORDER
    if (e.target.id.includes('submit-orderForm')) {
      const payload = {
        orderName: document.querySelector('#order-name').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        language: document.querySelector('#orderType-select-input').value,
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrders().then(showCards);
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
          time: currentTime,
        };
        updateOrder(payload).then(() => {
          getOrders( ).then(showOrders);
        });

        getSingleOrder(firebaseKey).then((entryObj) => addOrderForm(entryObj));
      }
    }
  });
};

export default addOrderformEvents;
