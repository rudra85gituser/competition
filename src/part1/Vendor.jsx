import React, { useState } from 'react';
import {Box,TextField,Button,Checkbox,FormControl,FormControlLabel,FormGroup,Typography,Card,CardContent,Container} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

function VendorForm() {
  const [formData, setFormData] = useState({
    shopName: '',
    vendorName: '',
    vendorPhone: '',
    vendorEmail: '',
    vendorAddress: '',
    categories: {
      paper: false,
      iron: false,
      plastic: false,
      other: false,
    },
    shopImage: null,
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
      categories: {
        ...prevData.categories,
        [name]: checked,
      },
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      shopImage: e.target.files[0],
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
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <Typography variant="h5" textAlign="center" gutterBottom>
              Register Your Shop
            </Typography>

            <TextField
              label="Shop Name"
              name="shopName"
              value={formData.shopName}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Vendor Name"
              name="vendorName"
              value={formData.vendorName}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Phone Number"
              name="vendorPhone"
              type="tel"
              value={formData.vendorPhone}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Email"
              name="vendorEmail"
              type="email"
              value={formData.vendorEmail}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Address"
              name="vendorAddress"
              value={formData.vendorAddress}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={3}
            />

            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Select Categories To Trade
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="paper"
                      checked={formData.categories.paper}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Paper"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="iron"
                      checked={formData.categories.iron}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Iron"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="plastic"
                      checked={formData.categories.plastic}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Plastic"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="other"
                      checked={formData.categories.other}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Other"
                />
              </FormGroup>
            </FormControl>

            <Button
              variant="contained"
              component="label"
              startIcon={<PhotoCamera />}
              sx={{ mt: 2 }}
            >
              Upload Shop Image
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
              Register Shop
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default VendorForm;
