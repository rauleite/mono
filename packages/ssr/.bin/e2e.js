import shell from 'shelljs';
import detect from 'detect-port';
import waitOn from 'wait-on';

const util = require('util');

const detectPort = util.promisify(detect);

const PORT = 3000;
const URL = `http://localhost:${PORT}`;

const waitOpt = {
    resources: [URL],
    interval: 2 * 1000,
    // delay: 10 * 1000,
    // timeout: 30000,
  };

(async () => {
    const port = await detectPort(PORT);
    const isConnected = PORT !== port;
    console.log('isConnected', isConnected);

    if (!isConnected) {
        console.log(process.cwd());
        shell.cd('../..');
        console.log(process.cwd());
        shell.exec(
            'yarn workspace @rauleite/ssr run dev',
            {  async: true },
        )

      waitOpt.delay = 10 * 1000;
    }

    console.log('Next.js ok')
    await waitOn(waitOpt);
    console.log(`URL: ${URL} ok`)
    shell.exec(
        'yarn workspace @rauleite/ssr run test:e2e',
        {  async: false },
        )
    console.log(`Test e2e ok`)
    // process.exit(1)
})()
