const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const allCategories = await Category.findAll({
      // including its associated Products
      include: [{ model: Product }],
    });
    res.json(allCategories);
  } catch (error) {
    res.status(500).json(error);
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
      res.status(404).json({ message: "No category found" });
    }
    res.json(singleCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const createCategory = await Category.create(req.body);
    if (!createCategory) {
      res.status(404).json({ message: "No category found" });
    }
    res.json(createCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updateCategory) {
      res.status(404).json({ message: "No category found" });
    }
    res.json(updateCategory);
  } catch (error) {
    res.status(500).json(error);
  }
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
    res.status(500).json(error);
  }
});

module.exports = router;
