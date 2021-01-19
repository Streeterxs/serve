import Koa from 'koa';
import serve from 'koa-static'

const app = new Koa();

app.use(serve('./build'));

const PORT = 4449;

app.listen(PORT);

// eslint-disable-next-line
console.log(`Listening on ${PORT}`);
// eslint-disable-next-line
console.log(`http://localhost:${PORT}`);
