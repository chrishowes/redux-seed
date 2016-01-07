export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';

export function exampleAction(id: String) {
  return {
    type: EXAMPLE_ACTION,
    id: id
  };
}
