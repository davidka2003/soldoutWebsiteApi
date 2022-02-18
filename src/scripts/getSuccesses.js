const { Client, Intents } = require("discord.js");
const { writeFileSync, readFileSync } = require("fs");
const cli = require("nodemon/lib/cli");
// require("../../db/database.json")
const path = require("path");
const PATH_TO_DB = path.join(__dirname, "../../db/database.json");
require("dotenv").config();
const client = new Client({
    intents: [
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILDS]
})
client.login(process.env.BOTTOKEN).then(() => console.log("discord bot successfully logged in"))
client.on("message", (message) => {
    // id is last part of link
    try {
        const currentDb = JSON.parse(readFileSync(PATH_TO_DB))
        switch (message.channel.id) {
            case "799348201161228308":
                // successnft
                console.log("nft")
                return currentDb.unshift(parseMessage(message, "nft")),
                    writeFileSync(PATH_TO_DB, JSON.stringify(currentDb, null, 2)),
                    refreshDB(currentDb, PATH_TO_DB)
            case "938860820559978546":
                // successwl
                console.log("wl")
                return currentDb.unshift(parseMessage(message)),
                    writeFileSync(PATH_TO_DB, JSON.stringify(currentDb, null, 2)),
                    refreshDB(currentDb, PATH_TO_DB)
            case "796517283845111838":
                // other
                console.log("other")
                return currentDb.unshift(parseMessage(message)),
                    writeFileSync(PATH_TO_DB, JSON.stringify(currentDb, null, 2)),
                    refreshDB(currentDb, PATH_TO_DB)
            // case "943203443236020244":
            //     // other
            //     console.log("test")
            //     return currentDb.unshift(parseMessage(message)),
            //         writeFileSync(PATH_TO_DB, JSON.stringify(currentDb, null, 2)),
            //         refreshDB(currentDb, PATH_TO_DB)


            default:
                return
        }

    } catch (error) {
        console.log(error)
    }
})

const parseMessage = (message) => {
    const attachment = [...message.attachments.entries()].map(attachment => attachment[1].attachment)[0]
    const nickname = `${message.author.username}#${message.author.discriminator}`
    const timestamp = message.createdTimestamp
    if (!attachment) throw "no attachment"
    return {
        // channel: message.channel.id,
        nickname,
        timestamp,
        attachment,
        // type
    }
}
const refreshDB = (db, pathToDb) => {
    db.length > 99 && db.pop(), writeFileSync(pathToDb, JSON.stringify(db, null, 2))
}
const initDb = () => {
    try {
        JSON.parse(readFileSync(PATH_TO_DB))
    } catch (error) {
        writeFileSync(PATH_TO_DB, "[]")
    }
}
initDb()