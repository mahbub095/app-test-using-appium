const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")
const homeScreen = require("../../screenobjects/home/homescreen")
const mobileTicketHomeScreen = require("../../screenobjects/mobileticket/mobiletickethomescreen")

describe('Verify Mobile Ticket Feature', () => {

    before(async () => {
        await landingScreen.clickSkipBtn()
        await registrationScreen.clickSkipRegistrationBtn()
        await homeScreen.clickMobileTicketButton()
    })

    it('Verify user can view the SMS rules to buy ticket using sms', async () => {
        await mobileTicketHomeScreen.clickSmsRulesBtn()
    })
});