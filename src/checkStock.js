import { get } from 'https';
import moment from 'moment';

const getScript = (url) => {
    return new Promise((resolve, reject) => {
        get(url, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(data);
            });

        }).on("error", (err) => {
            reject(err);
        });
    });
};

const search_text = "notify-me";
const dateFormat = "DD, HH:mm:ss";

export async function checkStock(item, print = false) {
    const ret = await getScript(item.url)
    if (ret.indexOf(search_text) == -1) {
        if (print) {
            console.log("** + STOCK: " + item.description + " " + moment().format(dateFormat));
        }
        item.changed = !item.onStock || item.firstCheck;
        item.onStock = true;
    } else {
        if (print) {
            console.log("** -   Out: " + item.description + " " + moment().format(dateFormat));
        }
        item.changed = item.onStock || item.firstCheck;
        item.onStock = false;
    }
    item.firstCheck = false;
}
