export class OngAlreadyExistsError extends Error {
  constructor() {
    super('Uma ONG com esse e-mail já existe.');
  }
}
