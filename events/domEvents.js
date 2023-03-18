import { showOrders } from '../pages/orders';
import { getOrders, deleteOrder } from '../api/orderData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DETELE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrder(firebaseKey).then(() => {
          getOrders().then(showOrders);
        });
      }
    }
  });
};

export default domEvents;
