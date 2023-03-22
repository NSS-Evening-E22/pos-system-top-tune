import { createItem, getOrderItems, updateItem } from '../api/itemData';
import { addItemForm } from '../components/forms/addItemForm';
import viewOrderDetails from '../pages/viewOrderDetails';

const addItemFormEvents = () => {
  document.querySelector('#view-details').addEventListener('click', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SHOWING FORM FOR ADDING AN ITEM
    if (e.target.id.includes('add-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('ADD ITEM');
      addItemForm(firebaseKey);
    }
  });

  document.querySelector('#form-container').addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-item')) {
      const [, orderFirebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#itemName').value,
        price: Number(document.querySelector('#price').value),
        orderId: orderFirebaseKey,
      };

      createItem(payload).then(({ name }) => {
        const patchPayLoad = { firebaseKey: name };

        updateItem(patchPayLoad).then(() => {
          getOrderItems(orderFirebaseKey).then(viewOrderDetails);
        });
      });
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#itemName').value,
        price: Number(document.querySelector('#price').value),
        firebaseKey,
      };
      console.warn('CLICKED UPDATE ITEM', e.target.id);
      updateItem(payload).then(() => {
        getOrderItems(firebaseKey).then(viewOrderDetails);
      });
    }
  });
};

export default addItemFormEvents;
