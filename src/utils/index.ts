function setStyle(element: HTMLElement, style: Partial<CSSStyleDeclaration>) {
  Object.keys(style).forEach((key) => {
    (element.style as Record<string, any>)[key] = (style as Record<string, any>)[key]
  })
}

function createElement(tagName: string, style: Partial<CSSStyleDeclaration> | undefined = undefined) {
  const element = document.createElement(tagName)
  if (style)
    setStyle(element, style)
  return element
}
