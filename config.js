var api = "https://irdpool.fr:8117";
var api_blockexplorer = "https://explorer.ird.cash";

var blockchainExplorer = "https://explorer.ird.cash/?hash={id}#blockchain_block";
var transactionExplorer = "https://explorer.ird.cash/?hash={id}#blockchain_transaction";

var themeCss = "themes/ird-theme.css";

var coinDifficultyTarget=175;
var coinUnits=100000000;

var networkStat = {
    "ird": [
        ["https://irdpool.fr", "https://irdpool.fr:8117"],
        ["https://irdpool.eu", "https://irdpool.eu:8443"],
        ["https://irdpool.ca", "https://irdpool.ca:8117"],
        ["https://irdpool.net", "https://irdpool.net:8117"],
        ["http://ird.cashpool.us", "https://explorer.ird.cash/cashpool"],
        ["http://irdpool.tk", "https://explorer.ird.cash/tk"],
        ["http://irdpool.ru", "https://explorer.ird.cash/ru"],
        ["https://irdpool.de","https://irdpool.de/api"],
        ["http://iridiumpool.duckdns.org","https://explorer.ird.cash/nl"],
        ["http://irdpool.online","https://explorer.ird.cash/onl"],
        ["http://iridiumcoin.sixpools.tk","https://explorer.ird.cash/six"]
    ]
};
