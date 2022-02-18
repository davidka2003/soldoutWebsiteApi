const { Router } = require("express");
const { readFileSync } = require("fs");
const path = require("path");
require("../scripts/getSuccesses")
const router = Router()
const PATH_TO_DB = path.join(__dirname, "../../db/database.json");

router.get("/successes", (req, res, next) => {
    try {
        // const { limit, anchor } = req.query
        // console.log(req)
        // console.log(~"s")
        // if (~~limit != NaN && ~~anchor != NaN) {
        return res.status(200).json({
            success: true,
            data: JSON.parse(readFileSync(PATH_TO_DB)).slice(0, 99)
        })
        // }
        // else throw "invalid params"
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        }), next()
    }
})
module.exports = router