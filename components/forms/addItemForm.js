import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addItemForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="title">Item Name</label>
        <input type="text" class="form-control" id="item-name" aria-describedby="itemName" placeholder="" value="${obj.item_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="item-price">Item Price</label>
        <input type="text" class="form-control" id="item-price" value="${obj.price || ''}" required>
      </div>  
      <button type="submit" class="btn btn-primary">Add/Edit Item</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addItemForm;
