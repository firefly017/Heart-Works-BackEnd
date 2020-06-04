const { Router } = require("express");
const Artwork = require("../models").artwork;
const bid = require("../models").bid;
const user = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const artworks = await Artwork.findAll({
      include: { model: bid, attributes: ["amount"] },
    });
    const users = await user.findAll();
    console.log(users);
    res.send(artworks);
  } catch (e) {
    next(e);
  }
}); // /artworks/ - GET

router.get("/:id/", async (req, res, next) => {
  try {
    console.log(req.params.id + "from req");
    const artWork = await Artwork.findByPk(req.params.id);
    res.send(artWork);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
