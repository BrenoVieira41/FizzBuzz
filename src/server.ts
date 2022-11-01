import { app, router } from './app';

const port = process.env.PORT || 3333

app.use(router)
app.listen(port, () => console.log(`server is running in port:${port}!`));
