import axios from 'axios'

export const getFiles = async (fileName) => {
  try {
    const files = await axios.get(`http://localhost:3000/files/data${fileName ? `?fileName=${fileName}` : ''}`)
    return files.data
  } catch (error) {
    return error
  }
}

export const getFileList = async () => {
  try {
    const files = await axios.get('http://localhost:3000/files/list')
    return files.data
  } catch (error) {
    return error
  }
}
