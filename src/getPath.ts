import { sanitizers } from "./sanitizers";

export const getPath = (unsanitizedPath: string) => {

    const { pathSanitizer } = sanitizers;

    return pathSanitizer(unsanitizedPath);
};