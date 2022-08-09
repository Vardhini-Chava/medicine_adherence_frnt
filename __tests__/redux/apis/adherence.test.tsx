import adherence from "../../../src/redux/apis/adherence"

describe("test fetchimage",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(adherence.medimages(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})

describe("test downloadpdf",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(adherence.downloadPdf(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
describe("test syncmed",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(adherence.syncmeds(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
describe("test getmedhistory",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(adherence.getmedhistory(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
describe("test syncmedhistory",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(adherence.syncmedicineHistory(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})