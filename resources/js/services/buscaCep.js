import axios from "axios";

const api = axios.create();

const buscaCep = async (cepSeach) => {
  if (cepSeach.length < 8) return;
  try {
    const response = await api.get(`https://viacep.com.br/ws/${cepSeach}/json`);
    const { bairro, logradouro, localidade, uf, erro } = response.data;

    return { bairro, logradouro, localidade, uf, erro };
  } catch (e) {
    console.log("e", e);
  }
};

export default buscaCep;
