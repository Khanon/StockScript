import { Item } from './models/item.js'
import { checkStock } from './src/checkStock.js';
import { sendMail } from './src/sendMail.js';

const asus3080 = new Item("Asus ROG Strix GeForce RTX 3080 10G Gaming OC 10GB GDDR6X", "https://www.pccomponentes.com/asus-rog-strix-geforce-rtx-3080-10g-gaming-oc-10gb-gddr6x")
const asusRX6900XT = new Item("Asus Radeon RX 6900 XT 16GB GDDR6", "https://www.pccomponentes.com/asus-radeon-rx-6900-xt-16gb-gddr6")
const gSkill = new Item("G.Skill Trident Z Neo DDR4 3600 PC4-28800 64GB 4x16GB CL16", "https://www.pccomponentes.com/gskill-trident-z-neo-ddr4-3600-pc4-28800-64gb-4x16gb-cl16")
const logiHOTAS= new Item("Logitech X56 Hotas Joystick", "https://www.pccomponentes.com/logitech-x56-hotas-joystick-acelerador");
const amdRyzen = new Item("AMD Ryzen 9 5950X 3.4 GHz", "https://www.pccomponentes.com/amd-ryzen-9-5950x-34-ghz");
const seasonic = new Item("Seasonic SSR-750TR Snow Silent 750W", "https://www.pccomponentes.com/seasonic-ssr-750tr-snow-silent-750w-80-plus-titanium-modular");
const lianli = new Item("Lian-Li PC-O11D Dynamic XL", "https://www.pccomponentes.com/lian-li-pc-o11d-dynamic-xl-rog-edition-torre-atx-negra");
const noctua = new Item("Noctua NH-D15 chromax.black", "https://www.pccomponentes.com/noctua-nh-d15-chromaxblack");
const ps5 = new Item("Sony PlayStation 5", "https://www.pccomponentes.com/sony-playstation-5");
const ps5Digital = new Item("Sony PlayStation 5 Edición Digital", "https://www.pccomponentes.com/sony-playstation-5-edicion-digital");

const checkList = [
    asus3080,
    asusRX6900XT,
    gSkill,
    logiHOTAS,
    amdRyzen,
    seasonic,
    lianli,
    noctua,
    ps5,
    ps5Digital
]

async function check() {
    for await (const item of checkList) {
        await checkStock(item, true);
        if (item.changed) {
            if (item.onStock) {
                sendMail("+ ¡¡¡ ON STOCK !!!! ********", item.description);
            } else {
                sendMail("- Out of stock", item.description);
            }
        }
    }
}

setInterval(() => {
    check();
}, 30000);


