import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../assets/Group 101281.png';
import Login from './Login';
import Register from './Register';


// Styled Components
const TopBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  padding: theme.spacing(1, 0),
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1001,
  transition: 'all 0.3s ease-in-out',
}));

const MainHeader = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(2, 0),
  borderBottom: '1px solid #eee',
  position: 'fixed',
  top: '48px', // Height of TopBar
  left: 0,
  right: 0,
  zIndex: 1000,
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '& svg': {
    fontSize: '1.2rem',
  }
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: '50%',
  backgroundColor: 'rgba(255,255,255,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
  '& svg': {
    fontSize: '1.2rem',
  }
}));

const NavLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  cursor: 'pointer',
  fontWeight: 500,
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  }
}));

const Header = () => {
  return (
    <Box component="header" sx={{
      position: 'relative',
      paddingTop: '120px' // Combined height of TopBar and MainHeader
    }}>
      {/* Top Bar */}
      <TopBar>
        <Container maxWidth="lg">
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            gap: { xs: 2, md: 0 }
          }}>
            {/* Left Section */}
            <Box sx={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              flexWrap: { xs: 'wrap', md: 'nowrap' }
            }}>
              <IconWrapper>
                <PaymentIcon />
                <Typography variant="body2">Payment Options</Typography>
              </IconWrapper>
              <IconWrapper>
                <LocationOnIcon />
                <Typography variant="body2">Your Location goes here</Typography>
              </IconWrapper>
            </Box>

            {/* Right Section */}
            <Box sx={{
              display: 'flex',
              gap: 3,
              alignItems: 'center',
              flexWrap: { xs: 'wrap', md: 'nowrap' }
            }}>
              <IconWrapper>
                <PhoneInTalkIcon />
                <Typography variant="body2">Call: +254 888 888 888</Typography>
              </IconWrapper>
              <IconWrapper>
                <EmailIcon />
                <Typography variant="body2">youremail@gmail.com</Typography>
              </IconWrapper>

              {/* Social Icons */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <SocialIcon>
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon>
                  <TwitterIcon />
                </SocialIcon>
                <SocialIcon>
                  <LinkedInIcon />
                </SocialIcon>
              </Box>
            </Box>
          </Box>
        </Container>
      </TopBar>

      {/* Main Header */}
      <MainHeader>
        <Container maxWidth="lg">
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            gap: { xs: 2, md: 0 }
          }}>
            {/* Logo */}
            <img src={logo} alt="logo" />
            {/* Navigation */}
            <Box sx={{
              display: 'flex',
              gap: 4,
              order: { xs: 3, md: 2 },
              width: { xs: '100%', md: 'auto' },
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              <NavLink variant="body1">About Us</NavLink>
              <NavLink variant="body1">Our Services</NavLink>
              <NavLink variant="body1">Latest News</NavLink>
              <NavLink variant="body1">Blog and Insight</NavLink>
            </Box>

            {/* CTA Buttons */}
            <Box sx={{
              display: 'flex',
              gap: 2,
              order: { xs: 2, md: 3 }
            }}>
              <Button

                sx={{
                  px: 3,
                  py: 1
                }}
              >
                <Register />
              </Button>
              <Button

                sx={{
                  px: 3,
                  py: 1
                }}
              >
                <Login />
              </Button>
            </Box>
          </Box>
        </Container>
      </MainHeader>
    </Box>
  );
};

export default Header;
