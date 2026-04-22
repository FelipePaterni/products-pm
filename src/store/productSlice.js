import { createSlice } from '@reduxjs/toolkit';

const createInitialForm = () => ({
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

const initialState = {
  form: createInitialForm(),
  produtos: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateFormField(state, action) {
      const { name, value } = action.payload;
      state.form[name] = value;
    },
    addProduct(state, action) {
      state.produtos.push(action.payload);
    },
    clearForm(state) {
      state.form = createInitialForm();
    },
  },
});

export const { updateFormField, addProduct, clearForm } = productSlice.actions;
export const initialProductForm = createInitialForm;
export default productSlice.reducer;