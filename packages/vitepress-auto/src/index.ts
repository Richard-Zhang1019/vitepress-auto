import fg from 'fast-glob'

function vitepressAuto() {
  const files = fg.sync(`blogs/*.md`, {
    onlyFiles: true
  })
  console.log(files)
}

export { vitepressAuto }
