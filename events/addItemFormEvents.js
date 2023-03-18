import { createItem, getOrderItems, updateItem } from '../api/itemData';
import addItemForm from '../components/forms/addItemForm';
import viewOrderItems from '../pages/items';

const addItemFormEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SHOWING FORM FOR ADDING AN ITEM
    if (e.target.id.includes('add-item-btn')) {
      console.warn('ADD ITEM');
      addItemForm();
    }
  });

  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-item')) {
      const payload = {
        itemName: document.querySelector('#itemName').value,
        price: document.querySelector('#price').value
      };

      createItem(payload).then(({ name }) => {
        const patchPayLoad = { firebaseKey: name };

        updateItem(patchPayLoad).then(() => {
          getOrderItems().then(viewOrderItems);
        });
      });
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#itemName').value,
        price: document.querySelector('#price').value,
        firebaseKey,
      };
      console.warn('CLICKED UPDATE ITEM', e.target.id);
      updateItem(payload).then(() => {
        getOrderItems().then(viewOrderItems);
      });
    }
  });
};

export default addItemFormEvents;
