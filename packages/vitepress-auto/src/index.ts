import fg from 'fast-glob'
import fs from 'node:fs'
import readline from 'node:readline'

type FileNameFormatType = 'default' | 'number-name' | 'name'

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
  path.forEach(async item => {
    result[`/${item}`] = [{ items: await getSidebar(item, isExcludeIndex) }]
  })
  return result
}

async function getSidebar(folder: string, isExcludeIndex) {
  const arr: { text: string | undefined; link: string }[] = []
  const files: string[] = fg.sync(`${folder}/*.md`, {
    onlyFiles: true
  })
  for (let i = 0; i < files.length; i++) {
    const link = `/${files[i].split('.')[0]}`

    const firstLine = (await getFirstLine(files[i])) as string
    // 以空格分割第一行内容
    const removeChar = firstLine.split(' ')
    // 去掉第一行内容前的 '#' 号
    removeChar.shift()
    const name = removeChar.join('')
    if (name === 'index' && isExcludeIndex) continue
    arr.push({
      text: name,
      link
    })
  }

  return arr
}

// 获取markdown文件第一行内容
async function getFirstLine(pathToFile) {
  const readable = fs.createReadStream(pathToFile)
  const reader = readline.createInterface({ input: readable })
  const line = await new Promise(resolve => {
    reader.on('line', line => {
      reader.close()
      resolve(line)
    })
  })
  readable.close()
  return line
}

export { vitepressAuto }
