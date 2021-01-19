import fs from 'fs';
import path from 'path';

export const pathSanitizer = (unsanitizedPath: string) => {

    try {
        console.log('unsanitizedPath: ', unsanitizedPath);

        const rootCwdFn = path.join.bind(process.cwd());
        const inputedPath = rootCwdFn(unsanitizedPath);

        const isFile = fs.statSync(unsanitizedPath).isFile();
        console.log('isFile: ', isFile);

        if (!isFile) {

            console.log('path: ', inputedPath);
            const fileNames = fs.readdirSync(inputedPath);

            console.log('fileNames: ', fileNames);
            return {
                folderPath: inputedPath,
                fileNames,
                isFile
            };
        } else {

            console.log('path: ', inputedPath);
            const arrayPaths = inputedPath.split('/');
            const fileName = arrayPaths[arrayPaths.length - 1];

            arrayPaths.pop();
            const folderPath = arrayPaths.join('/');
            console.log('new path: ', folderPath);
            const fileNames = [fileName];

            console.log('fileNames: ', fileNames);
            return {
                folderPath,
                fileNames,
                isFile
            };
        }


    } catch (err) {

        console.log('Error: ', err);
    }
};
