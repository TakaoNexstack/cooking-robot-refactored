// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    recipes: [
      {
        id: 300,
        name: "Egg Pudding",
        ingredients: {
          milk: 2,
          egg: 2,
          sugar: 3,
        },
      },
      {
        id: 301,
        name: "Vanilla Pudding",
        ingredients: {
          milk: 2,
          egg: 2,
          sugar: 2,
          "vanilla extract": 1,
        },
      },
      {
        id: 302,
        name: "Watermelon Juice",
        ingredients: {
          watermelon: 1,
          sugar: 2,
          salt: 1,
          ice: 3,
        },
      },
      {
        id: 303,
        name: "Banana Milkshake",
        ingredients: {
          banana: 2,
          sugar: 2,
          ice: 3,
          "ice-cream": 1,
        },
      },
      {
        id: 304,
        name: "Fried Watercress",
        ingredients: {
          watercress: 3,
          salt: 2,
          oil: 1,
        },
      },
      {
        id: 305,
        name: "Creamy Pumpkin Soup",
        ingredients: {
          pumpkin: 1,
          salt: 2,
          milk: 2,
          butter: 2,
        },
      },
    ],
  });
}
