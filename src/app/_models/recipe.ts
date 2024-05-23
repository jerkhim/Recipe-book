export class Recipe {
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];

  constructor(name: string, description: string, ingredients: string[], instructions: string[]) {
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}
