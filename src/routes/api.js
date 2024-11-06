import express from "express";
// import Salutation from "../models/salutation.js";
const router = express.Router();

router.get("/salutations", async (req, res) => {
    try {
        // let salutations = await Salutation.find();
        res.send(JSON.stringify('salutations'));
    } catch (err) {
        res.send(err);
    }
});

export default router;
