require('dotenv').config()
const Mux = require("@mux/mux-node")

const mux = new Mux({
    tokenId: "e48865f9-7125-4ca8-8e63-3da99a38afa1",
    tokenSecret: "S2E0Pk03C36uCkm99NJcLWzk5oWHyRE4quS9IbAaejOfsZ95DnXU1l1U5moucPez2liZS2TP+Dm"
})

const run = async () => {

    const stream = await mux.video.liveStreams.create({
        playback_policy: ['public'],
        new_asset_settings: {playback_policy: ['public']}
    })
    console.log(stream)
}

run()