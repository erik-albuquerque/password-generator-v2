const getUppercases = (str: string) =>
  [...str.matchAll(/[A-Z]/g)].map(({ index, 0: letter }) => ({
    letter,
    position: index
  }))

export { getUppercases }
