const { Router } = require("express");
const Artwork = require("../models").artwork;
const bid = require("../models").bid;
const user = require("../models").user;
const auth = require("../auth/middleware")

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const artworks = await Artwork.findAll({
      include: { model: bid, attributes: ["id", "amount", "email"] },
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

router.patch("/:id/",async (req, res, next) => {
  try {
    console.log(req.body);
    const artWork = await Artwork.findByPk(req.body.id);
    const { title, imageUrl, hearts, minimumBid } = req.body;
    console.log(imageUrl);
    artWork.update({
      title,
      imageUrl,
      hearts,
      minimumBid,
    });
    res.send(artWork);
  } catch (e) {
    next(e);
  }
});
router.post("/bid/", auth, async (req, res, next) => {
  try {
    //req.user == does not exists
    //with auth req.user does exists
     console.log("what is???? ", req.user);
    // const newBid = await bid.create(req.body);
    const allBid = await bid.findAll();
    // console.log("length" + allBid.length);
    const newBid = await bid.create({
      id: allBid.length + 1,
      email: req.body.email,
      amount: req.body.amount,
      artworkId: req.body.artworkId,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: req.user.dataValues.id
    });
    const artworks = await Artwork.findAll({
      include: { model: bid, attributes: ["id", "amount", "email"] },
    });
    const promiseAll = await Promise.all([newBid,artworks])
    //res.send(newBid);
    // const users = await user.findAll();
    const data = promiseAll[1].map(result => result.dataValues)
    res.send(data);
   
  } catch (e) {
    next(e);
  }
});
module.exports = router;
