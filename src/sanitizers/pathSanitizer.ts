import fs from 'fs';
import path from 'path';

export const pathSanitizer = (args: string[]) => {

    try {
        console.log('args: ', args);

        const rootCwdFn = path.join.bind(process.cwd());
        const inputedPath = rootCwdFn(args[1]);

        const isFile = fs.statSync(args[1]).isFile();
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
