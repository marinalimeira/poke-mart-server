import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import { GraphQLScalarType } from 'graphql';
import pokeMartSchema from './schema.graphql';

let storage = [];

const Items = [
  { name: 'Poké Ball', price: 200 },
  { name: 'Ultra Ball', price: 800 },
  { name: 'Potion', price: 200 },
  { name: 'Super Potion', price: 700 },
  { name: 'Escape Rope', price: 1000 },
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
    trainerItems: () => storage,
  }),
};

addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true });

export default schema;
