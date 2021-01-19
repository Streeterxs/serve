export type SanitizedArgs = {
    path: string;
    port: number;
};
export const argsSanitizer = (args: string[]): SanitizedArgs => {

    try {

        console.log('args: ', args);
        const path = args[0];
        const port = args[1] ? +args[1] : null;
        return {
            path,
            port
        };
    } catch (err) {

        console.log('Error: ', err);
        return null;
    }
};
