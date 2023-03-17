import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
      <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-orderForm'}" class="mb-4">
        <div class="form-group">
          <label for="title">Order Name</label>
          <input type="text" class="form-control" id="order-name" placeholder="" value="${obj.orderName || ''}" required>
        </div>
        <div class="form-group">
          <label for="text">Customer Phone</label>
          <input type="text" class="form-control" id="phone" placeholder="" value="${obj.phone || ''}" required>
        </div>
        <div class="form-group">
        <label for="text">Customer Email</label>
        <input type="text" class="form-control" id="email" placeholder="" value="${obj.email || ''}" required>
        </div>
        <div class="mb-3">
        <label for="orderType-select-input" class="form-label">Order Type</label>
        <select id="orderType-select-input" class="form-select" aria-label="orderType select">
          <option selected>Select an Order Type</option>
          <option value="cash-orderType"}">Cash</option>
          <option value="credit-orderType"}">Credit Card</option>
          <option value="mobile-orderType"}">Mobile</option>
        </select>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Creat/Edit Order</button>
      </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderForm;
