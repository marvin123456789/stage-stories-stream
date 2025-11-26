require('dotenv').config()
const Mux = require("@mux/mux-node")


const run = async () => {

    const stream = await mux.video.liveStreams.create({
        playback_policy: ['public'],
        new_asset_settings: {playback_policy: ['public']}
    })
    console.log(stream)
}

run()