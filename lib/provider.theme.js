
const SVGTHEMEELEMENT = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="210mm" height="7mm" viewBox="0 0 210 7" version="1.1" id="svg8" inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)" sodipodi:docname="bat.svg">
   <defs id="defs2" />
   <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="0.52285908" inkscape:cx="139.86297" inkscape:cy="95.11158" inkscape:document-units="mm" inkscape:current-layer="g827" showgrid="false" inkscape:window-width="1920" inkscape:window-height="1024" inkscape:window-x="0" inkscape:window-y="22" inkscape:window-maximized="1" />
   <metadata id="metadata5">
      <rdf:RDF>
         <cc:Work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title />
         </cc:Work>
      </rdf:RDF>
   </metadata>
   <!--Docsium::START-->  <g
    inkscape:label="Layer 1"
    inkscape:groupmode="layer"
    id="layer1"
    transform="translate(0,-290)">
   <g
      id="g827"
      width="135.68559"
      >
     <rect
        ry="1.5"
        rx="1.5"
        y="292"
        x="49.820366"
        height="3"
        width="100"
        id="rect817"
        style="fill:#acacac;fill-opacity:1;stroke:none;stroke-width:1.39360845;stroke-miterlimit:4;stroke-dasharray:788.05773002;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke" />
     <rect
        ry="1.5"
        rx="1.5"
        y="292"
        x="49.820366"
        height="3"
        width="29"
        max-width=""
        id="rect817-3"
        style="fill:#3f77c5;fill-opacity:1;stroke:none;stroke-width:1.1269331;stroke-miterlimit:4;stroke-dasharray:637.25816214;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke" />
     <text
        id="text821"
        y="295.22891"
        x="7.5904775"
        style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:'Courier New', Courier, monospace;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
        xml:space="preserve"><tspan
          style="font-size:5.64444447px;stroke-width:0.26458332;fill:white"
          y="295.22891"
          x="7.5904775"
          id="tspan819"
          sodipodi:role="line">Objective-C</tspan></text>
          <text
        id="text821"
        y="295.22891"
        x="7.5904775"
        style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:'Courier New', Courier, monospace;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
        xml:space="preserve"><tspan
          style="font-size:4px;stroke-width:0.26458332;color:white;fill:white"
          y="295.5"
          x="160"
          id="tspan819"
          sodipodi:role="line">undefined</tspan></text>
   </g>
 </g>  <!--Docsium::END-->
</svg>`



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
    style="fill:#e0e0e0;stroke-width:0.91341817" />
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
    style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
    x="4.410491"
    y="${-50.209976+index*25}"
    id="text824"><tspan
      id="tspan822"
      x="4.410491"
      y="${-50.209976+index*25}"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:17.33333397px;font-family:'Courier New', Courier, monospace;-inkscape-font-specification:'Courier New, Courier, monospace'">${title}</tspan></text>
 <text
    xml:space="preserve"
    style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
    x="520.1073"
    y="${-49.385414+index*25}"
    id="text824-3"><tspan
      id="tspan822-6"
      x="520.1073"
      y="${-49.385414+index*25}"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:13.33333302px;font-family:'Courier New', Courier, monospace;-inkscape-font-specification:'Courier New, Courier, monospace'">${time}</tspan></text>\n${END_COMMENT}`
}

module.exports.Theme = {
   change: changeTheme,
   latString: SVGTHEMEELEMENT
}