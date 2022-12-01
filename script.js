class Item {
  static id = 110;
  name = "";
  pricePerItem = "";
  quantity = "";
  totalPrice = "";

  constructor(name, pricePerItem, quantity) {
    Item.id += 10;
    this.id = Item.id;
    this.name = name;
    this.pricePerItem = pricePerItem;
    this.quantity = quantity;
    this.totalPrice = this.pricePerItem * this.quantity;
  }

  setName(name) {
    this.name = name;
  }

  setPricePerItem(pricePerItem) {
    this.pricePerItem = pricePerItem;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }
}

let items = [];

function createItem() {
  let name = document.getElementById("name").value;
  let pricePerItem = document.getElementById("pricePerItem").value;
  let quantity = document.getElementById("quantity").value;

  if (!name) {
    return;
  }

  if (!pricePerItem) {
    return;
  }

  if (!quantity) {
    return;
  }

  let item = new Item(name, pricePerItem, quantity);
  items.push(item);
  readItems();

  document.getElementById("name").value = "";
  document.getElementById("pricePerItem").value = "";
  document.getElementById("quantity").value = "";
}

function readItems() {
  let rows = document.querySelectorAll("#items tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].parentElement.removeChild(rows[i]);
  }

  let itemsTable = document.getElementById("items");
  for (let i = 0; i < items.length; i++) {
    let currentItem = items[i];
    itemsTable.insertAdjacentHTML(
      "beforeend",
      `<tr id="item_${currentItem.id}"> 
    <td>${currentItem.id}</td>
    <td>${currentItem.name}</td>
    <td>${currentItem.pricePerItem}</td>
    <td>${currentItem.quantity}</td>
    <td>${currentItem.totalPrice}</td>
    </tr>`
    );
  }

  let itemsNumber = document.getElementById("items_number");
  itemsNumber.innerText = `Selected items: ${items.length}`;
}

document.addEventListener("DOMContentLoaded", function () {
  let btnAdd = document.getElementById("btnAdd");
  btnAdd.addEventListener("click", function () {
    createItem();
  });
  readItems();
});
