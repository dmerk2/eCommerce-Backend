const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const allCategories = await Category.findAll({
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.json(allCategories);
  } catch (error) {
    res.status(500).res.json(error);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const singleCategory = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    if (!singleCategory) {
      res.status(400).json({ message: "No category found" });
    }
    res.json(singleCategory);
  } catch (error) {
    res.status(500).res.json(error);
  }
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deleteCategory);
  } catch (error) {
    res.status(400).res.json(error);
  }
});

module.exports = router;
