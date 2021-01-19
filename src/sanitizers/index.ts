import { argsSanitizer } from "./argSanitizer";
import { pathSanitizer } from "./pathSanitizer";

export const sanitizers = {
    path: pathSanitizer,
    args: argsSanitizer,
};
