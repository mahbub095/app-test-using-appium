const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")
const registrationData = require("../../testdata/registrationData.json")

describe('Verify Account/Account Information', () => {

    before(async () => {
        await landingScreen.clickSkipBtn()
    })

    // it('TC _001: Verify user will not Register to the application using empty input', async () => {
    //     await registrationScreen.clickSubmitBtn()
    // })

    it('Verify user will be Register to the application using valid information', async () => {
        await registrationScreen.enterName(registrationData.validInfo.name)
        await registrationScreen.enterPhoneNumber(registrationData.validInfo.phone)
        await registrationScreen.enterEmail(registrationData.validInfo.email)
        await registrationScreen.selectDistrict(registrationData.validInfo.district)
        await registrationScreen.clickSubmitBtn()
    })
});