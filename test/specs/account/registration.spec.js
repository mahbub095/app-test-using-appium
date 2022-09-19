const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")
const homeScreen = require("../../screenobjects/home/homescreen")
const registrationData = require("../../testdata/registrationData.json")

describe('Verify Account/Account Information', () => {

    before(async () => {
        await landingScreen.clickSkipBtn()
    })

    it('TC _001: Verify user will not Register to the application using empty input', async () => {
        await registrationScreen.clickSubmitBtn()
    })
});