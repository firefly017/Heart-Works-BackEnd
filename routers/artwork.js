const { Router } = require("express");
const Artwork = require("../models").artwork;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const artworks = await Artwork.findAll();
    res.send(artworks);
  } catch (e) {
    next(e);
  }
}); // /artworks/ - GET

module.exports = router;
