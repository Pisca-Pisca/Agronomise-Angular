export interface Usuario {
  primeiroNome: string,
  sobrenome: string,
  email: string,
  senha: string,
  nascimento: string,
  cpf: number,
  cep: string,
  rg: string,
  endereco: string,
  complemento: string,
  numero: number,
  cidade: string,
  bairro: string,
  estado: string,
  uploadDocumentoFoto?: string,
  uploadComprovanteEndereco?: string,
}
