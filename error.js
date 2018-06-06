export class GraphQLError extends Error {

  constructor(...args) {
    let [ errorInfo, ...rest ] = args;

    if (typeof errorInfo == 'string') {
      super(...args);
    } else {
      const message = errorInfo.message || '';
      super(message, ...rest);
      Object.assign(this, errorInfo);
    }
  }
}

export function formatGraphQLErrorResponse (error) {
  return Object.assign(error, error.originalError);
}
