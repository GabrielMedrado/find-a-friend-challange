export class PetNotExistsError extends Error {
  constructor() {
    super('O pet não existe.');
  }
}
