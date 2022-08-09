import { profile } from "../../../src/redux/apis/profile"

describe("test profile",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(profile.saveProfile(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})