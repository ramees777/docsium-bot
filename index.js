const { default: axios } = require("axios")
const rx = /<!--Docsium::START-->[\s\S]*<!--Docsium::END-->/gi;
const url = process.env.INPUT_WK_URL
const wk_key = process.env.INPUT_WAKATIME_API_KEY
const gh_token = process.env.INPUT_GH_TOKEN
const octokit = require('@octokit/rest')
const github = new octokit.Octokit({ auth: gh_token, });

async function callWakaTime() {

    const encKey = Buffer.from(wk_key).toString('base64')
    const response = (await axios.get(url, {
        headers: {
            "Authorization": `Basic ${encKey}`
        }
    })).data

    try {
        const lang_data = response['data']['languages']
        console.log(lang_data)
        const newCollections = createStatusBar(lang_data)
        const content_ur = (await github.repos.getContent({ owner: 'ramees777', repo: 'docsium-bot', path: 'lib/template.svg' }))
        const data = Buffer.from(content_ur.data.content, 'base64').toString('utf-8')
        let new_readme = data.replace(rx, newCollections);
        new_readme = Buffer.from(new_readme, 'utf-8').toString('base64')
        await github.repos.createOrUpdateFileContents({ content: new_readme, owner: 'ramees777', message: 'Updated status', path: 'lib/template.svg', repo: 'docsium-bot', sha: content_ur.data.sha })
    }
    catch (error) {
        console.log(error);
        // console.log("Please Add your WakaTime API Key to the Repository Secrets")
    }


}


callWakaTime()

module.exports = callWakaTime

const theme = require('./lib/provider.theme');
function createStatusBar(data) {
    const emmetString = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].percent >1) {
            let new_theme = theme.Theme.change(data[i].name, color(data[i].name), data[i].percent, data[i].text, i)
            emmetString.push(new_theme)
        }

    }
    return emmetString;
}


function color(name) {
    try {
        const lcolor = require('./colors').LColors[name].color.replace('#', '')
        return lcolor;

    } catch (error) {
        return 'ffffff'
    }
}
