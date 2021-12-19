import { contarOcorrenciasDeCadaLetra } from '../../TerceiroBloco/2. ContarOcorrenciasDeCadaLetra';

describe('Testar implementação do método "contarOcorrenciasDeCadaLetra"', () => {
	it("Deve retornar '{}' para uma string vazia", () => {
		expect(contarOcorrenciasDeCadaLetra('')).toEqual({});
	});

	it("Deve retornar '{ a: 2, b: 1 }' para a string 'aba'", () => {
		expect(contarOcorrenciasDeCadaLetra('aba')).toEqual({ a: 2, b: 1 });
	});

	it("Deve retornar '{ m: 1, a: 1, u: 1, r: 1, o:1 }' para a string 'Mauro'", () => {
		expect(contarOcorrenciasDeCadaLetra('Mauro')).toEqual({
			m: 1,
			a: 1,
			u: 1,
			r: 1,
			o: 1,
		});
	});
});
