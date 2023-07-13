const utils = {}

utils.extractFileNames = (files) => {
  return files?.files ?? []
}

utils.extractFileData = (fileName, file) => {
  const splittedFile = file?.split('\n') ?? []
  const filteredAndMapped = splittedFile
    .filter(line => line !== 'file,text,number,hex') // Remove header
    .map(line => line?.split(',') ?? []) // Split by comma
    .filter(line => line.length === 4) // Remove lines with missing data
    .map(line => { // Map to object
      return {
        text: line[1],
        number: line[2],
        hex: line[3]
      }
    })
  return {
    file: fileName,
    lines: filteredAndMapped
  }
}

module.exports = utils
