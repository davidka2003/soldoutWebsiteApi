const express = require("express")
const discordRouter = require("./src/routes/discordRouter")
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000
app.use("/api", discordRouter)
app.get("*", (req, res) => {
    res.status(400).json({
        success: false
    })
})

app.listen(PORT, async (r) => {
    console.log(`app running on port: ${PORT}`)
})
