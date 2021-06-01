import TableCsv from "./TableCsv.js";

const csvFileInput = document.querySelector("#csvFileInput");
const tableRoot = document.querySelector("#csvRoot");
const tableCsv = new TableCsv(tableRoot);

csvFileInput.addEventListener("change", (e) => {
  Papa.parse(csvFileInput.files[0], {
    skipEmptyLines: true,
    delimiter: ",",
    complete: (results) => {
      tableCsv.update(results.data.slice(1), results.data[0]);
    }
  });
});

