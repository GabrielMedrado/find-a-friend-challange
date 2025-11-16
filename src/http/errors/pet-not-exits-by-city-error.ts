export class PetNotExistsByCityError extends Error {
  constructor() {
    super('Não existem pets nessa cidade.');
  }
}
