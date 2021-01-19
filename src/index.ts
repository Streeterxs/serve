#!/usr/bin/env node

import { getArgs } from "./getArgs";
import { getPath } from "./getPath";
import { server } from "./server";

const {path, port} = getArgs();
const { folderPath, isFile } = getPath(path);

if (isFile) {
    console.log('The inputed path is a file, serving files for root folder of this file.');
}

if (!port) {
    server(folderPath)
} else {
    server(folderPath, port);
}