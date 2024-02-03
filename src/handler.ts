import type { Handler, Context } from 'aws-lambda';

export const hello: Handler = async (event: any, context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
};
