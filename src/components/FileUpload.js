import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button, Typography, TextField, Box } from '@mui/material';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        File Upload
      </Typography>
      <Box
        component="form"
        onSubmit={handleFileUpload}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <TextField type="file" onChange={handleFileChange} />
        <Button type="submit" variant="contained" color="primary">
          Upload
        </Button>
      </Box>
    </Container>
  );
};

export default FileUpload;
