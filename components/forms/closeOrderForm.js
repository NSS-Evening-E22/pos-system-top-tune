import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// THIS IS HTML FOR CLOSE ORDER FORM - THE CLOSE ORDER EVENT WILL ADJUST THE OBJECT IN DB
const closeOrderForm = (obj) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `close-order--${obj.firebaseKey}` : 'close-order'}" class="mb-4">
      <div class="mb-3">
        <label for="paymentType-select-input" class="form-label">Payment Type</label>
        <select id="paymentType-input" class="form-select" aria-label="paymentType select">
          <option selected>Select Payment Type</option>
          <option value="cash-paymentType"}">Cash</option>
          <option value="credit-paymentType"}">Credit Card</option>
          <option value="dedit-paymentType"}">Dedit Card</option>
          <option value="check-paymentType"}">Check</option>
          <option value="mobile-paymentType"}">Mobile</option>
        </select>
      </div>
      <div class="form-group">
        <label for="tip-amt">Tip Amount</label>
        <input type="text" class="form-control" id="tip-amt" placeholder="$0.00" required>
      </div>  
      <button type="submit" class="btn btn-primary">Close Order</button>
    </form>`;

  renderToDOM('#view-details', domString);
};

export default closeOrderForm;
