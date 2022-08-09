import {patient} from "../../../src/redux/apis/patient"

describe("test fetchpatient",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(patient.fetchPatient(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})

describe("test  patientProfile",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(patient. patientProfile(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
describe("test syncmed",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(patient.patientReq(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
describe("test getmedhistory",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(patient.notifyPatient(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
describe("test reqdelete",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(patient.reqDelete(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
describe("test reqAccept",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(patient.reqAccept(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})