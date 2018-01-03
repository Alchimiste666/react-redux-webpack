// NODE_ENV variable can be set in command line like following (default value is 'development') :
// set NODE_ENV=prod/test/dev (Windows) | export NODE_ENV=prod/test/dev (Unix)
const nodeEnvironment = process.env.NODE_ENV || 'development';
const development = nodeEnvironment === 'dev' || nodeEnvironment === 'development';
const testing = nodeEnvironment === 'test' || nodeEnvironment === 'testing';
const production = nodeEnvironment === 'prod' || nodeEnvironment === 'production';
const ci = nodeEnvironment === 'ci';

const environment = { development, testing, production, ci };

export { development, testing, production, ci };

export default environment;

