const os = require('os');
const path = require('path');

exports.ACTS_TEMPLATES = {
    basic: {
        name: 'Basic ("basic")',
        value: 'basic',
        dir: `${__dirname}/../templates/basic`,
        defaultRunOptions: {
            build: 'latest',
            timeoutSecs: 3600,
            memoryMbytes: 512,
        },
    },
    puppeteer: {
        name: 'Puppeteer ("puppeteer")',
        value: 'puppeteer',
        dir: `${__dirname}/../templates/puppeteer`,
        defaultRunOptions: {
            build: 'latest',
            timeoutSecs: 0,
            memoryMbytes: 2048,
        },
    },
    puppeteer_crawler: {
        name: 'Puppeteer crawler ("puppeteer_crawler")',
        value: 'puppeteer_crawler',
        dir: `${__dirname}/../templates/puppeteer_crawler`,
        defaultRunOptions: {
            build: 'latest',
            timeoutSecs: 0,
            memoryMbytes: 2048,
        },
    },
    plain_request_urls_list: {
        name: 'Plain request url list crawler ("plain_request_urls_list")',
        value: 'plain_request_urls_list',
        dir: `${__dirname}/../templates/plain_request_urls_list`,
        defaultRunOptions: {
            build: 'latest',
            timeoutSecs: 0,
            memoryMbytes: 2048,
        },
    },
};

exports.ACTS_TEMPLATE_LIST = Object.keys(exports.ACTS_TEMPLATES);

exports.DEFAULT_ACT_TEMPLATE = 'basic';

exports.LOCAL_ENV_VARS = {
    APIFY_LOCAL_EMULATION_DIR: 'apify_local',
    APIFY_LOCAL_DATASETS_DIR: 'datasets',
    APIFY_LOCAL_KEY_VALUE_STORES_DIR: 'key-value-stores',
    APIFY_DEFAULT_KEY_VALUE_STORE_ID: 'default',
    APIFY_DEFAULT_DATASET_ID: 'default',
    APIFY_PROXY_HOSTNAME: 'proxy.apify.com',
    APIFY_PROXY_PORT: 8000,
};

exports.PROXY_PASSWORD_ENV_VAR = 'APIFY_PROXY_PASSWORD';

exports.EMPTY_LOCAL_CONFIG = {
    name: null,
    actId: null,
    version: {
        versionNumber: '0.1',
        buildTag: 'latest',
        envVars: [],
        sourceType: 'TARBALL',
        tarballUrl: null,
    },
};

exports.GLOBAL_CONFIGS_FOLDER = path.join(os.homedir(), '.apify');

exports.AUTH_FILE_PATH = path.join(exports.GLOBAL_CONFIGS_FOLDER, 'auth.json');

exports.LOCAL_CONFIG_NAME = 'apify.json';