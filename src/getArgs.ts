import { sanitizers } from "./sanitizers";

export const getArgs = () => {

    const [,, ...unsanitizedArgs] = process.argv;

    const { argsSanitizer } = sanitizers;
    return argsSanitizer(unsanitizedArgs);
};
