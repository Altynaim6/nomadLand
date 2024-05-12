import React from 'react';
import { useState } from 'react';
import { AppBar, Container, IconButton, Toolbar, Typography, Box, Button, Paper, Grid, styled, Card, CardMedia, 
         CardContent, CardActions, Link, Dialog, DialogTitle, DialogContent, DialogContentText, 
         TextField, DialogActions, Drawer, List, ListItem, ListItemIcon, useMediaQuery, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SaveIcon from '@mui/icons-material/Save';
import TelegramIcon from '@mui/icons-material/Telegram';
import { kyrgyzstan, issykKul, alaArcha, buranaTower, chuiValley, saryChelek, altynArashan } from './assets/images';
import { useTheme } from '@mui/material/styles';

const MainFeaturesPost = styled(Paper)(({ theme }) => ({
  position: 'relative',
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: 450, 
}));

const Overlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: 'rgba(0, 0, 0, 0.3)', 
}));

const MainFeaturesPostContent = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(6),
  marginTop: theme.spacing(13),
}));

const CardGrid = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4)
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
  gap: theme.spacing(4),
  padding: theme.spacing(2)
}));


const cardData = [
  {
    id: 1,
    title: "Chui Valley",
    description: "A vast and fertile lowland framing northern Kyrgyzstan, Chui Valley is rich in agricultural productivity and steeped in historical significance, marked by numerous ancient Silk Road sites.",
    imageUrl: chuiValley
  },
  {
    id: 2,
    title: "Lake Issyk-Kul",
    description: "Surrounded by snow-capped mountains, Lake Issyk-Kul is one of the world's largest and deepest saline lakes.",
    imageUrl: issykKul
  },
  {
    id: 3,
    title: "Ala Archa National Park",
    description: "Just a short drive from Bishkek, Ala Archa National Park offers stunning alpine scenery and excellent hiking opportunities.",
    imageUrl: alaArcha
  },
  {
    id: 4,
    title: "Sary-Chelek Lake",
    description: "Nestled within a Biosphere Reserve, Sary-Chelek Lake is known for its pristine, turquoise waters and diverse surrounding forests, offering a serene natural escape.",
    imageUrl: saryChelek
  },
  {
    id: 5,
    title: "Altyn-Arashan",
    description: "Famed for its hot springs and stunning alpine scenery, Altyn-Arashan is a trekker's paradise, located in the picturesque landscapes of northeastern Kyrgyzstan.",
    imageUrl: altynArashan
  },
  {
    id: 6,
    title: "Burana Tower",
    description: "An ancient minaret in the Chuy Valley in northern Kyrgyzstan. It is part of the architectural complex that dates back to the Karakhanid era.",
    imageUrl: buranaTower
  }
];


function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const handleLoginClickOpen = () => {
    setLoginOpen(true);
  }
  const handleLoginClose = () => {
    setLoginOpen(false);
  }

  const handleRegisterClickOpen = () => {
    setRegisterOpen(true);
  }
  const handleRegisterClose = () => {
    setRegisterOpen(false);
  }

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const drawerContents = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AccountCircle /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            <Drawer
              anchor='left'
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerContents}
            </Drawer>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: isMobile ? 'center' : 'inherit' }}>
              Travel Blog
            </Typography>
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <Button color="inherit" variant="outlined" onClick={handleLoginClickOpen} sx={{ mx: 1 }}>Log in</Button>
              <Dialog open={loginOpen} onClose={handleLoginClose}>
                <DialogTitle id='form-dialog-title'>Log In</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see locations</DialogContentText>
                  <TextField autoFocus margin='dense' id='name' label='Email Address' type='email' fullWidth />
                  <TextField margin='dense' id='pass' label='Password' type='password' fullWidth />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleLoginClose} color='primary'>Cancel</Button>
                  <Button onClick={handleLoginClose} color='primary'>Log in</Button>
                </DialogActions>
              </Dialog>
              <Button color="secondary" variant="contained" onClick={handleRegisterClickOpen} sx={{ mx: 1 }}>Sign up</Button>
              <Dialog open={registerOpen} onClose={handleRegisterClose}>
                <DialogTitle id='form-dialog-title'>Register</DialogTitle>
                <DialogContent>
                  <DialogContentText>Please fill in this form to create an account.</DialogContentText>
                  <TextField autoFocus margin='dense' id='fullName' label='Full Name' type='text' fullWidth />
                  <TextField margin='dense' id='email' label='Email Address' type='email' fullWidth />
                  <TextField margin='dense' id='password' label='Password' type='password' fullWidth />
                  <TextField margin='dense' id='confirm-password' label='Confirm Password' type='password' fullWidth />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleRegisterClose} color='primary'>Cancel</Button>
                  <Button onClick={handleRegisterClose} color='primary'>Register</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
      <MainFeaturesPost style={{ backgroundImage: `url(${kyrgyzstan})` }}>
          <Container fixed>
            <Overlay/>
            <Grid container>
              <Grid item md={6}>
                <MainFeaturesPostContent>
                  <Typography 
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    NomadLand
                  </Typography>
                  <Typography 
                    component="h5"
                    color="inherit"
                    paragraph
                  >
                    Explore new destinations and uncover hidden gems with our in-depth travel guides and stories.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </MainFeaturesPostContent>
              </Grid>
            </Grid>
          </Container>
        </MainFeaturesPost>
        <Box component="section" sx={{ py: 8 }}>
          <Container maxWidth="md">
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Travel Blog
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Whether you're exploring historic sites, experiencing nomadic culture, 
              or simply soaking in the breathtaking scenery, Kyrgyzstan offers a unique 
              and unforgettable travel experience in the heart of Central Asia.
            </Typography>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Grid container spacing={5} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>Start Now</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>Learn More</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <CardGrid maxWidth="md">
            <GridContainer>
              {cardData.map((card) => (
                <Card key={card.id} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.imageUrl}
                    alt={card.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <IconButton aria-label="save">
                      <SaveIcon />
                    </IconButton>
                    <IconButton aria-label="share via Telegram">
                      <TelegramIcon /> 
                    </IconButton>
                  </CardActions>
                </Card>
              ))}
            </GridContainer>
        </CardGrid>
        </Box>
      </main>
      <footer>
        <Box component="footer" sx={{ bgcolor: '#5393ff', py: 6, color: 'white' }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} justifyContent="center">
              <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center" textAlign="start">
                <Typography variant="h6" gutterBottom>
                  NomadLand
                </Typography>
                <Typography variant="subtitle1">
                  Individual approach, attention, true care and respect.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center" textAlign="start">
                <Typography variant="h6" gutterBottom>
                  Links
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li><Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>Home</Link></li>
                  <li><Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>About</Link></li>
                  <li><Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>Services</Link></li>
                  <li><Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>Contact</Link></li>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center" textAlign="start">
                <Typography variant="h6" gutterBottom>
                  Contact
                </Typography>
                <Typography variant="subtitle1">
                  Email: nomadland@mail.com<br />
                  Phone: +996775280366
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" align="center" sx={{ pt: 4 }}>
              © {new Date().getFullYear()} NomadLand. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </footer>
    </>
  );
}

export default App;
