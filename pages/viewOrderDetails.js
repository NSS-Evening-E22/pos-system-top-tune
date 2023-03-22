// page to show item cards and total price plus add new item buttons and go to payment
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import showItems from './items';

const viewOrderDetails = (obj) => {
  clearDom();
  console.warn('this is the items object', obj);
  // console.warn('test key', obj.orderObject.firebaseKey);
  const arr = [];

  obj.orderItemsArray.forEach((item) => arr.push(item.price));

  // console.warn('this is the arr', arr);
  function sum() {
    if (arr.length === 0) {
      return 0;
    }
    return arr.reduce((a, b) => a + b);
  }

  const totalString = `
  <div class="text-white details">
  <h5 id="orderTotal">Total:${sum()} </h5>
  </div>`;

  const btnString = `<button class="btn btn-success btn-lg mb-4" id="add-item-btn--${obj.orderObject.firebaseKey}">Add Item</button><button class="btn btn-info btn-lg mb-4" id="payment-btn--${obj.orderObject.firebaseKey}">Go To Payment</button>`;

  showItems(obj.orderItemsArray);
  renderToDOM('#form-container', totalString);
  renderToDOM('#view-details', btnString);
};

export default viewOrderDetails;
