

let self;

export class DomainError {
	constructor(name) {
		this.name = name;
		self = this;
	}

	async getErrorMessage() {
		return new Promise(callback.bind(self))
	}
}


const callback = (resolve, reject) => {
	if (self.name) {
		resolve(`An error occurred [${self.name}]`);
	} else {
		reject('No name informed');
	}
};

