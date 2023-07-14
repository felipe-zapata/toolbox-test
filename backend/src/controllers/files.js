const filesModel = require('../models/filesModel')
const utils = require('../utils/utils')
const files = {}

const getFile = async (fileName) => {
  try {
    const file = await filesModel.getFile(fileName)
    if (file?.response?.status === 404 || file?.response?.status === 500) throw new Error(file?.response?.message)
    const parsedFile = utils.extractFileData(fileName, file)
    return parsedFile
  } catch (error) {
    console.log('Error getting file', error) // Not properly handled, what would be the option here?
    return ''
  }
}

files.data = async (req, res) => {
  try {
    const files = await filesModel.getFiles(req, res)
    const fileNames = utils.extractFileNames(files)
    const filesData = await Promise.all(fileNames.map(getFile))
    const filteredFilesData = filesData.filter(file => file !== '')
    return res.send(filteredFilesData)
  } catch (error) {
    console.log('Error getting files data', error)
    return error
  }
}

files.list = async (req, res) => {
  try {
    const files = await filesModel.getFiles(req, res)
    const fileNames = utils.extractFileNames(files)
    return res.send(fileNames)
  } catch (error) {
    console.log('Error getting files list', error)
    return error
  }
}

module.exports = files
