const app = require('./src/app');
const env = require('./src/config/env');

async function start() {
    await seedAdmin();

    app.listen(env.port, () => {
        console.log(`Laboratorio API CRUD ejecutandose en htpp://localhost:${env.port}`);
    });
}

start();