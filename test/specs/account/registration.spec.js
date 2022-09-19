const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")
const registrationData = require("../../testdata/registrationData.json")

const ticketPriceHomeScreen = require("../../screenobjects/ticketprice/ticketpricehomescreen")
const westernTrainListScreen = require("../../screenobjects/ticketprice/westerntrainlistscreen")
const homeScreen = require("../../screenobjects/home/homescreen")

describe('Verify Account/Account Information', () => {

    before(async () => {
        await landingScreen.clickSkipBtn()
    })

    // before(async()=>{
    //     await landingScreen.clickSkipBtn()
    //     await registrationScreen.clickSkipRegistrationBtn()
    //     await homeScreen.clickTicketPriceButton()
    // })
    

    it('Verify user will be Register to the application using valid information', async () => {
        await registrationScreen.enterName(registrationData.validInfo.name)
        await registrationScreen.enterPhoneNumber(registrationData.validInfo.phone)
        await registrationScreen.enterEmail(registrationData.validInfo.email)
        await registrationScreen.selectDistrict(registrationData.validInfo.district)
        await registrationScreen.clickSubmitBtn()
    })

    // it('Verify user can view Western Region train ticket price',async()=>{
    //     await ticketPriceHomeScreen.clickWasternTicketPriceBtn()
    //     await westernTrainListScreen.clickFirstWesternTrain()
        // expect(await ticketPriceStationListScreen.isStationListExist()).toBeTruthy()
        // await ticketPriceStationListScreen.enterFromStationName(ticketPriceData.weasternRegion.fromStationName)
        // await ticketPriceStationListScreen.selectFromStation(ticketPriceData.weasternRegion.fromStationName)
        // await ticketPriceStationListScreen.enterToStationName(ticketPriceData.weasternRegion.ToStationName)
        // await ticketPriceStationListScreen.selectToStation(ticketPriceData.weasternRegion.ToStationName)
        // await ticketPriceStationListScreen.clickFirstStation()
        // expect(await ticketPriceDetailScreen.getDistance()).toContain(ticketPriceData.weasternRegion.distance)
        // expect(await ticketPriceDetailScreen.getShovonChairPrice()).toContain(ticketPriceData.weasternRegion.shovonChairPrice)
    // })
});