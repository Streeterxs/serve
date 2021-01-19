import Koa from 'koa';
import serve from 'koa-static'

export const server = (path, PORT=4449) => {

    try {

        const app = new Koa();

        if (!path) {
            throw new Error('path non existant!');
        }

        app.use(serve(path));
        app.listen(PORT);

        // eslint-disable-next-line
        console.log(`Listening on ${PORT}`);
        // eslint-disable-next-line
        console.log(`http://localhost:${PORT}`);
    } catch (err) {
        console.log('err: ', err);
    }
};
