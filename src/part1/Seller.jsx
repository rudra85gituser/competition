import React, { useState } from 'react';
import {Box,TextField,Button,Checkbox,FormControl,FormControlLabel,FormGroup,Typography,Card,CardContent,Container} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

function SellerForm() {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    userAddress: '',
    materials: {
      iron: false,
      plastic: false,
      paper: false,
    },
    itemImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      materials: {
        ...prevData.materials,
        [name]: checked,
      },
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      itemImage: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 12 }}>
      <Card>
        <CardContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{display: 'flex',flexDirection: 'column',gap: 2,
            }}
          >
            <Typography variant="h5" textAlign="center" gutterBottom>
              Sell Your Recyclable Items
            </Typography>

            <TextField
              label="Username"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Email"
              name="userEmail"
              type="email"
              value={formData.userEmail}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Phone Number"
              name="userPhone"
              type="tel"
              value={formData.userPhone}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Address"
              name="userAddress"
              value={formData.userAddress}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={3}
            />

            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Select Materials
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="iron"
                      checked={formData.materials.iron}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Iron"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="plastic"
                      checked={formData.materials.plastic}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Plastic"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="paper"
                      checked={formData.materials.paper}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Paper"
                />
              </FormGroup>
            </FormControl>

            <Button
              variant="contained"
              component="label"
              startIcon={<PhotoCamera />}
              sx={{ mt: 2 }}
            >
              Upload Item Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </Button>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 2 }}
            >
              Continue to Sell
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SellerForm;
