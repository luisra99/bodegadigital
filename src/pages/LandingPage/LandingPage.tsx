import './LandingPage.sass';

import Carousel from 'react-material-ui-carousel';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Meta from '@/shared/components/Meta';

function HomeCarousel(props?: any) {
  const images = [
    '/carrousel/bodega ().png',
    '/carrousel/bodega11 (2).jpg',
    '/carrousel/bodega22 (2).jpg',
    '/carrousel/bodega33 (2).jpg',
  ];

  return (
    <Carousel
      autoPlay
      interval={5000}
      indicators={false}
      swipe
      className='landing-page-carousel'
    >
      {images.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
function Item(props: any) {
  return <img src={props.item} alt="bodega" width={'100%'} />;
}
function LandingPage() {
  return (
    <>
      <Meta title="Inicio" />
      <Box className='landing-page-box' style={{ textAlign: 'center' }}>
        <HomeCarousel />
        <Typography
          p={3}
          ml={3}
          pb={0}
          variant="h5"
          style={{ textAlign: 'left'}}
          fontWeight={800}
        >
          Bienvenido a la Bodega Digital
        </Typography>
        <Typography
          px={3}
          pb={2}
          ml={3}
          variant="h6"
          style={{ textAlign: 'left' }}
        >
          Este sistema le permitirá un mejor acceso a las informaciones del acontecer gastronómico
          de nuestra sociedad
        </Typography>
      </Box>
    </>
  );
}

export default LandingPage;
