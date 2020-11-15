import { fetchEventData, addEvent } from ".";

describe("Event Data Service", () => {
  it("Return Event Data", async () => {
    const eventDataList = await fetchEventData();
    expect(eventDataList).toBeDefined();
  });
  it("Adds user data", async () => {
    const added = addEvent({});
    expect(added).toBeTruthy();
  });
});
