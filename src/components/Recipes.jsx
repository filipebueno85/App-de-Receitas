import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import beef from '../assets/beefIcon.png';
import breakfast from '../assets/breakfasticon.png';
import chicken from '../assets/chickenIcon.png';
import hotChocolate from '../assets/chocolateIcon.png';
import cocktail from '../assets/cocktailIcon.png';
import dessert from '../assets/dessertIcon.png';
import goat from '../assets/goatIcon.png';
import ordinary from '../assets/ordinaryIcon.png';
import other from '../assets/otherIcon.png';
import shake from '../assets/shakeIcon.png';
import myContext from '../context/myContext';

const doze = 12;
const cinco = 5;

function Recipes({ title }) {
  const {
    mealsApi,
    drinksApi,
    category,
    setCategory,
    resultSearch,
    isLoading,
    filterMeals,
    filterDrinks,
    // setIdRecipe,
  } = useContext(myContext);

  useEffect(() => {
    if (category && title === 'Meals') {
      mealsApi(`filter.php?c=${category}`);
    } else if (category && title === 'Drinks') {
      drinksApi(`filter.php?c=${category}`);
    } else if (title === 'Meals') {
      mealsApi('search.php?s=');
    } else if (title === 'Drinks') {
      drinksApi('search.php?s=');
    }
  }, [title, category]);

  return (
    <div className="recipes-container">
      <div className="filters-container">
        <button
          className="category-button"
          type="button"
          style={ { width: '55px',
            padding: '3px',
            margin: 'auto',
            fontFamily: 'Stella Nova , sans-serif',
            fontSize: '25px',
            height: '55px' } }
          data-testid="All-category-filter"
          onClick={ () => setCategory('') }
        >
          All
        </button>
        {title === 'Meals'
      && filterMeals.slice(0, cinco).map((meal) => (
        <button
          className="category-button"
          type="button"
          name={ meal.strCategory }
          key={ meal.strCategory }
          data-testid={ `${meal.strCategory}-category-filter` }
          onClick={ ({ target }) => setCategory(target
            .name === category ? '' : target.name) }
        >
          {meal.strCategory === 'Beef' && (<img
            style={ { width: '50px', padding: '3px' } }
            name={ meal.strCategory }
            src={ beef }
            alt={ meal.setCategory }
          />)}
          {meal.strCategory === 'Goat' && (<img
            style={ { width: '50px', padding: '3px' } }
            name={ meal.strCategory }
            src={ goat }
            alt={ meal.setCategory }
          />)}
          {meal.strCategory === 'Chicken' && (<img
            style={ { width: '50px', padding: '5px' } }
            src={ chicken }
            name={ meal.strCategory }
            alt={ meal.setCategory }
          />)}
          {meal.strCategory === 'Breakfast' && (<img
            style={ { width: '50px', padding: '6px' } }
            src={ breakfast }
            name={ meal.strCategory }
            alt={ meal.setCategory }
          />)}
          {meal.strCategory === 'Dessert' && (<img
            style={ { width: '50px', padding: '6px' } }
            src={ dessert }
            name={ meal.strCategory }
            alt={ meal.setCategory }
          />)}
        </button>
      ))}
        {title === 'Drinks'
              && filterDrinks.slice(0, cinco).map((drink) => (
                <button
                  className="category-button"
                  type="button"
                  // style={ { border: '2px solid rgb(83, 38, 22)', borderRadius: '100px' } }
                  name={ drink.strCategory }
                  key={ drink.strCategory }
                  data-testid={ `${drink.strCategory}-category-filter` }
                  onClick={ ({ target }) => setCategory(target
                    .name === category ? '' : target.name) }
                >
                  {drink.strCategory === 'Ordinary Drink' && (<img
                    style={ { width: '50px', padding: '5px' } }
                    name={ drink.strCategory }
                    src={ ordinary }
                    alt={ drink.setCategory }
                  />)}
                  {drink.strCategory === 'Cocktail' && (<img
                    style={ { width: '50px', padding: '5px' } }
                    name={ drink.strCategory }
                    src={ cocktail }
                    alt={ drink.setCategory }
                  />)}
                  {drink.strCategory === 'Shake' && (<img
                    style={ { width: '50px' } }
                    src={ shake }
                    name={ drink.strCategory }
                    alt={ drink.setCategory }
                  />)}
                  {drink.strCategory === 'Other / Unknown' && (<img
                    style={ { width: '50px', padding: '8px' } }
                    src={ other }
                    name={ drink.strCategory }
                    alt={ drink.setCategory }
                  />)}
                  {drink.strCategory === 'Cocoa' && (<img
                    style={ { width: '50px', padding: '5px' } }
                    src={ hotChocolate }
                    name={ drink.strCategory }
                    alt={ drink.setCategory }
                  />)}
                </button>
              ))}
      </div>
      <div className="result-total">
        { title === 'Meals'
          ? !isLoading && resultSearch?.length > 0 && resultSearch.slice(0, doze)
            .map((result, index) => (
              <div
                className="recipes-container"
                data-testid={ `${index}-recipe-card` }
                key={ index }
              >
                <Link
                  to={ `/meals/${result.idMeal}` }
                >
                  <div className="result-card">
                    <p data-testid={ `${index}-card-name` }>{ result.strMeal }</p>
                    <img
                      style={ { width: '110px' } }
                      data-testid={ `${index}-card-img` }
                      src={ result.strMealThumb }
                      alt={ result.strMeal }
                    />
                    <p>Ver Receita</p>
                  </div>
                </Link>
              </div>
            ))
          : !isLoading && resultSearch?.length > 0 && resultSearch.slice(0, doze)
            .map((result, index) => (
            // .filter((drink) => drink.strCategory === category)
              <div
                className="recipes-container"
                data-testid={ `${index}-recipe-card` }
                key={ index }
              >
                <Link
                  to={ `/drinks/${result.idDrink}` }
                // onClick={ setIdRecipe(result.idDrink) }
                >
                  <div className="result-card">
                    <p data-testid={ `${index}-card-name` }>{ result.strDrink }</p>
                    <img
                      style={ { width: '110px' } }
                      data-testid={ `${index}-card-img` }
                      src={ result.strDrinkThumb }
                      alt={ result.strDrink }
                    />
                    <p>Ver Receita</p>
                  </div>
                </Link>

              </div>
            ))}
      </div>
    </div>
  );
}

Recipes.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Recipes;
