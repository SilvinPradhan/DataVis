import "./App.css";
import * as d3 from "d3";
const url =
  "https://gist.githubusercontent.com/SilvinPradhan/d9f418ad3f60679e8b55253d8088b3bf/raw/ColorsDataTable.csv";
async function getData(url) {
  try {
    const response = await fetch(url);
    console.log(response.data);
    return await response.text();
  } catch (error) {
    console.log(error);
  }
}
const csvData = (url) => {
  getData(url).then((text) => {
    console.log(d3.csvParse(text));
    const data = d3.csvParse(text);
    let message = "";
    message = message + Math.round(text.length / 1024) + " kB\n";
    message = message + data.length + " rows\n";
    message = message + data.columns.length + " columns";
    document.getElementById("message-container").textContent = message;
  });
};

function App() {
  return (
    <div className="App">
      <pre id="message-container">
        <div className="App-header">{JSON.stringify(csvData(url))}</div>
      </pre>
    </div>
  );
}

export default App;
