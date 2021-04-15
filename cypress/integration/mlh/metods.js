import sel from "../mlh/selectors";
import {age, name} from "./data";

function inputValues4(name, gender, age, submit= 0){
    if (name !== "")
        cy.get(sel.name).type(name);
    if (gender >= 0 && gender <=2)
        cy.get(sel.radioButtons)[gender].click();
    if (age !== "")
        cy.get(sel.age).type(age);
    cy.get(sel.storyType).click();
    cy.get(sel.comedy).trigger('mousemove').click();
    if (submit > 0)
        cy.get(sel.submit).click();
    }


function storySwitch(story1, story2) {
    $(sel.storyType).click();
    $$(sel.storyList)[story1].click();
    $(sel.storyType).click();
    $$(sel.storyList)[story2].click();
}

function storySelect(story) {
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

function imageUpload (filePath) {
    let fileUpload = $(sel.imageUpload);
    let remoteFilePath = browser.uploadFile(filePath);
    browser.execute((el) => el.style.display = 'block', fileUpload);
    fileUpload.waitForDisplayed();
    fileUpload.setValue(remoteFilePath);
}

export {
    inputValues4,
    storySwitch,
    storySelect,
    imageUpload,
};