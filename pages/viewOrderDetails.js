// page to show item cards and total price plus add new item buttons and go to payment
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import showItems from './items';

const viewOrderDetails = (obj) => {
  clearDom();
  const domString = `
  <div class="text-white details">
     <h5>${obj.itemObject.itemName}</h5>
     PRICE: <h6 ${obj.itemObject.price}"></h6>
     <div class="mt-1 d-flex flex-wrap">
       <div class="d-flex flex-column">
         <div class="mt-5">
           <i id="edit-item-btn--${obj.itemObject.firebaseKey}" class="btn btn-info"></i>
           <i id="delete-item-btn--${obj.itemObject.firebaseKey}" class="btn btn-danger"></i>
         </div>
       </div>
    </div>    
  </div>`;

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add Item</button>';
  renderToDOM('#view-details', btnString);

  const btnString2 = '<button class="btn btn-info btn-lg mb-4" id="payment-btn">Go To Payment</button>';
  renderToDOM('#view-details', btnString2);

  showItems(obj.ordersItemsArray, '#view-details');
  renderToDOM('#view-details', domString);
};

export default viewOrderDetails;
