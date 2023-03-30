import { User } from "@prisma/client";
import { apiUrl } from "./config";
import { HTTPverbs } from "./types";

export function getUsers ( page: number ) {
    const step = 10;
    const url = new URL('api/user', apiUrl);
    url.searchParams.append("take", step.toString());
    url.searchParams.append("skip", (step*page).toString());
    // let headers = new Headers();
    const init = {
        method: HTTPverbs.GET,
        // headers: headers,
    };
    return new Promise((resolve, reject) => {
        fetch(url, init)
            .then((response: Response) => response.json())
            .then((users: User[]) => {
                resolve(users);
            }).catch((error) => {
                reject(error);
            })
    });
}