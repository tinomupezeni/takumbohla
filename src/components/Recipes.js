import potatoes from "../assets/roastedpotatoes.jpg";
import frenchfries from "../assets/frenchfries.jpg";
import frenchtoast from "../assets/frenchtoast1.jpg";

export const Recipes = [
  {
    id: 1,
    hname: "roasted potatoes",
    steps: [
      "put the potato cubes into a bowl",
      "add oil and toss to ensure each cube gets coated in oil",
      "add salt, paprika and potato mate, mix well ensuring even distribution of the seasoning onto each cube",
      "roast in oven at 180 degrees celsius for 40 minutes, or until golden brown.Enjoy!!",
    ],
    imagey: potatoes,
  },
  {
    id: 2,
    hname: "cinnamon french toast",
    steps: [
      "beat eggs is a bowl, and add milk, sugar and a teaspoon of cinnamon",
      "whisk the mixture until well blend",
      "dip each bread slice in the mixture, turning to evenly coat on both sides",
      "cook bread slices on lightly greased nonstick griddle on medium heat, until browned on both sides",
    ],
    imagey: frenchtoast,
  },
  {
    id: 3,
    hname: "roasted rosemary fries",
    steps: [
      "preheat oven to 425 degrees celcius",
      "peel and cut your potatoes into slice sizes of your choice",
      "toss into a pan together with oil, rosemary herb, salt and a pinch of black pepper",
      "roast at 425 deg for 12 to 15 minutes, shaking the pan often until browned and tender",
    ],
    imagey: frenchfries,
  },
];

export default Recipes;
