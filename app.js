import { Item } from './models/item.js'
import { checkStock } from './src/checkStock.js';
import { sendMail } from './src/sendMail.js';

const asus3080      = new Item("nVidia RTX 3080 ROG Strix", "https://www.pccomponentes.com/asus-rog-strix-geforce-rtx-3080-10g-gaming-oc-10gb-gddr6x")
const asus3080tuf   = new Item("nVidia RTX 3080 ROG TUF", "https://www.pccomponentes.com/asus-tuf-geforce-rtx-3080-oc-10gb-gddr6x")
const asusRX6900XT  = new Item("Radeon RX 6900XT ROG Strix", "https://www.pccomponentes.com/asus-radeon-rx-6900-xt-16gb-gddr6")
const gSkill        = new Item("G.Skill Trident DDR4 3600", "https://www.pccomponentes.com/gskill-trident-z-neo-ddr4-3600-pc4-28800-64gb-4x16gb-cl16")
const logiHOTAS     = new Item("Logitech X56 Hotas", "https://www.pccomponentes.com/logitech-x56-hotas-joystick-acelerador");
const amdRyzen      = new Item("AMD Ryzen 9 5950X 3.4 GHz", "https://www.pccomponentes.com/amd-ryzen-9-5950x-34-ghz");
const seasonic      = new Item("Seasonic SSR-750TR Snow Silent", "https://www.pccomponentes.com/seasonic-ssr-750tr-snow-silent-750w-80-plus-titanium-modular");
const seasonicPrime = new Item("Seasonic Prime TX-750", "https://www.pccomponentes.com/seasonic-prime-tx-750-750w-80-plus-titanium-modular");
const lianli        = new Item("Lian-Li PC-O11D Dynamic XL B", "https://www.pccomponentes.com/lian-li-pc-o11d-dynamic-xl-rog-edition-torre-atx-negra");
const lianliW       = new Item("Lian-Li PC-O11D Dynamic XL W", "https://www.pccomponentes.com/lian-li-pc-o11d-dynamic-xl-rog-edition-torre-atx-blanca");
const thermal       = new Item("Thermaltake View 51", "https://www.pccomponentes.com/thermaltake-view-51-argb-edition-cristal-templado-usb-30");
const noctua        = new Item("Noctua NH-D15 chromax.black", "https://www.pccomponentes.com/noctua-nh-d15-chromaxblack");
const ssd500        = new Item("SSD nvme Corsair MP600 500GB", "https://www.pccomponentes.com/corsair-force-series-gen4-mp600-nvme-m2-500gb-ssd");
const ssd1000       = new Item("SSD nvme Corsair MP600 1TB", "https://www.pccomponentes.com/corsair-mp600-force-series-1tb-ssd-m2-pcie-gen-40-x4");
const x570E         = new Item("Asus ROG Strix X570-E Gaming", "https://www.pccomponentes.com/asus-rog-strix-x570-e-gaming");
const ps5           = new Item("Sony PlayStation 5", "https://www.pccomponentes.com/sony-playstation-5");
const ps5Digital    = new Item("Sony PlayStation 5 Digital", "https://www.pccomponentes.com/sony-playstation-5-edicion-digital");

const checkList = [
    asus3080,
    asus3080tuf,
    lianli,
    lianliW,
    thermal,
    ps5,
    ps5Digital
]

async function check() {
    console.log("");
    for await (const item of checkList) {
        await checkStock(item, true);
        if (item.changed) {
            if (item.onStock) {
                sendMail("+ ON STOCK !!! - " + item.description, item.description);
            } else {
                sendMail("- Out of stock - " + item.description, item.description);
            }
        }
    }
}

setInterval(() => {
    check();
}, 30000);


