/* 
Author: Emily Black
Date: 10/04/17
Version: 1.0
*/

'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = insertappidhere;
const SKILL_NAME = 'Latin Facts';
const GET_QUOTE_MESSAGE = 'Salve! Here is your Latin quote: ';
const HELP_MESSAGE = 'You can say give me a Latin quote, give me a quote, tell me a quote, or, you can say exit';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Vale!';

const data = [
	'audacter et sincere. boldly and frankly. from Veni, Vidi, Vici.'
	'aude sapere. dare to be wise. from Veni, Vidi, Vici.',
	'consilio et prudentia. by wisdom and prudence. from Veni, Vidi, Vici.',
	'constantia et virtute. by firmness and courage. from Veni, Vidi, Vici.',
	'denique caelum. heaven at last! from Veni, Vidi, Vici.',
	'ex imo corde. from the bottom of the heart. from Veni, Vidi, Vici.',
	'fides facit fidem. trust begets trust. from Veni, Vidi, Vici.',
	'honores mutant mores. honors alter character. from Veni, Vidi, Vici.',
	'in aqua scribis. you are writing in water. from Veni, Vidi, Vici.',
	'nuda veritas. naked truth. from Veni, Vidi, Vici.',
	'probitas verus honor. honesty is true honor. from Veni, Vidi, Vici.',
	'si fortuna iuvat. if fortune favors. from Veni, Vidi, Vici.',
	'suum cuique. to each his own. from Veni, Vidi, Vici.',
	'tenax et fidelis. steadfast and faithful. from Veni, Vidi, Vici.',
	'ubi amici, ibi opes. where there are friends, there is wealth. from Veni, Vidi, Vici.',
	'carpe diem. seize the day. from Amo, Amas, Amat & More.',
	'festina lente. make haste slowly. from Amo, Amas, Amat & More.',
	'tempus fugit. time flies. from Amo, Amas, Amat & More.',
	'nosce te ipsum. know thyself. from Amo, Amas, Amat & More.',
	'e pluribus unum. one out of many. from Amo, Amas, Amat & More.',
	'errare humanum est. to err is human. from Amo, Amas, Amat & More.',
	'dum spiro spero. while I breath I hope. from Amo, Amas, Amat & More.',
	'ad astra per aspera. to the stars through difficulties. from Amo, Amas, Amat & More.',
	'dum vivimus vivamus. while we live, let us live. from Amo, Amas, Amat & More.',
	'veni, vidi, vici. I came, I saw, I conquered. from Amo, Amas, Amat & More.',
	'facta non verba. deeds, not words. from Amo, Amas, Amat & More.',
	'ars longa, vita brevis. art is long, but life is short. from Amo, Amas, Amat & More.',
	'alter ego. another self. from Amo, Amas, Amat & More.',
	'pax vobiscum. peace be unto you. from Amo, Amas, Amat & More.',
	'quaere verum. seek the truth. from Amo, Amas, Amat & More.',
	'semper paratus. always ready. from Amo, Amas, Amat & More.',
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewQuoteIntent');
    },
    'GetNewFactIntent': function () {
        const quoteArray = data;
        const quoteIndex = Math.floor(Math.random() * quoteArray.length);
        const randomQuote = quoteArray[quoteIndex];
        const speechOutput = GET_QUOTE_MESSAGE + randomQuote;

        this.response.cardRenderer(SKILL_NAME, randomQuote);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
