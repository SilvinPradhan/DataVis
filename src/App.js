import "./App.css";
import axios from "axios";
const url =
  "https://gist.githubusercontent.com/SilvinPradhan/d9f418ad3f60679e8b55253d8088b3bf/raw/ColorsDataTable.csv";
async function getData(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">{JSON.stringify(getData(url))}</header>
    </div>
  );
}

export default App;
