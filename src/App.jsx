import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ProductForm from './components/ProductForm.jsx';
import ProductTable from './components/ProductTable.jsx';

export default function App() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Box
          sx={{
            borderRadius: 4,
            px: 4,
            py: 3,
            color: '#fff',
            background: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)',
          }}
        >
          <Typography variant="overline" sx={{ letterSpacing: 2 }}>
            Cadastro de Produtos
          </Typography>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
            Controle de produtos com React, Vite e Redux Toolkit
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', lg: '420px 1fr' } }}>
          <ProductForm />
          <ProductTable />
        </Box>
      </Box>
    </Container>
  );
}