import {createStore} from 'redux';

const initialState = {
   recipeName: '',
   recipeCategory: '',
   authorFirst: '',
   authorLast: '',
   ingredients: [],
   instructions: [],
   recipes: []
};

export const UPDATE_RECIPE_NAME = "UPDATE_RECIPE_NAME";
export const UPDATE_RECIPE_CATEGORY = "UPDATE_RECIPE_CATEGORY";
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST";
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST";
export const UPDATE_INGREDIENT_LIST = "UPDATE_INGREDIENT_LIST";
export const ADD_INSTRUCTIONS = "ADD_INSTRUCTIONS";
export const ADD_RECIPE = "ADD_RECIPE";

function reducer(state = initialState, action) {
   const {type, payload} = action;
   switch (type) {
      case UPDATE_RECIPE_NAME:
         return {
            ...state,
            recipeName: payload
         }
      case UPDATE_RECIPE_CATEGORY:
         return {
            ...state,
            recipeCategory: payload
         }
      case UPDATE_AUTHOR_FIRST:
         return {
            ...state,
            authorFirst: payload
         }
      case UPDATE_AUTHOR_LAST:
         return {
            ...state,
            authorLast: payload
         }
      case UPDATE_INGREDIENT_LIST:
         const newIngredients = [...state.ingredients, payload];
         return {
            ...state,
            ingredients: newIngredients
         }
      case ADD_INSTRUCTIONS:
         const newInstructions = [...state.instructions, payload];
         return {
            ...state,
            instructions: newInstructions
         }
      /* Now we'll add a case to our reducer. This case will be quite a bit different from what we've done so far, because it doesn't use a payload. 
      Payloads are really useful when we need to transfer data from a component to Redux, but in this circumstance all the data is already being stored in Redux. 
      So we'll pull all the values we've been storing so far off of state and build a recipe object with it. 
      Then we we'll want to copy our list of recipes and add our a new recipe to it. Then of course we need to copy the rest of state in an immutable way. */
      case ADD_RECIPE:
         const {name, category, authorFirst, authorLast, ingredients, instructions} = state;
         const recipe = {name, category, authorFirst, authorLast, ingredients, instructions};
         const newRecipes = [...state.recipes, recipe];
         return {
            ...state,
            recipes: newRecipes
         }
      default: return state;
   }
}

export default createStore(reducer);