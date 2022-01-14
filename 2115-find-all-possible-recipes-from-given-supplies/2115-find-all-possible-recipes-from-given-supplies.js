/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const suppliesSet = new Set(supplies);
    const recipesMap = new Map();
    const recipeIngredientsMap = new Map();
    recipes.forEach((recipe, idx) => recipeIngredientsMap.set(recipe, ingredients[idx]));
    const recipesTried = new Set();
    const result = [];
    for(let i=0; i < recipes.length; i++){
        let recipe = recipes[i];
        let ingredient = ingredients[i];
        if(canMakeRecipe(recipe, recipeIngredientsMap, suppliesSet, recipesMap, recipesTried)){
            result.push(recipe);
        }
    }
    return result;
};

function canMakeRecipe(recipe, ingredientMap, supplies, recipesMap, recipesTried){
    if(recipesMap.has(recipe)) return recipesMap.get(recipe);
    if(recipesTried.has(recipe)) return false;
    recipesTried.add(recipe);
    if(!ingredientMap.has(recipe)) return false;
    
    const ingredient = ingredientMap.get(recipe);
    for(let ing of ingredient){
        if(!supplies.has(ing) && !canMakeRecipe(ing, ingredientMap, supplies, recipesMap, recipesTried)){
            recipesMap.set(recipe, false);
            return false;
        }
    }
    recipesMap.set(recipe, true);
    return true;
}