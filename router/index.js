import test from './test';

export default app => {
    app.use('/server/test', test);
}