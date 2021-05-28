const { default: axios } = require("axios")
const rx = /<!--Docsium::START-->[\s\S]*<!--Docsium::END-->/gi;
const url = process.env.WK_URL
const wk_key = process.env.WAKATIME_API_KEY
async function callWakaTime() {

    const encKey = Buffer.from(wk_key).toString('base64')
    const response = (await axios.get(url, {
        headers: {
            "Authorization": `Basic ${encKey}`
        }
    })).data

    console.log(response);
    try {
        const lang_data = response['data']['languages']
        return createStatusBar(lang_data)
    }
    catch (error) {
        console.log(error);
        console.log("Please Add your WakaTime API Key to the Repository Secrets")
    }


}

callWakaTime()

module.exports = callWakaTime

const theme = require('./lib/provider.theme');
const { readFileSync, writeFileSync } = require("fs");

function createStatusBar(data) {
    const emmetString = []
    for (let i = 0; i < data.length; i++) {
        let new_theme = theme.Theme.change(data[i].name, color(data[i].name), data[i].percent, data[i].text, i)
        emmetString.push(new_theme)
    }
    const svgFile = readFileSync(__dirname + '/lib/template.svg').toString('utf-8')
    const fileMOS = svgFile.replace(rx, emmetString.toString())
    writeFileSync(__dirname + '/lib/template.svg', fileMOS)
}


function color(name) {
    try {
        const lcolor = require('./colors').LColors[name].color.replace('#', '')
        return lcolor;

    } catch (error) {
        return 'ffffff'
    }
}
