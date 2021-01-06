import { renderHook } from "@testing-library/react-hooks";
import { COMPONENT_NAME } from "./COMPONENT_NAME";

describe("COMPONENT_NAME hook", () => {
  test("should return default value", () => {
    const { result } = renderHook(() => COMPONENT_NAME());
    const { data } = result.current;

    expect(data).toBe(null);
  });
});
