/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if(remainingTime == 0){
    return 'Lasagna is done.'
  }
  else if(remainingTime > 0){
    return 'Not done, please wait.'    
  }
  else{
    return 'You forgot to set the timer.'
  }
}

export function preparationTime(layers, time) {
  if(time == null){
    return layers.length * 2
  }
  else{
    return layers.length * time
  }
}

export function quantities(layers) {
  const quantities = {
    noodles: 0,
    sauce: 0
  }
  
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] == 'noodles') {
      quantities.noodles += 50
    }
    if (layers[i] == 'sauce') {
      quantities.sauce += 0.2
    }
  }

  return quantities
}

export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];

  myList.push(secretIngredient)
}

export function scaleRecipe(recipe, portions) {
  let scaledRecipe = { ...recipe };
  
  for (const ingrediente in scaledRecipe) {
    scaledRecipe[ingrediente] =
      (scaledRecipe[ingrediente] / 2) * portions;
  }
  
  return scaledRecipe
}