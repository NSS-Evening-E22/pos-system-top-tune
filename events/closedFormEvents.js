import { getOrders, updateOrder } from '../api/orderData';
import { showOrders } from '../pages/orders';

const closeOrderFormEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR CLOSING ORDER
    if (e.target.id.includes('close-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED CLOSE ORDER', e.target.id);
      console.warn(firebaseKey);
      const payload = {
        tip: document.querySelector('#tip-amt').value,
        paymentType: document.querySelector('#paymentType-input').value,
        orderStatus: true,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        getOrders().then(showOrders);
      });
    }
  });
};

export default closeOrderFormEvents;
