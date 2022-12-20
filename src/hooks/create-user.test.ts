import { renderHook, act } from "@testing-library/react";
import createUser from "./create-user";
import goRest from "../externals/axios/go-rest";

jest.mock("../externals/axios/go-rest");

describe("createUser", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  test("creates a new user", async () => {
    const { result } = renderHook(createUser);

    const initialUser = result.current.user;

    const mockedAxios = goRest as jest.Mocked<typeof goRest>;
    mockedAxios.get.mockResolvedValue({
      data: "User created successfully",
    });

    await act(async () => {
      result.current.onChange({ key: "name", value: "Testevaldo" });
      result.current.onChange({ key: "email", value: "testevaldo@gmail.com" });
      await result.current.execute();
    });

    const finalUser = result.current.user;

    expect(initialUser.id).toBeDefined();
    expect(initialUser.id).toBeNull();
    expect(initialUser.name).toBeDefined();
    expect(initialUser.name).toBe("");
    expect(initialUser.email).toBeDefined();
    expect(initialUser.email).toBe("");
    expect(finalUser.name).toBeDefined();
    expect(finalUser.name).toBe("Testevaldo");
    expect(finalUser.email).toBeDefined();
    expect(finalUser.email).toBe("testevaldo@gmail.com");

    expect(mockedAxios.get).toBeCalledTimes(1);
  });
});
