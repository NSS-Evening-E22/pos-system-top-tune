import addItemForm from '../components/forms/addItemForm';

function addItemFormEvents(user) {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR ADDING AN ITEM
    if (e.target.id.includes('add-item-btn')) {
      console.warn('ADD ITEM');
      addItemForm(user);
    }
  });
}

export default addItemFormEvents;
