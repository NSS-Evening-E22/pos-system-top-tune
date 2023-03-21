import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showItems = (array) => {
  clearDom();
  console.warn('test', array);
  let domString = '';
  array.forEach((item) => {
    domString += `
  <div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">Item Name: ${item.itemName}</h5>
    <p class="card-text">Price :$ ${item.price}.</p>
    <i id="edit-item-btn--${item.firebaseKey}" class="btn btn-info"></i>
    <i id="delete-item-btn--${item.firebaseKey}" class="btn btn-danger"></i>
  </div>
</div>
 `;

    renderToDom('#order-cards', domString);
  });
};
export default showItems;
