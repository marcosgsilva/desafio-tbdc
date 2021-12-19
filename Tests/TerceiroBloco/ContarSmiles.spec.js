import { contarSmiles } from '../../TerceiroBloco/3. ContarSmiles';

describe('Testar implementação do método "contarSmiles"', () => {
	it("Deve retornar '0' para um array vazio", () => {
		expect(contarSmiles([])).toEqual(0);
	});
	it("Deve retornar '4' para o array '[':D',':~)',';~D',':)']'", () => {
		expect(contarSmiles([':D', ':~)', ';~D', ':)'])).toEqual(4);
	});
	it("Deve retornar '2' para o array '[':)',':(',':D',':O',':;']'", () => {
		expect(contarSmiles([':)', ':(', ':D', ':O', ':;'])).toEqual(2);
	});
	it("Deve retornar '1' para o array '[';]', ':[', ';*', ':$', ';-D']'", () => {
		expect(contarSmiles([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
	});
});
