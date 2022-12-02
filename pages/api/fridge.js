// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    fridge: [
      {
        id: 100,
        name: "ice",
        category: "general",
        qty: 30,
      },
      {
        id: 101,
        name: "egg",
        category: "protein",
        qty: 12,
      },
      {
        id: 102,
        name: "milk",
        category: "dairy",
        qty: 2,
      },
      {
        id: 103,
        name: "butter",
        category: "dairy",
        qty: 1,
      },
    ],
  });
}
