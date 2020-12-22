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
const dateFormat = "MMMM Do YYYY,  HH:mm:ss";

export async function checkStock(item, print = false) {
    const ret = await getScript(item.url)
    if (ret.indexOf(search_text) == -1) {
        if (print) {
            console.log(item.description + " - EN STOCK!! - " + moment().format(dateFormat));
        }
        item.changed = !item.onStock || item.fistCheck;
        item.onStock = true;
    } else {
        if (print) {
            console.log(item.description + " - Out of stock :( - " + moment().format(dateFormat));
        }
        item.changed = item.onStock || item.fistCheck;
        item.onStock = false;
    }
    item.fistCheck = false;
}
