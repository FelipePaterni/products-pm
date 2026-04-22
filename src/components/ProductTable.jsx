import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

export default function ProductTable() {
  const rows = useSelector((state) => state.products.produtos);

  const formatCurrency = (value) => {
    const numericValue = Number(value);

    if (Number.isNaN(numericValue)) {
      return 'R$ 0,00';
    }

    return numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <TableContainer component={Paper} elevation={3} sx={{ mt: 4 }}>
      <Typography variant="h5" component="h1" sx={{ p: 2 }}>
        Produtos Cadastrados
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>ID</strong></TableCell>
            <TableCell><strong>Nome</strong></TableCell>
            <TableCell><strong>Categoria</strong></TableCell>
            <TableCell><strong>Unidade</strong></TableCell>
            <TableCell><strong>Peso</strong></TableCell>
            <TableCell><strong>Dimensões</strong></TableCell>
            <TableCell><strong>Volume</strong></TableCell>
            <TableCell><strong>Recipiente</strong></TableCell>
            <TableCell><strong>Preço Unitário</strong></TableCell>
            <TableCell><strong>Marca</strong></TableCell>
            <TableCell><strong>Fornecedor</strong></TableCell>
            <TableCell><strong>Cód. Barras</strong></TableCell>
            <TableCell><strong>Estoque</strong></TableCell>
            <TableCell><strong>Descrição</strong></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.length > 0 ? (
            rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.idProduto}</TableCell>
                <TableCell>{row.nomeProduto}</TableCell>
                <TableCell>{row.categoria}</TableCell>
                <TableCell>{row.unidade}</TableCell>
                <TableCell>{row.peso}</TableCell>
                <TableCell>{row.dimensoes}</TableCell>
                <TableCell>{row.volume}</TableCell>
                <TableCell>{row.tipoRecipiente}</TableCell>
                <TableCell>{formatCurrency(row.precoUnitario)}</TableCell>
                <TableCell>{row.marca}</TableCell>
                <TableCell>{row.fornecedor}</TableCell>
                <TableCell>{row.codigoBarras}</TableCell>
                <TableCell>{row.quantidadeEstoque}</TableCell>
                <TableCell>{row.descricao}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={14} align="center">
                Nenhum produto cadastrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}