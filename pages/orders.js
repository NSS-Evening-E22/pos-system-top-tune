import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1> No Orders </h1>';
  renderToDom('#order-cards', domString);
};

const showOrders = (array) => {
  clearDom();
  console.warn('test', array);
  let domString = '';
  array.forEach((order) => {
    domString += `
      <div class="card d-flex" id="order-card">
        <div class="card-body">
          <h2 class="card-title">${order.orderName}</h2>
          <br>
          <p class="card-status">Order Status: ${order.orderStatus}</p>
          <br>
          <p class="card-number">Phone Number: ${order.phone}</p>
          <br> 
          <p class="card-email">Email: ${order.email}</p>
          <br>
          <p class="card-type">Order Type: ${order.orderType}</p>
        </div>
          <div id="cards-btn">
            <button class="btn btn-success" id="view-order-details-btn--${order.firebaseKey}">Details</button>
            <button id="edit-order-btn--${order.firebaseKey}" class="btn btn-info">Edit</i>
            <button id="delete-order-btn--${order.firebaseKey}" class="btn btn-danger">Delete</button>
          </div>
      </div>`;
  });
  renderToDom('#order-cards', domString);
};

export { showOrders, emptyOrders };
