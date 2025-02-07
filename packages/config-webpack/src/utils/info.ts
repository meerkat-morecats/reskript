import path from 'node:path';
import {existsSync} from 'node:fs';
import childProcess from 'node:child_process';
import {promisify} from 'node:util';
import {logger} from '@reskript/core';
import {BuildContext} from '../interface.js';

const exec = promisify(childProcess.exec);

export const revision = async (): Promise<string> => {
    try {
        const output = await exec('git rev-parse --short HEAD');
        return output.stdout.toString().trim();
    }
    catch (ex) {
        logger.log('Not a git repository, fallback to default revision');
        return '0000000';
    }
};

export const hasServiceWorker = (context: BuildContext) => {
    const serviceWorkerSource = path.join(context.cwd, context.srcDirectory, 'service-worker.js');
    return existsSync(serviceWorkerSource);
};
