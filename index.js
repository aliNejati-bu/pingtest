process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
let avg = [];

async function send(url) {
    try {
        let startTime = Date.now();
        let result = await fetch(url, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "en-US,en;q=0.9,fa-IR;q=0.8,fa;q=0.7",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            }, "referrerPolicy": "strict-origin-when-cross-origin", "body": null, "method": "GET"
        });
        let endTime = Date.now();
        let overAll = endTime - startTime;
        avg.push(overAll);
        console.clear();
        console.log('----------------------');
        console.log('ping:', overAll);
        let total = 0;
        avg.forEach(e => {
            total += e;
        });
        console.log('AVG:', total / avg.length);

    } catch (e) {
        console.log(e);
        console.log('failed...');
    }
}


async function run() {
    setInterval(() => {
        send('https://esale.ikd.ir/products');
    }, 2000);
}

run();