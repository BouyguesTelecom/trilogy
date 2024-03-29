export const getChildrenClassNames = (element: HTMLElement): string => {
  const listItems = element.children

  const childClasses: Set<string> = new Set()
  if (listItems) {
    const listArray = [...listItems]
    listArray.forEach((child) => {
      child.className.split(' ').forEach(childClasses.add, childClasses)
    })
  }
  return Array.from(childClasses).join(' ')
}
