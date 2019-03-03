import OnLeaveIntent from ".";

describe("OnLeaveIntent", () => {
  let callback;
  let onLeaveIntent;
  const delay = 1000;
  jest.useFakeTimers();

  beforeEach(() => {
    callback = jest.fn();
    onLeaveIntent = new OnLeaveIntent(callback, delay);
  });

  it("should run the callback function if user goes out of the screen", () => {
    jest.advanceTimersByTime(delay);
    document.dispatchEvent(new MouseEvent("mouseout"));

    expect(callback).toHaveBeenCalled();
  });

  it("should not run the callback function if user moves inside the page", () => {
    document.dispatchEvent(
      new MouseEvent("mouseout", { relatedTarget: new EventTarget() })
    );

    expect(callback).not.toHaveBeenCalled();
  });

  it("should not run the callback before the delay passed", () => {
    document.dispatchEvent(new MouseEvent("mouseout"));

    expect(callback).not.toHaveBeenCalled();
  });

  it("should call the callback function only once", () => {
    jest.advanceTimersByTime(delay);
    document.dispatchEvent(new MouseEvent("mouseout"));
    document.dispatchEvent(new MouseEvent("mouseout"));

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
