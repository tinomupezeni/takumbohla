import stews from '../assets/stews.jpg'
import frying from '../assets/ingr1.jpg'
import braai from '../assets/braai.jpg'
import baked from '../assets/bakedgoods.jpg'
import beans from '../assets/beans.jpg'
import potatoes from '../assets/roastedpotatoes.jpg'
import herbs from '../assets/rosemary1.jpg'
import rice from '../assets/rice.jpg'
import fish from '../assets/fish.jpg'
import marinated from '../assets/ingr1.jpg'
import vagetables from '../assets/vegetables.jpg'
import chillihot from '../assets/chillihot.jpg'
import sprinkling from '../assets/sprinkling.jpg'
import peppers from '../assets/peppers.jpg'
import sauce from '../assets/sauce.jpg'

export const IngredientsDataList = [
  {
    id : 1,
    image : stews,
    heading: "stews",
    list: [
      "mother-in-law",
      "beef stew",
      "masala mix",
      "chicken masala",
      "durban curry",
      "curry raja",
      "portuguese chicken",
      "chisanyama",
      "corriander",
      "italian portjekos",
      "paprika",
      "gravy powder",
    ],
    display: false
  },
  {
    id : 2,
    image : frying,
    heading: "frying",
    list: ["BBQ", "chicken spice", "six gun BBQ", "steak and chop"],
    display : false
  },
  {
    id : 3,
    image : braai,
    heading: "Braai",
    list: ["chisanyama", "braai spice"],
    display : false
  },
  {
    id : 4,
    image : sprinkling,
    heading: "sprinkling",
    list: [
      "chip sprinkle",
      "butter sprinkle",
      "cheese sprinkle",
      "popcorn sprinkle",
      "sour cream and chives",
      "salt and vinegar",
      "chutney",
      "aromat",
    ],
    display : false
  },
  {
    id : 5,
    image : baked,
    heading: "baking",
    list: ["cocoa powder", "nutmeg", "cinammon", "raisins"],
    display : false
  },
  {
    id : 6,
    image : beans,
    heading: "beans",
    list: ["lemon garlic and BBQ", "parsley", "rosemary", "thyme"],
    display : false
  },
  {
    id : 7,
    image : potatoes,
    heading: "potatoes",
    list: [
      "lemon garlic and BBQ",
      "parsley",
      "rosemary",
      "thyme",
      "potato mate",
      "oregano",
    ],
    display : false
  },
  {
    id : 8,
    image : peppers,
    heading: "Peppers",
    list: ["black pepper", "white pepper", "cayenne pepper"],
    display : false
  },
  {
    id : 9,
    image : herbs,
    heading: "herbs",
    list: [
      "lemon garlic and herb",
      "italian seasoning",
      "mixed herd",
      "basil",
      "parsely",
      "rosemary",
      "cloves",
      "thyme",
      "oregano",
      "fenugreek",
    ],
    display : false
  },
  {
    id : 10,
    image : rice,
    heading: "rice",
    list: ["seas rice", "whole rice", "tumeric"],
    display : false
  },
  {
    id : 11,
    image : fish,
    heading: "fish",
    list: ["fish spice", "fish masala"],
    display : false
  },
  {
    id : 12,
    image : chillihot,
    heading: "hot spices",
    list: ["birds eye", "curry hot", "cayenne pepper"],
    display : false
  },
  {
    id : 13,
    image : vagetables,
    heading: "vegetables",
    list: ["garlic powder", "ginger powder"],
    display : false
  },
  {
    id : 14,
    image : sauce,
    heading: "sauces",
    list: [
      "very hot chilli sauce",
      "sweet chilli",
      "worsester sauce",
      "soy sauce",
      "lemon and herb",
      "BBQ",
    ],
    display : false
  },
  {
    id : 15,
    image : marinated,
    heading: "marinating",
    list: ["lemon and herb sauce", "lemon and herb spice", "soy sauce"],
    display : false
  },
];

export default IngredientsDataList;
