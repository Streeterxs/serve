import { getArgs } from "./getArgs";
import { sanitizers } from "./sanitizers";

export const getPath = () => {

    const args = getArgs();
    const { pathSanitizer } = sanitizers;

    return pathSanitizer(args.path);
};