const {
  metaTag,
  linkTag,
  titleTag,
  styleTag,
  scriptTag,
  noscriptTag,
  bodyTag,
  headTag,
  htmlTag,
} = require("./ui/simple")

const DOCTYPE_HTML = "<!DOCTYPE html>"

const getImgUrlExt = (imgUrl) => {
  const split = imgUrl.split(".")
  return split[split.length - 1]
}

const compileHead = (head, style) => [
  metaTag({ charset: "UTF-8" }),
  linkTag({ href: head.icon, rel: "icon" }),
  linkTag({ href: head.manifest ?? "./manifest.json", rel: "manifest" }),
  metaTag({ content: "width=device-width,initial-scale=1.0", name: "viewport" }),
  metaTag({ content: head.description, name: "description" }),
  metaTag({ content: head.description, property: "og:title" }),
  metaTag({ content: `image/${getImgUrlExt(head.icon)}`, property: "og:type" }),
  metaTag({ content: head.url, property: "og:url" }),
  metaTag({ content: head.icon, property: "og:image" }),
  metaTag({ content: head.iconAlt ?? head.description, property: "og:image:alt" }),
  linkTag({ href: head.icon, rel: "apple-touch-icon" }),
  metaTag({ content: head.theme, name: "theme-color" }),
  titleTag(undefined, head.title),
  styleTag(undefined, style),
]

const compileHtml = (style, script, content, head) =>
  DOCTYPE_HTML +
  htmlTag({ lang: "en" }, [
    headTag(undefined, compileHead(head, style)),
    bodyTag(undefined, [
      ...(Array.isArray(content) ? content : [content]),
      scriptTag(undefined, script),
      noscriptTag(undefined, "You need to enable JavaScript to run this app."),
    ]),
  ])

module.exports = compileHtml
