import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import { GraphQLScalarType } from 'graphql';
import pokeMartSchema from './schema.graphql';

const Items = [
  { name: 'Poké Ball', price: 200, quantity: 2 },
  { name: 'Potion', price: 200, quantity: 4 },
];

const Storage = [
  { name: 'Poké Ball', price: 200, quantity: 1283 },
  { name: 'Ultra Ball', price: 800, quantity: 232 },
  { name: 'Potion', price: 200, quantity: 342 },
  { name: 'Super Potion', price: 700, quantity: 312 },
  { name: 'Escape Rope', price: 1000, quantity: 239 },
];

const buyItems = (items) => {
  storage = storage.concat(items);
  console.log(storage);

  return {};
};

const schema = makeExecutableSchema({ typeDefs: pokeMartSchema });

const mocks = {
  BuyItemPayload: (obj, args) => buyItems(args.input),
  QueryRoot: (obj, args, context, info) => ({
    items: () => Items,
    storage: () => { items: Items },
  }),
};

addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true });

export default schema;
