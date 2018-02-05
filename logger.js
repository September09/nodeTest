var log4js = require('log4js');

log4js.configure({

    "appenders": {

        "rule-file": {

            "type": "dateFile",

            "filename": __dirname + '/logs/test.log',

            "encoding": "utf-8",

            "maxLogSize": 10000000,

            "numBackups": 3,

            "pattern": "yyyy-MM-dd.log",

            "alwaysIncludePattern": true

        }

    },

    "categories": {

        "default": {

            "appenders": [

                "rule-file"

            ],

            "level": "info"

        }

    }

});

const Logger = log4js.getLogger('-');

export default Logger
