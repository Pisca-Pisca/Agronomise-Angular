import { AbstractControl, FormGroup } from "@angular/forms";

export class Utils {

  constructor() { }

  cpfMask = (documento: string) => {
    // if (!documento)
    //   return '0*';

    return '000.000.000-009';
  }

  cnpjMask = (documento: string) => {
    // if (!documento)
    //   return '0*';

    return '00.000.000/0000-00';
  }

  cpfCnpjMask = (documento: string) => {
    // if (!documento)
    //   return '0*';

    if (documento.length <= 11)
      return '000.000.000-009';
    else
      return '00.000.000/0000-00';
  }

  cpfValidator = (cpf: AbstractControl) => {
    if (typeof (cpf.value) === 'string') {
      const cpfStr = cpf.value.replace(/[^\d]+/g, '');

      if (cpfStr === '') return { invalid: true };

      if (cpfStr.length !== 11)
        return { invalid: true };

      if (cpfStr === "00000000000" ||
        cpfStr === "11111111111" ||
        cpfStr === "22222222222" ||
        cpfStr === "33333333333" ||
        cpfStr === "44444444444" ||
        cpfStr === "55555555555" ||
        cpfStr === "66666666666" ||
        cpfStr === "77777777777" ||
        cpfStr === "88888888888" ||
        cpfStr === "99999999999")
        return { invalid: true };

      var soma: number;
      var resto: number;

      soma = 0;

      for (let i = 1; i <= 9; i++)
        soma += parseInt(cpfStr.substring(i - 1, i)) * (11 - i);

      resto = (soma * 10) % 11;

      if ((resto == 10) || (resto == 11)) resto = 0;

      if (resto != parseInt(cpfStr.substring(9, 10))) return { invalid: true };

      soma = 0;

      for (let i = 1; i <= 10; i++)
        soma += parseInt(cpfStr.substring(i - 1, i)) * (12 - i);

      resto = (soma * 10) % 11;

      if ((resto == 10) || (resto == 11)) resto = 0;

      if (resto != parseInt(cpfStr.substring(10, 11))) return { invalid: true };

      return null;
    }

    return { invalid: true };
  }

  cnpjValidator = (cnpj: AbstractControl) => {
    if (typeof (cnpj.value) === 'string') {
      const cnpjStr = cnpj.value.replace(/[^\d]+/g, '');

      if (cnpjStr === '') return { invalid: true };

      if (cnpjStr.length !== 14)
        return { invalid: true };

      if (cnpjStr === "00000000000000" ||
        cnpjStr === "11111111111111" ||
        cnpjStr === "22222222222222" ||
        cnpjStr === "33333333333333" ||
        cnpjStr === "44444444444444" ||
        cnpjStr === "55555555555555" ||
        cnpjStr === "66666666666666" ||
        cnpjStr === "77777777777777" ||
        cnpjStr === "88888888888888" ||
        cnpjStr === "99999999999999")
        return { invalid: true };

      var tamanho: number = cnpjStr.length - 2
      const digitos: string = cnpjStr.substring(tamanho);
      var numeros: string = cnpjStr.substring(0, tamanho);
      var soma = 0;
      var pos = tamanho - 7;

      for (let i = tamanho; i >= 1; i--) {
        soma += parseInt(numeros.charAt(tamanho - i)) * pos--;

        if (pos < 2)
          pos = 9;
      }

      var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado !== parseInt(digitos.charAt(0)))
        return { invalid: true };

      tamanho = tamanho + 1;
      numeros = cnpjStr.substring(0, tamanho);
      soma = 0;
      pos = tamanho - 7;

      for (let i = tamanho; i >= 1; i--) {
        soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
        if (pos < 2)
          pos = 9;
      }

      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado !== parseInt(digitos.charAt(1)))
        return { invalid: true };

      return null;
    }

    return { invalid: true };
  }

  cpfCnpjValidator = (documento: AbstractControl) => {
    if (this.cpfValidator(documento) === null || this.cnpjValidator(documento) === null)
      return null;
    else
      return { invalid: true };
  }

  formatarString = (string: string = "") => {
    const regexSC = /[´`\[\{\]\}~^,<\.>;:'"!@#$%¨&\*\(\)\=\+\/\?\-\\]/g;
    const regexCedilha = /[çÇ]/g;
    const regexA = /[(áàãâä)]/g;
    const regexE = /[éèêë]/g;
    const regexI = /[íìîï]/g;
    const regexO = /[óòõôö]/g;
    const regexU = /[úùûü]/g;

    string = string.toLowerCase();

    string = string.replace(regexSC, "")
      .replace(regexCedilha, "c")
      .replace(regexA, "a")
      .replace(regexE, "e")
      .replace(regexI, "i")
      .replace(regexO, "o")
      .replace(regexU, "u")
      .replace(/\s/g, "_");

    return string;
  }

  clone(item: any) {
    return JSON.parse(JSON.stringify(item));
  }

  static random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
