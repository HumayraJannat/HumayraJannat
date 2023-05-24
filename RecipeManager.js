class Recipe {
  constructor(title, ingredients, instructions) {
    this.title = title;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log("Ingredients:");
    for (let ingredient of this.ingredients) {
      console.log("- " + ingredient);
    }
    console.log("Instructions:");
    for (let i = 0; i < this.instructions.length; i++) {
      console.log(`${i + 1}. ${this.instructions[i]}`);
    }
    console.log();
  }
}

class RecipeManager {
  constructor() {
    this.recipes = [];
  }

  addRecipe(recipe) {
    this.recipes.push(recipe);
  }

  removeRecipe(recipe) {
    const index = this.recipes.indexOf(recipe);
    if (index !== -1) {
      this.recipes.splice(index, 1);
    }
  }

  displayRecipes() {
    console.log("All Recipes:");
    for (let recipe of this.recipes) {
      recipe.displayDetails();
    }
  }
}

// Example usage
const recipeManager = new RecipeManager();

const recipe1 = new Recipe(
  "Pasta Carbonara",
  ["Spaghetti", "Bacon", "Eggs", "Parmesan cheese", "Black pepper"],
  [
    "Cook the spaghetti according to package instructions.",
    "Cook the bacon until crispy and crumble it.",
    "In a bowl, whisk together eggs, grated Parmesan cheese, and black pepper.",
    "Drain the cooked pasta and add it to the bacon.",
    "Pour the egg mixture over the pasta and toss well to coat.",
    "Serve hot with extra Parmesan cheese and black pepper on top."
  ]
);
recipeManager.addRecipe(recipe1);

const recipe2 = new Recipe(
  "Chicken Stir-Fry",
  ["Chicken breast", "Bell peppers", "Broccoli", "Soy sauce", "Garlic", "Ginger"],
  [
    "Slice the chicken breast into thin strips.",
    "Heat oil in a pan and sauté garlic and ginger until fragrant.",
    "Add the chicken strips and cook until they are no longer pink.",
    "Add the bell peppers and broccoli, and stir-fry for a few minutes.",
    "Season with soy sauce and continue cooking until the vegetables are crisp-tender.",
    "Serve hot over steamed rice."
  ]
);
recipeManager.addRecipe(recipe2);

console.log("All Recipes:");
recipeManager.displayRecipes();

console.log("Removing recipe: " + recipe1.title);
recipeManager.removeRecipe(recipe1);

console.log("Updated Recipe List:");
recipeManager.displayRecipes();
