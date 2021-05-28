
function changeTheme(title, color, percentage, time, index) {
   percentage = percentage > 100 ? 100 : percentage < 1 ? 0 : percentage
   const START_COMMENT = '<!--Docsium::START-->'
   const END_COMMENT = '<!--Docsium::END-->'
   return `${START_COMMENT}\n<rect
    x="131"
    width="377.95276"
    height="12"
    rx="5.0059967"
    id="rect2"
    y="${-61.023621 + index * 25}"
    style="fill:#283446;stroke-width:0.91341817" />
 <rect
    x="131"
    width="${377.95276 * percentage / 100}"
    height="12"
    rx="6"
    id="rect4"
    y="${-61.023621 + index * 25}"
    style="fill:#${color}" />
 <text
    xml:space="preserve"
    style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none"
    x="4.410491"
    y="${-50.209976 + index * 25}"
    id="text824"><tspan
      id="tspan822"
      x="4.410491"
      y="${-50.209976 + index * 25}"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:17.33333397px;font-family:'Courier New', Courier, monospace;-inkscape-font-specification:'Courier New, Courier, monospace'">${title}</tspan></text>
 <text
    xml:space="preserve"
    style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none"
    x="520.1073"
    y="${-49.385414 + index * 25}"
    id="text824-3"><tspan
      id="tspan822-6"
      x="520.1073"
      y="${-49.385414 + index * 25}"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:13.33333302px;font-family:'Courier New', Courier, monospace;-inkscape-font-specification:'Courier New, Courier, monospace'">${time}</tspan></text>\n${END_COMMENT}`
}

module.exports.Theme = {
   change: changeTheme,
}
