import {careTaker} from "../../../src/redux/apis/careTaker"

describe("test fetchimage",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(careTaker.emailcaretaker(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})

describe("test downloadpdf",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(careTaker.reqCaretaker(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
describe("test syncmed",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(careTaker.sendImage(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
describe("test caretaker",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(careTaker.caretaker(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})


