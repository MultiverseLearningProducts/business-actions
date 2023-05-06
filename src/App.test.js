/** @jest-environment jsdom */
const { fetch } = require("whatwg-fetch");
global.fetch = fetch;
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("tests", () => {
  it("should do something amazing", () => {
    expect(true).toBe(false);
  });
  it("should do something truely amazing", () => {
    expect(true).toBe(true);
  });
});
