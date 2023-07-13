const axios = require('axios')

const filesModel = {}
const axiosConfig = {
  headers: {
    Authorization: 'Bearer aSuperSecretKey' // Should be on a config encrypted file
  }
}

filesModel.getFiles = async () => {
  try {
    const files = await axios.get('https://echo-serv.tbxnet.com/v1/secret/files', axiosConfig)
    return files.data
  } catch (error) {
    return error
  }
}

filesModel.getFile = async (fileName) => {
  try {
    const response = await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`, axiosConfig)
    return response.data
  } catch (error) {
    return error
  }
}

module.exports = filesModel
