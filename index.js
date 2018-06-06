import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import schema from './schema';
import { formatGraphQLErrorResponse } from './error';

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema, formatError: formatGraphQLErrorResponse }));

app.listen(3000);
