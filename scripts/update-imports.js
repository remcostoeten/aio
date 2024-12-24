import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

const SOURCE_PATH = '"src"'
const TARGET_PATH = '""@/'

async function* getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* getFiles(path)
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      yield path
    }
  }
}

async function updateImports() {
  try {
    for await (const filePath of getFiles('src')) {
      const content = await readFile(filePath, 'utf-8')
      
      // Check if file contains the import we want to change
      if (content.includes(SOURCE_PATH)) {
        const updatedContent = content.replace(
          new RegExp(`from ["']${SOURCE_PATH}["']`, 'g'),
          `from "${TARGET_PATH}"`
        )
        
        await writeFile(filePath, updatedContent, 'utf-8')
        console.log(`Updated imports in ${filePath}`)
      }
    }
    console.log('Import paths updated successfully!')
  } catch (error) {
    console.error('Error updating imports:', error)
  }
}

updateImports()