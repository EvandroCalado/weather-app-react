const KEY = '59c67312e52f4e9f8ef35914221712';

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no
  `;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchData;
