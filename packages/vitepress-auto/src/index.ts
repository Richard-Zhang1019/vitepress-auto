import fg from 'fast-glob'

type FileNameFormatType = 'default' | 'number-name' | 'name' | 'capitalize'

/**
 * vitepress-auto
 * @description 自动化生成vitepress的sidebar目录
 * @param {Array} path 传入想要自动生成sidebar目录名
 * @param {Boolean} isExcludeIndex 是否生成sidebar目录时排除index.md文件
 * @param {String} fileNameFormat 文件名格式
 * @returns 返回sidebar目录
 */
function vitepressAuto(
  path: string[],
  isExcludeIndex = true,
  fileNameFormat: FileNameFormatType = 'default'
) {
  const result = {}
  path.forEach(item => {
    result[`/${item}`] = [{ items: getSidebar(item) }]
  })
  console.log(result)
  return result

  function getSidebar(folder: string) {
    const arr: { text: string; link: string }[] = []
    const files: string[] = fg.sync(`${folder}/*.md`, {
      onlyFiles: true
    })
    for (const item of files) {
      const name = item.split('/')[1].split('.')[0]
      const link = `/${item.split('.')[0]}`
      if (name === 'index' && isExcludeIndex) continue
      arr.push({
        text: name,
        link
      })
    }

    return arr
  }
}

export { vitepressAuto }
