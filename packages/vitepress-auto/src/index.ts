import fg from 'fast-glob'

/**
 * vitepress-auto
 * @description 自动化生成vitepress的sidebar目录
 * @param path 传入想要自动生成sidebar目录名
 * @param isExcludeIndex 是否生成sidebar目录时排除index.md文件
 */
function vitepressAuto(path: string[], isExcludeIndex = true) {
  const result = {}
  path.forEach(item => {
    result[`/${item}`] = [{ items: getSidebar(item) }]
  })
  console.log(result)
  return result
}

function getSidebar(folder: string) {
  const arr: { text: string; link: string }[] = []
  const files: string[] = fg.sync(`${folder}/*.md`, {
    onlyFiles: true
  })
  files.forEach(item => {
    const name = item.split('/')[1].split('.')[0]
    const link = `/${item.split('.')[0]}`
    arr.push({
      text: name,
      link
    })
  })

  return arr
}

export { vitepressAuto }
