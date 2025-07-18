import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Box } from '@mui/material';
import './App.css';

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    price: '$10.99',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    image: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
    price: '$8.99',
  },
  {
    title: '1984',
    author: 'George Orwell',
    image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    price: '$9.99',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    image: 'https://covers.openlibrary.org/b/id/8091016-L.jpg',
    price: '$7.99',
  },
  // Add more books as needed
];

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book Store
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 4, flex: 1 }}>
        <Grid container spacing={4}>
          {books.map((book, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={book.image}
                  alt={book.title}
                  sx={{ height: 240, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.author}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
                    {book.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'background.paper', mt: 'auto' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Book Store. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
