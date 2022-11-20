export interface Terreno {
  id?:                           string;
  cep:                           string;
  endereco:                      string;
  numero:                        number;
  bairro:                        string;
  cidade:                        string;
  estado:                        string;
  complemento?:                  string;
  metragem:                      number;
  titulo:                        string;
  descricao:                     string;
  uploadImagem:                  string;
  uploadEscritura:               string;
  comodante?:                    string;
  comodatario?:                  string;
}
