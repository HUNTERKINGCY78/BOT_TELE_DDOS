module.exports = function Blazingfast() {
    const request = require('request'),
        BFCrypt = require('./bfcrypt'),
        cloudscraper = require('cloudscraper').defaults({
            agentOptions: {
                ciphers: 'ECDHE-ECDSA-AES128-GCM-SHA256'
            }
        }),
        safeEval = require('safe-eval');

    function randomScreenWidth() {
        return ~~(Math.random() * (2560 - 1024) + 1024)
    }

    function toNumbers(d) {
        var e = [];
        d.replace(/(..)/g, function (d) {
            e.push(parseInt(d, 16))
        });
        return e
    }

    function toHex() {
        for (var d = [], d = 1 == arguments.length && arguments[0].constructor == Array ? arguments[0] : arguments, e = "", f = 0; f <
            d.length; f++) e += (16 > d[f] ? "0" : "") + d[f].toString(16);
        return e.toLowerCase()
    }

    let document = {
        cookie: ''
    }

    function atob(string) {
        return Buffer.from(string, 'base64').toString('ascii');
    }
    
    return async function cookie(proxy, uagent, callback) {
        var cookie = "";
        if (l7.firewall[1] === '5sec') {
            request.get({
                url: l7.parsed.protocol + '//' + l7.parsed.host,
                gzip: true,
                proxy: proxy,
                headers: {
                    'Connection': 'Keep-Alive',
                    'Cache-Control': 'max-age=0',
                    'Upgrade-Insecure-Requests': 1,
                    'User-Agent': uagent,
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
                    'Accept': 'application/json',
                    'Content-type': 'application/json; charset=utf-8', 
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Sec-Fetch-Dest': 'document',
                    'Sec-Fetch-Mode': 'navigate',
                    'Sec-Fetch-User': '?1',
                    'Upgrade-Insecure-Requests': "1",
                    "Referer": l7.parsed.protocol + '//' + l7.parsed.host + '/',
                    'Origin': l7.parsed.protocol + '//' + l7.parsed.host + '/',
                }
            }, async (err, res, body) => {
                if (!res || !res.headers['set-cookie'] || !body || body.indexOf(',true),xhr') == -1) {
                    return false;
                }
                cookie = res.headers['set-cookie'].shift().split(';').shift();
                let url = l7.parsed.protocol + '//' + l7.parsed.host + '/___S___/' + body.split(';xhr.open("GET","/___S___/')[1].split('",true),xhr.onrea')[0].replace('" + ww +"', randomScreenWidth());
                await request.get({
                    url: l7.parsed.protocol + '//' + l7.parsed.host + '/jquery.min.js',
                    proxy: proxy,
                    gzip: true,
                    headers: {
                        'Connection': 'Keep-Alive',
                        'Cache-Control': 'max-age=0',
                        'Upgrade-Insecure-Requests': 1,
                        'User-Agent': uagent,
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                        'Accept-Encoding': 'gzip, deflate, br',
                        'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
                        'Accept': 'application/json',
                        'Content-type': 'application/json; charset=utf-8', 
                        'Cache-Control': 'no-cache',
                        'Pragma': 'no-cache',
                        'Sec-Fetch-Dest': 'document',
                        'Sec-Fetch-Mode': 'navigate',
                        'Sec-Fetch-User': '?1',
                        'Upgrade-Insecure-Requests': "1",
                        "Referer": l7.parsed.protocol + '//' + l7.parsed.host + '/',
                        'Origin': l7.parsed.protocol + '//' + l7.parsed.host + '/',
                        'Cookie': cookie
                    }
                }, async (err, res, body) => {
                    if (err || !res || !body) {
                        return false;
                    }
                    await request.get({
                        url,
                        proxy: proxy,
                        gzip: true,
                        headers: {
                            'Connection': 'Keep-Alive',
                            'Cache-Control': 'max-age=0',
                            'Upgrade-Insecure-Requests': 1,
                            'User-Agent': uagent,
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                            'Accept-Encoding': 'gzip, deflate, br',
                            'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
                            'Accept': 'application/json',
                            'Content-type': 'application/json; charset=utf-8', 
                            'Cache-Control': 'no-cache',
                            'Pragma': 'no-cache',
                            'Sec-Fetch-Dest': 'document',
                            'Sec-Fetch-Mode': 'navigate',
                            'Sec-Fetch-User': '?1',
                            'Upgrade-Insecure-Requests': "1",
                            "Referer": l7.parsed.protocol + '//' + l7.parsed.host + '/',
                            'Origin': l7.parsed.protocol + '//' + l7.parsed.host + '/',
                            'Cookie': cookie
                        }
                    }, (err, res, body) => {
                        if (err || !body || body.indexOf('if($(window).width()>0) { document.cookie=') == -1 || !res) return false;
                        let chl = 'var a=toNumbers' + body.split('var a=toNumbers')[1].replace(' if($(window).width()>0) { document.cookie=', 'document.cookie=').split('+"; domain =')[0]
                        let final = cookie + '; ' + eval(chl);
                        callback(final);
                    });
                });
            });
        } else if (['5sec2'].indexOf(l7.firewall[1]) !== -1) {
            setTimeout(() => {
                cloudscraper.get({
                    url: l7.parsed.protocol + '//' + l7.parsed.host,
                    gzip: true,
                    proxy: proxy,
                    headers: {
                        'Connection': 'Keep-Alive',
                            'Cache-Control': 'max-age=0',
                            'Upgrade-Insecure-Requests': 1,
                            'User-Agent': uagent,
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                            'Accept-Encoding': 'gzip, deflate, br',
                            'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
                            'Accept': 'application/json',
                            'Content-type': 'application/json; charset=utf-8', 
                            'Cache-Control': 'no-cache',
                            'Pragma': 'no-cache',
                            'Sec-Fetch-Dest': 'document',
                            'Sec-Fetch-Mode': 'navigate',
                            'Sec-Fetch-User': '?1',
                            'Upgrade-Insecure-Requests': "1",
                            "Referer": l7.parsed.protocol + '//' + l7.parsed.host + '/',
                            'Origin': l7.parsed.protocol + '//' + l7.parsed.host + '/',
                    }
                }, async (err, res, body) => {
                    if (!res || !res.headers['set-cookie'] || !body || body.indexOf('r.value = "') == -1) {
                        return false;
                    }
                    let url = l7.parsed.protocol + '//' + l7.parsed.host + '/blzgfst-shark/?bfu=' + encodeURI(body.split('r.value = "')[1].split("\";var _0xf8c2=['value'];")[0]) + '&blazing_answer=' + safeEval(body.split("return _0x8cc65;};a[_0x2f8c('0x0')]=")[1].split(';')[0]);
                    cookie = res.headers['set-cookie'].shift().split(';').shift();
                    await cloudscraper.get({
                        url,
                        gzip: true,
                        proxy: proxy,
                        followAllRedirects: true,
                        jar: true,
                        headers: {
                            'Connection': 'Keep-Alive',
                            'Cache-Control': 'max-age=0',
                            'Upgrade-Insecure-Requests': 1,
                            'User-Agent': uagent,
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                            'Accept-Encoding': 'gzip, deflate, br',
                            'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
                            'Accept': 'application/json',
                            'Content-type': 'application/json; charset=utf-8', 
                            'Cache-Control': 'no-cache',
                            'Pragma': 'no-cache',
                            'Sec-Fetch-Dest': 'document',
                            'Sec-Fetch-Mode': 'navigate',
                            'Sec-Fetch-User': '?1',
                            'Upgrade-Insecure-Requests': "1",
                            "Referer": l7.parsed.protocol + '//' + l7.parsed.host + '/',
                            'Origin': l7.parsed.protocol + '//' + l7.parsed.host + '/',
                            'TE': 'Trailers',
                            'Cookie': cookie
                        }
                    }, (err, res, body) => {
                        if (err || !res) return false;
                        let final = res.request.headers.Cookie;
                        callback(final);
                    });
                });
            }, 5e3);

        };
    }
}