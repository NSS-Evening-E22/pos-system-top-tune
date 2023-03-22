// import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const revPage = (obj) => {
  console.warn('this is the rev', obj);
  clearDom();

  const arrRevenue = [];
  const arrTips = [];

  // selecting revenue
  obj.forEach((item) => arrRevenue.push(item.price));

  // selecting tips
  obj.forEach((item) => arrTips.push(item.tip));

  // totaling rev
  function sumOfRev() {
    if (arrRevenue.length === 0) {
      return 0;
    }
    return arrRevenue.reduce((a, b) => a + b);
  }

  // totaling tips
  function sumOfTip() {
    if (arrTips.length === 0) {
      return 0;
    }
    return arrTips.reduce((a, b) => a + b);
  }

  // totaling order types
  const callIn = obj.filter((Item) => Item.orderType === 'Call In');
  const inPerson = obj.filter((item) => item.orderType === 'In Person');

  // totaling payment types
  const mobileOrders = obj.filter((Item) => Item.paymentType === 'Mobile');
  const cashOrders = obj.filter((item) => item.paymentType === 'Cash');
  const creditOrders = obj.filter((Item) => Item.paymentType === 'Credit');

  const revString = `
    <h1>Revenue</h1>
    <h3>Total Revenue: ${sumOfRev()}</h3>

    <div id="order-types">
     <p>Total Tips: ${sumOfTip()}</p>
     <p>Total Call In Orders: ${callIn.length}</p>
     <p>Total In Person Orders: ${inPerson.length}</p>
    </div>

    <div id="payment-types">
      <h4>Payment Types</h4>
      <p>Total Credit: ${creditOrders.length}</p>
      <p>Total Cash: ${cashOrders.length}</p>
      <p>Total Mobile: ${mobileOrders.length}</p>
    </div>
  `;

  renderToDom('#rev-container', revString);
};

export default revPage;
