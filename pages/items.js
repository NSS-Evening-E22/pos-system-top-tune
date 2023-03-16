import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewOrderItems = (obj) => {
  clearDom();

  const domString = `
  <div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">Item Name: ${obj.itemName}</h5>
    <p class="card-text">Price :$ ${obj.price}.</p>
    <a href="#"  id="edit-item-btn" class="btn btn-primary">Edit Item</a>
    <a href="#" id="delete-item-btn" class="btn btn-danger">Delete Item</a>
  </div>
</div>
 `;

  renderToDOM('#view-details', domString);
};

export default viewOrderItems;
