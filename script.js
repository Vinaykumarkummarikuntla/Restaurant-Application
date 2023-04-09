// store detail to the server
function billAmount(event) {
  event.preventDefault();

  const price = event.target.choosePrice.value;
  const dish = event.target.chooseDish.value;
  const table = event.target.tables.value;

  axios
    .post(
      "https://crudcrud.com/api/545fa66f8405418d98dc3aebcd2dda9a/billdetails",
      { price, dish, table }
    )
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
      document.body.innerHTML =
        document.body.innerHTML + "<h2>Something went Wrong</h2>";
    });
}

window.addEventListener("DOMContentLoaded", () =>
  axios
    .get(
      "https://crudcrud.com/api/545fa66f8405418d98dc3aebcd2dda9a/billdetails"
    )
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        orderDetails(response.data[i]);
      }
    })
    .catch((err) => console.log(err))
);

// showing order details
function orderDetails(table) {
  if (table.table === "table1") {
    parentNode = document.getElementById("table1");
  } else if (table.table === "table2") {
    parentNode = document.getElementById("table2");
  } else if (table.table === "table3") {
    parentNode = document.getElementById("table3");
  }

  childNode = `<li id= ${table._id}> ${table.price} - ${table.dish} - ${table.table} 
 <button onclick=deleteOrderDetails('${table._id}')>Delete </button>
 </li>`;
  parentNode.innerHTML = parentNode.innerHTML + childNode;
}

// delete order details on server
function deleteOrderDetails(tableId) {
  console.log("deleteOrderDetails", tableId);
  axios
    .delete(
      `https://crudcrud.com/api/545fa66f8405418d98dc3aebcd2dda9a/billdetails/${tableId}`
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  deleteOrderOnScreen(tableId);
}

// delete order on screen
function deleteOrderOnScreen(tableId) {
  if (table.tableId === "table1") {
    parentNode = document.getElementById("table1");
  } else if (table.tableId === "table2") {
    parentNode = document.getElementById("table2");
  } else if (table.tableId === "table3") {
    parentNode = document.getElementById("table3");
  }
  childNode = document.getElementById(`${tableId}`);
  parentNode.removeChild(childNode);
  alert("Order details deleted");
}
