let breakfastMeals = ['eggs', 'cereals', 'a banana', 'an apple', 'bacon and eggs', 'cereals with milk', 'a fruit bowl', 'bread and butter', 'bread and nutella'];
let lunchMeals = ['a cheese sandwich', 'pasta', 'eggs', 'a chicken sandwich', 'ramen', 'nothing'];
let dinnerMeals = ['thai beef', 'sushi', 'pasta meatballs', 'a fish soup', 'salmon', 'korean BBQ', 'a hamburger', 'a hot dog', 'fries'];

function randomMealsForTheDay() {
    let breakfastRandom = breakfastMeals[Math.floor(Math.random() * (breakfastMeals.length + 1))]
    let lunchRandom = lunchMeals[Math.floor(Math.random() * (lunchMeals.length + 1))]
    let dinnerRandom = dinnerMeals[Math.floor(Math.random() * (dinnerMeals.length + 1))]
    return `Here's what you should eat today! For breakfast I suggest you eat ${breakfastRandom}. For lunch you should treat yourself with ${lunchRandom}. And for dinner why not get ${dinnerRandom}!`;
}

console.log(randomMealsForTheDay());
