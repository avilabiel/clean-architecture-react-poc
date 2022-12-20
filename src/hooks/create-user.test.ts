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
      await result.current.execute();
    });

    expect(initialUser.id).toBeDefined();
    expect(initialUser.id).toBeNull();
    expect(initialUser.name).toBeDefined();
    expect(initialUser.name).toBe("");
    expect(initialUser.email).toBeDefined();
    expect(initialUser.email).toBe("");
    expect(mockedAxios.get).toBeCalledTimes(1);
  });
});
