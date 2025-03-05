import React from 'react';
import { Box, Typography, Grid, Card, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import photo1 from '../assets/Rectangle 186.png';
import photo2 from '../assets/Rectangle 186 (1).png';
import photo3 from '../assets/Rectangle 186 (2).png';

const ServicesSection = () => {
  const services = [
    {
      title: 'Claims Automation System',
      description: 'Revolutionize claims processing with our AI-driven Claims Automation.',
      image: photo1
    },
    {
      title: 'Underwriting Workflow Automation',
      description: 'Streamline underwriting with automated workflows designed.',
      image: photo2
    },
    {
      title: 'Fraud Detection Systems',
      description: 'Protect against fraud with machine learning tools to safeguard your business.',
      image: photo3
    }
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 6, lg: 8 }, bgcolor: 'rgba(0,0,0,0.03)' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', textAlign: 'center' }}>
        {/* Header Section */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h6" 
            sx={{ color: '#666', mb: 2, fontWeight: 500 }}
          >
            OUR SERVICES
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ fontWeight: 600, mb: 3, color: '#2B2D42' }}
          >
            Simplifying Insurance
          </Typography>
          <Typography 
            variant="body1"
            sx={{ color: '#666', mb: 4, lineHeight: 1.8 }}
          >
            All breakthroughs, we simplify process automation, cutting operational costs by 50%, empowering insurance professionals to deliver seamless, efficient, and game-changing services.
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: '#6366F1',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: '10px',
              '&:hover': { bgcolor: '#4F46E5' }
            }}
          >
            View All Services
          </Button>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                }
              }}>
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    height: 140,
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ fontWeight: 600, mb: 1, color: '#2B2D42' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{ color: '#666', lineHeight: 1.6, mb: 2 }}
                  >
                    {service.description}
                  </Typography>
                  <Button
                    endIcon={<ArrowForwardIcon sx={{ color: '#6366F1' }} />}
                    sx={{
                      color: '#6366F1',
                      p: 0,
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: '#333'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesSection;


// import React from 'react';
// import { Box, Typography, Grid, Card, Button } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import photo1 from '../assets/Rectangle 186.png';
// import photo2 from '../assets/Rectangle 186 (1).png';
// import photo3 from '../assets/Rectangle 186 (2).png';

// const ServicesSection = () => {
//   const services = [
//     {
//       title: 'Insurance Services I',
//       description: 'EHR systems centralize patient information, allowing secure access and sharing of medical records. They enhance care',
//       image: photo1
//     },
//     {
//       title: 'Insurance Services I',
//       description: 'EHR systems centralize patient information, allowing secure access and sharing of medical records. They enhance care',
//       image: photo2
//     },
//     {
//       title: 'Insurance Services I',
//       description: 'EHR systems centralize patient information, allowing secure access and sharing of medical records. They enhance care',
//       image: photo3
//     }
//   ];

//   return (
//     <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 6, lg: 8 }, bgcolor: '#ffffff' }}>
//       <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
//         {/* Header Section */}
//         <Box sx={{ mb: 6, maxWidth: '600px' }}>
//           <Typography 
//             variant="h6" 
//             sx={{ color: '#666', mb: 2, fontWeight: 500 }}
//           >
//             OUR SERVICES
//           </Typography>
//           <Typography 
//             variant="h3" 
//             sx={{ fontWeight: 600, mb: 3, color: '#2B2D42' }}
//           >
//             We're Covering All the Insurance Services
//           </Typography>
//           <Typography 
//             variant="body1"
//             sx={{ color: '#666', mb: 4, lineHeight: 1.8 }}
//           >
//             EHR systems centralize patient information, allowing secure access and sharing of medical records. They enhance care
//           </Typography>
//           <Button
//             variant="contained"
//             endIcon={<ArrowForwardIcon />}
//             sx={{
//               bgcolor: '#6366F1',
//               color: 'white',
//               px: 4,
//               py: 1.5,
//               borderRadius: '10px',
//               '&:hover': { bgcolor: '#4F46E5' }
//             }}
//           >
//             View All Services
//           </Button>
//         </Box>

//         {/* Services Grid */}
//         <Grid container spacing={4}>
//           {services.map((service, index) => (
//             <Grid item xs={12} md={6} key={index}>
//               <Card sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 p: 3,
//                 gap: 3,
//                 borderRadius: '20px',
//                 boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   transform: 'translateY(-5px)',
//                   boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
//                 }
//               }}>
//                 <Box
//                   component="img"
//                   src={service.image}
//                   alt={service.title}
//                   sx={{
//                     width: 120,
//                     height: 120,
//                     borderRadius: '15px',
//                     objectFit: 'cover'
//                   }}
//                 />
//                 <Box>
//                   <Typography 
//                     variant="h6" 
//                     sx={{ fontWeight: 600, mb: 1, color: '#2B2D42' }}
//                   >
//                     {service.title}
//                   </Typography>
//                   <Typography 
//                     variant="body2"
//                     sx={{ color: '#666', lineHeight: 1.6 }}
//                   >
//                     {service.description}
//                   </Typography>
//                   <Button
//                     endIcon={<ArrowForwardIcon sx={{ color: '#6366F1' }} />}
//                     sx={{
//                       mt: 2,
//                       color: '#6366F1',
//                       p: 0,
//                       '&:hover': {
//                         bgcolor: 'transparent',
//                         color: '#4F46E5'
//                       }
//                     }}
//                   >
//                     Learn More
//                   </Button>
//                 </Box>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default ServicesSection;