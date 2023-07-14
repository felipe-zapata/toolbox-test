import axios from "axios";

export const getFiles = async () => {
  try {
    const files = await axios.get('http://localhost:3000/files/data')
    return files.data
  } catch (error) {
    return error
  }
}