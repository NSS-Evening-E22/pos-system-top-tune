import addItemForm from '../components/forms/addItemForm';

const addItemFormEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SHOWING FORM FOR ADDING AN ITEM
    if (e.target.id.includes('add-item-btn')) {
      console.warn('ADD ITEM');
      addItemForm();
    }
  });
};

export default addItemFormEvents;
