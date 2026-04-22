import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

export default function App() {
  const [formData, setFormData] = useState({
    idProduto: '',
    nomeProduto: '',
    categoria: '',
    unidade: '',
    peso: '',
    dimensoes: '',
    volume: '',
    tipoRecipiente: '',
    precoUnitario: '',
    marca: '',
    fornecedor: '',
    codigoBarras: '',
    quantidadeEstoque: '',
    descricao: '',
  });

  const [produtos, setProdutos] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoProduto = {
      ...formData,
    };

    setProdutos((prev) => [...prev, novoProduto]);

    console.log('Produto adicionado:', novoProduto);
    console.log('Lista de produtos:', [...produtos, novoProduto]);

    setFormData({
      idProduto: '',
      nomeProduto: '',
      categoria: '',
      unidade: '',
      peso: '',
      dimensoes: '',
      volume: '',
      tipoRecipiente: '',
      precoUnitario: '',
      marca: '',
      fornecedor: '',
      codigoBarras: '',
      quantidadeEstoque: '',
      descricao: '',
    });
  };

  const handleShow = () => {
    console.log('FormData atual:', formData);
    console.log('Vetor de produtos:', produtos);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <ProductForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onShow={handleShow}
        />

        <ProductTable rows={produtos} />
      </Box>
    </Container>
  );
}