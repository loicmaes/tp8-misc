const fs = require('fs')

/**
 * @param { string } path
 * @param { boolean } subFiles
 */

function loadFiles(path, subFiles) {
    /**
     * [dir] commands
     * | [dir] categories
     * | [dir] developer
     *   | ping.js
     *   | status.js
     * | [dir] movies
     *   | [dir] display
     *     | showList.js
     *     | showMovie.js
     *   | [dir] manage
     *     | addMovie.js
     *     | removeMovie.js
     * | help.js
     */

    const files = []

    fs.readdirSync(path).forEach(file => {
        if (subFiles && isDirectory(`${path}/${file}`)) loadFiles(`${path}/${file}/`, subFiles).forEach(f => files.push(`${file}/${f}`))
        else if (isJSFile(file)) files.push(file)
    })

    return files
}

/**
 * @param { string } path
 */
function isDirectory(path) {
    return fs.lstatSync(path).isDirectory()
}

/**
 * @param { string } path
 * @returns { boolean }
 */
function isJSFile(path) {
    return path.endsWith('.js')
}

module.exports = {
    loadFiles,
    isDirectory,
    isJSFile
}
