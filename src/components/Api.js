/* Fetch data from WP with this Function returns JSON */
export default async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return response.json();
  }