import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import photo1 from '../assets/Rectangle 193.png';
import photo2 from '../assets/Rectangle 193 (1).png';
import photo3 from '../assets/Rectangle 193 (2).png';


// Team member data
const teamMembers = [
  {
    name: 'Wilson John',
    role: 'MARKETING LEAD',
    image: photo1
  },
  {
    name: 'Bob Thomas',
    role: 'MARKETING LEAD',
    image: photo2
  },
  {
    name: 'Bob Thomas',
    role: 'MARKETING LEAD',
    image: photo3
  },
  {
    name: 'Bob Thomas',
    role: 'MARKETING LEAD',
    image: photo1
  }
];

// Styled Components
const TeamCard = styled(Card)(({ theme }) => ({
  background: 'white',
  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
  }
}));

const TeamImage = styled('img')({
  width: '100%',
  height: '250px',
  objectFit: 'cover',
  display: 'block'
});

const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(6, 0),
  marginBottom: theme.spacing(4),
  background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)'
}));

const TeamSection = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <HeroSection>
        <Box sx={{ 
          width: '100%', 
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, sm: 4, md: 6, lg: 8 }
        }}>
          <Typography 
            component="span" 
            sx={{ 
              color: 'primary.main',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: 2
            }}
          >
            OUR TEAM MEMBER
          </Typography>
          <Typography 
            variant="h2" 
            component="h1"
            sx={{ 
              fontWeight: 700,
              marginBottom: 2,
              color: '#2B2D42',
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Our Experienced Team
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontSize: '1rem'
            }}
          >
            EHR systems centralize patient information, allowing secure access and sharing of
            medical records. They enhance caremedical records. They enhance care
          </Typography>
        </Box>
      </HeroSection>

      {/* Team Cards */}
      <Box sx={{ 
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        pb: 6
      }}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <TeamCard elevation={0}>
                <TeamImage
                  src={member.image}
                  alt={member.name}
                />
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                  <Typography 
                    variant="h6" 
                    component="h2"
                    sx={{ 
                      fontWeight: 600,
                      marginBottom: 1,
                      color: '#2B2D42',
                      fontSize: '1.1rem'
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography 
                    variant="subtitle2"
                    sx={{ 
                      color: 'primary.main',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      fontSize: '0.8rem'
                    }}
                  >
                    {member.role}
                  </Typography>
                </CardContent>
              </TeamCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TeamSection;