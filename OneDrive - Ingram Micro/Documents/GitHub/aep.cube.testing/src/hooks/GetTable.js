import { BasePath } from "./BasePath";

async function fetchTableData() {
  try {
    const response = await fetch(`${BasePath}/table`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching table data:', error);
    console.log(error.message); // Add this line to see the error message
    return null;
  }
}

export default fetchTableData;
