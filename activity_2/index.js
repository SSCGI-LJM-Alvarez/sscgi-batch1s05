var historyLoad = [];

function addHistoryLoad(newLoad) {
  historyLoad.unshift(newLoad);

  var tableOutput = "";
  var perLine = "";

  tableOutput += "<table class='table table-dark'>";

  perLine += "<tr>";
  perLine += "<th>Number</th>";
  perLine += "<th>Load</th>";
  perLine += "<th>Balance</th>";
  perLine += "</tr>";

  for (const load of historyLoad) {
    perLine += "<tr>";

    perLine += `<td>${load.mobile_number}</td>`;
    perLine += `<td>${load.load}</td>`;
    perLine += `<td>${load.balance}</td>`;

    perLine += "</tr>";
  }

  tableOutput += perLine;
  tableOutput += "</table>";

  document.getElementById("history_load").innerHTML = tableOutput;
}

function addLoad(event) {
  event.preventDefault();

  let current_load = Number(document.getElementById("current_load").value);
  let add_load = Number(document.getElementById("add_load").value);

  if (add_load === 0) {
    alert("You can't reload 0!");
  } else {
    document.getElementById("current_load").value = current_load + add_load;

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("modalReload")
    );
    modal.hide();
  }
}

function diminishLoad(event) {
  event.preventDefault();

  let mobile_number = document.getElementById("mobile_number").value;
  let current_load = Number(document.getElementById("current_load").value);
  let sub_load = Number(document.getElementById("sub_load").value);

  if (sub_load === 0) {
    alert("You can't pasaload 0!");
  } else if (sub_load > current_load) {
    alert("Insufficient Load!");
  } else {
    alert("Loaded Successfully!");

    document.getElementById("current_load").value = current_load - sub_load;
    addHistoryLoad({
      mobile_number: mobile_number,
      load: sub_load,
      balance: current_load - sub_load,
    });
  }
}
