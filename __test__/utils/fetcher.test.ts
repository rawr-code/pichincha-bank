import { getUrlHost } from "../../utils/fetcher";

describe("getUrlHost", () => {
    it("renders correctly", async () => {
        expect(() => getUrlHost()).toThrow("Enviroment API_URL no setted");
    });
});
