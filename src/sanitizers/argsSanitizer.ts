export type SanitizedArgs = {
    path: string;
};
export const argsSanitizer = (args: string[]): SanitizedArgs => {

    try {

        console.log('args: ', args);
        const path = args[0];

        console.log('path: ', path);
        return {
            path
        };
    } catch (err) {

        console.log('Error: ', err);
        return null;
    }
};
