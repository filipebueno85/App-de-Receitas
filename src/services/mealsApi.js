export const fetchApiMeals = async (endpoint) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/${endpoint}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals;
};

// SIMULAÇÃO CHAMADA API

// const mealsApi = async () => {
//   const result = await fetchApiDrinks('search.php?s=Arrabiata');
//   console.log(result);
// };
// useEffect(() => {
//   mealsApi();
// }, []);
