import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1> No Orders </h1>';
  renderToDom('#order-cards', domString);
};

const showOrders = (array) => {
  clearDom();
  let domString = '';
  array.forEach((order) => {
    domString += `
      <div class="card d-flex" style="width: 19rem,">
        <div class="card-body">
          <h2 class="card-title">${order.name}</h2>
          <br>
          <p class="card-status">${order.status}</p>
          <br>
          <p class="card-number">${order.number}</p>
          <br> 
          <p class="card-email>${order.email}</p>
          <br>
          <p class="card-type">Order Type:${order.type}</p>
        </div>
          <div id="cards-btn">
            <button class="btn btn-success fas fa-eye" id="view-order-btn--${order.firebaseKey}">Details</button>
            <button id="edit-order-btn--${order.firebaseKey}" class="btn btn-info">Edit</i>
            <button id="delete-order-btn--${order.firebaseKey}" class="btn btn-danger">Delete</button>
          </div>
      </div>`;
  });
  renderToDom('#order-cards', domString);
};

export { showOrders, emptyOrders };
