// page to show item cards and total price plus add new item buttons and go to payment
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import showItems from './items';

const viewOrderDetails = (obj) => {
  clearDom();
  const domString = `
  <div class="text-white details">
  <h5 id="orderTotal">Total: </h5>
  </div>`;

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add Item</button>';
  renderToDOM('#view-details', btnString);

  const btnString2 = '<button class="btn btn-info btn-lg mb-4" id="payment-btn">Go To Payment</button>';
  renderToDOM('#view-details', btnString2);

  showItems(obj.ordersItemsArray, '#view-details');
  renderToDOM('#view-details', domString);
};

export default viewOrderDetails;
