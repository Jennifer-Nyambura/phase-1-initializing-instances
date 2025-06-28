// Write your code here

class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.dessert = dessert;
  }
}

// Export classes for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Breakfast, Lunch, Dinner };
}
