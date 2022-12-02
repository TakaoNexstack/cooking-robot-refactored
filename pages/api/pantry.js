// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    pantry: [
      {
        id: 200,
        name: "sugar",
        category: "general",
        qty: 5,
      },
      {
        id: 201,
        name: "vanilla extract",
        category: "general",
        qty: 2,
      },
      {
        id: 202,
        name: "watermelon",
        category: "fruit",
        qty: 7,
      },
      {
        id: 203,
        name: "banana",
        category: "fruit",
        qty: 3,
      },
      {
        id: 204,
        name: "pumpkin",
        category: "vegetable",
        qty: 1,
      },
      {
        id: 205,
        name: "watercress",
        category: "vegetable",
        qty: 15,
      },
      {
        id: 206,
        name: "salt",
        category: "general",
        qty: 10,
      },
      {
        id: 207,
        name: "pepper",
        category: "general",
        qty: 9,
      },
    ],
  });
}
