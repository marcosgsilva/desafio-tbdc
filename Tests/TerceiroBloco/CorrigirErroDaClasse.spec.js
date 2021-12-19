import { expect } from '@jest/globals';
import { DomainError } from '../../TerceiroBloco/4. CorrigirErroDaClasse';

describe('Testar utilização do método "getErrorMessage" da class DomainError', () => {
	it('Deve resolver a promessa se o nome foi informado', async () => {
		const domainError = new DomainError('Test error');
		expect(await domainError.getErrorMessage()).toEqual(
			'An error occurred [Test error]'
		);
	});

	it('Deve rejeitar a promessa se o nome não foi informado', async () => {
		const domainError = new DomainError();

		await domainError
			.getErrorMessage()
			.then(() => {
				// Erro deve falhar se a promessa for aceita!
				expect(1).toEqual(0);
			})
			.catch((error) => {
				expect(error).toEqual('No name informed');
			});
	});
});
