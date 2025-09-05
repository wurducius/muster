const cx = (...styles) => styles.filter(Boolean).join(" ")

const renderClass = (className) => {
  if (Array.isArray(className)) {
    return cx(...className)
  } else {
    return className
  }
}

const renderAttributes = (attributes) =>
  attributes !== undefined
    ? ` ${Object.keys(attributes)
        .map(
          (attributeName) =>
            `${attributeName}="${attributeName === "class" ? renderClass(attributes[attributeName]) : attributes[attributeName]}"`,
        )
        .join(" ")}`
    : ""

const renderChildren = (children) => {
  if (!children) {
    return ""
  } else if (Array.isArray(children)) {
    return children.filter(Boolean).join(" ")
  } else {
    return children
  }
}

const tag = (tagName, attributes, children) =>
  `<${tagName}${renderAttributes(attributes)}>${renderChildren(children)}</${tagName}>`

const t = (tagName) => (attributes, children) => tag(tagName, attributes, children)

const div = t("div")
const span = t("span")

const h1 = t("h1")
const h2 = t("h2")
const h3 = t("h3")
const h4 = t("h4")
const h5 = t("h5")
const h6 = t("h6")
const a = t("a")

const button = t("button")
const input = t("input")
const select = t("select")
const option = t("option")
const textarea = t("textarea")

const img = t("img")

const htmlTag = t("html")
const headTag = t("head")
const bodyTag = t("body")
const scriptTag = t("script")
const noscriptTag = t("noscript")
const metaTag = t("meta")
const linkTag = t("link")
const titleTag = t("title")
const styleTag = t("style")
const templateTag = t("template")

module.exports = {
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  button,
  input,
  select,
  option,
  textarea,
  img,
  htmlTag,
  headTag,
  bodyTag,
  scriptTag,
  metaTag,
  noscriptTag,
  linkTag,
  titleTag,
  styleTag,
  templateTag,
}
