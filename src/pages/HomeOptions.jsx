import React from "react";

import options1 from "../assets/options1.png";
import options2 from "../assets/options2.png";



import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Card, CardMedia, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
/* import hello from "../part1/seller" */

import { useNavigate , useRoutes} from 'react-router-dom';


function Options() {
    const navigate = useNavigate();
   

    const handleButtonClick1 = () => {
       navigate('/part1/Seller'); 
      };
      const handleButtonClick2 = () => {
        navigate('/part1/vendor');
      };
      const handleButtonClick3 = () => {
        navigate('/part2/seller');
      };
      const handleButtonClick4 = () => {
        navigate('/part2/buyer');
      };

    return (

        <>
        <div style={{display:"flex", justifyContent:'center'}}>
            {/* Recycle Section */}
            <Box sx={{ padding: 5 , marginTop: '100px', display: 'flex' }}>
            <Card sx={{ maxWidth: 600 }}>

                <CardMedia component="img" height="450" image={options1} alt="options1" />
                <br></br>
                <div style={{display:"flex", justifyContent:'center' , gap: '100px'}}>
                <Button variant="contained" sx={{ backgroundColor:'#298282'}}  onClick={handleButtonClick1} >Continue as SELLER</Button>
                <Button variant="contained" sx={{ backgroundColor:'#298282'}} onClick={handleButtonClick2}>Continue as VENDOR</Button>
                </div>
                <br></br>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Kachra Seth : Turning Waste into Value
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                    Indulge in the world of RECYCLABLE TRADE :- Recyclable Waste Marketplace.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                        Connect with trusted vendors for fair pricing and accurate weighing of your recyclable household waste. Kachra Seth acts as a mediator, ensuring transparency and reliability, helping you earn back value on items like newspapers, plastics, and more, while promoting responsible recycling.
                    </Typography>
                </CardContent>
            </Card>
        </Box>







             {/* Preowned Goods Section */}
             <Box sx={{ padding: 5 , marginTop: '100px', display: 'flex' }}>
            <Card sx={{ maxWidth: 600 }}>

                <CardMedia component="img" height="450" image={options2} alt="options2" />

                <br></br>
                <div style={{display:"flex", justifyContent:'center' , gap: '100px'}}>
                <Button variant="contained" sx={{ backgroundColor:'#298282'}} onClick={handleButtonClick3}>Continue as SELLER</Button>
                <Button variant="contained" sx={{ backgroundColor:'#298282'}} onClick={handleButtonClick4}>Continue as BUYER</Button>
                </div>
                <br></br>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Kachra Seth:  Reuse, Recycle, Reconnect
                    </Typography>

                    <Typography variant="h5" gutterBottom>
                    Indulge in the world of REUSED GOODS :-  Give a Second Life to Your Belongings.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Donate or sell items like books and electronics to people who need them, fostering a sustainable community. Whether donating or selling at low cost, Kachra Seth makes it easy to repurpose valuable items and reduce waste.
                    </Typography>
                </CardContent>
            </Card>
        </Box>

        </div>


        </>
    );
};

export default Options;