import React from 'react';
import { Container, Typography, Grid, Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Styled Components
const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: '#2B2D42',
  color: 'white',
  padding: theme.spacing(6, 0),
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  opacity: 0.85,
  '&:hover': {
    color: theme.palette.primary.main,
    opacity: 1,
  }
}));

const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '&:last-child': {
    marginBottom: 0
  }
}));

const quickLinks = [
  'About Us',
  'Our Services',
  'Latest News',
  'Blog and Insight'
];

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: { xs: 3, md: 0 } }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.8,
                  opacity: 0.85,
                  mb: 2
                }}
              >
                EHR systems centralize patient information, allowing secure access and
                sharing of medical records. They enhance caremedical records.
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 500 }}>
              Quick Links
            </Typography>
            <Box 
              component="ul" 
              sx={{ 
                listStyle: 'none', 
                p: 0, 
                m: 0 
              }}
            >
              {quickLinks.map((link) => (
                <Box 
                  component="li" 
                  key={link} 
                  sx={{ mb: 2 }}
                >
                  <FooterLink variant="body1">
                    {link}
                  </FooterLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 500 }}>
              Contact Info
            </Typography>
            <Box sx={{ opacity: 0.85 }}>
              <InfoBox>
                <PhoneInTalkIcon />
                <Typography variant="body1">
                  Feel free to Contact Us
                </Typography>
              </InfoBox>
              <InfoBox>
                <LocationOnIcon />
                <Typography variant="body1">
                  Your Location Goes Here
                </Typography>
              </InfoBox>
              <InfoBox>
                <AccessTimeIcon />
                <Typography variant="body1">
                  Sunday-Friday: 9am-5pm
                </Typography>
              </InfoBox>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 500 }}>
              Subscribe Newsletter
            </Typography>
            <Box>
              <Typography variant="body1" sx={{ mb: 2, opacity: 0.85 }}>
                EHR systems centralize patient information, allowing secure access
              </Typography>
              <Box component="form">
                <TextField
                  fullWidth
                  placeholder="youremail@gmail.com"
                  variant="outlined"
                  size="small"
                  sx={{ 
                    backgroundColor: 'white',
                    borderRadius: 1,
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    py: 1,
                    bgcolor: '#6366F1',
                    '&:hover': {
                      bgcolor: '#4F46E5',
                    }
                  }}
                >
                  FIND AGENT
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;