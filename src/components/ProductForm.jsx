import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, clearForm, updateFormField } from '../store/productSlice.js';

export default function ProductForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.products.form);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateFormField({ name, value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addProduct({ ...formData }));
    dispatch(clearForm());
  };

  return (
    <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Produto
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <TextField
          label="ID do Produto"
          name="idProduto"
          value={formData.idProduto}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Nome do Produto"
          name="nomeProduto"
          value={formData.nomeProduto}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Categoria do Produto"
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          fullWidth
          required
        />

        <FormControl fullWidth required>
          <InputLabel id="unidade-label">Unidade</InputLabel>
          <Select
            labelId="unidade-label"
            id="unidade"
            name="unidade"
            value={formData.unidade}
            label="Unidade"
            onChange={handleChange}
          >
            <MenuItem value="">Selecione</MenuItem>
            <MenuItem value="UN">UN - Unidade</MenuItem>
            <MenuItem value="CX">CX - Caixa</MenuItem>
            <MenuItem value="KG">KG - Quilograma</MenuItem>
            <MenuItem value="G">G - Grama</MenuItem>
            <MenuItem value="L">L - Litro</MenuItem>
            <MenuItem value="ML">ML - Mililitro</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Peso"
          name="peso"
          value={formData.peso}
          onChange={handleChange}
          fullWidth
          placeholder="Ex.: 500"
          required
        />

        <TextField
          label="Dimensões"
          name="dimensoes"
          value={formData.dimensoes}
          onChange={handleChange}
          fullWidth
          placeholder="Ex.: 20 x 10 x 5 cm"
          required
        />

        <TextField
          label="Volume"
          name="volume"
          value={formData.volume}
          onChange={handleChange}
          fullWidth
          placeholder="Ex.: 250 ml"
        />

        <FormControl fullWidth required>
          <InputLabel id="recipiente-label">Tipo de Recipiente</InputLabel>
          <Select
            labelId="recipiente-label"
            id="tipoRecipiente"
            name="tipoRecipiente"
            value={formData.tipoRecipiente}
            label="Tipo de Recipiente"
            onChange={handleChange}
          >
            <MenuItem value="">Selecione</MenuItem>
            <MenuItem value="Plástico">Plástico</MenuItem>
            <MenuItem value="Vidro">Vidro</MenuItem>
            <MenuItem value="Metal">Metal</MenuItem>
            <MenuItem value="Papelão">Papelão</MenuItem>
            <MenuItem value="Sachê">Sachê</MenuItem>
            <MenuItem value="Sem recipiente">Sem recipiente</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Preço Unitário"
          name="precoUnitario"
          type="number"
          value={formData.precoUnitario}
          onChange={handleChange}
          fullWidth
          inputProps={{ step: '0.01', min: 0 }}
          required
        />

        <TextField
          label="Marca"
          name="marca"
          value={formData.marca}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Fornecedor"
          name="fornecedor"
          value={formData.fornecedor}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Código de Barras"
          name="codigoBarras"
          value={formData.codigoBarras}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Quantidade em Estoque"
          name="quantidadeEstoque"
          type="number"
          value={formData.quantidadeEstoque}
          onChange={handleChange}
          fullWidth
          inputProps={{ min: 0 }}
        />

        <TextField
          label="Descrição"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          fullWidth
          multiline
          rows={3}
        />

        <Button type="submit" variant="contained" size="large">
          Salvar
        </Button>
      </Box>
    </Paper>
  );
}