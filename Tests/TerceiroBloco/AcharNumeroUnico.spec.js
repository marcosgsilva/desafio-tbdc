import { acharNumeroUnico } from '../../TerceiroBloco/1. AcharNumeroUnico';

describe('Testar implementação do método "acharNumeroUnico"', () => {
	it("Deve retornar '2' para o array '[1, 1, 1, 2, 1, 1]'", () => {
		const acharNumero = acharNumeroUnico([1, 1, 1, 2, 1, 1]);
		expect(acharNumero).toEqual(2);
	});

	it("Deve retornar '0.55' para o array '[0, 0, 0.55, 0, 0]'", () => {
		const acharNumero = acharNumeroUnico([0, 0, 0.55, 0, 0]);
		expect(acharNumero).toEqual(0.55);
	});
});
