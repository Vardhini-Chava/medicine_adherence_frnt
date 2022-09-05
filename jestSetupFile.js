import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);
import Enzyme from "enzyme";
import  Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
