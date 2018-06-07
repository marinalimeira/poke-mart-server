import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import schema from './schema';
import { formatGraphQLErrorResponse } from './error';

const app = express();

app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));

app.listen(3030);
