export const fetchApiDrinks = async (endpoint) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/${endpoint}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.drinks;
};

// SIMULAÇÃO CHAMADA API

// const drinksApi = async () => {
//   const result = await fetchApiDrinks('search.php?s=margarita');
//   console.log(result);
// };
// useEffect(() => {
//   drinksApi();
// }, []);
