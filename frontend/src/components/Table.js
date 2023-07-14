import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { selectFiles, filesAsync } from '../redux/reducer';

const FileTable = () => {
  const files = useSelector(selectFiles).files;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filesAsync());
  }, [dispatch]);

  const filesToRender = (files) => {
    if (files?.length > 0) {
      return files.map((file, indexFiles) => {
        return file?.lines?.map((line, indexLine) => {
          const key = indexFiles + indexLine;
          return (
            <tr key={key}>
              <td>{file.file}</td>
              <td>{line.text}</td>
              <td>{line.number}</td>
              <td>{line.hex}</td>
            </tr>
          )
        })
      })
    }
  }

  return (
    <Table striped bordered hover>
      <thead className='table-head'>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {filesToRender(files)}
      </tbody>
    </Table>
  );
}

export default FileTable;