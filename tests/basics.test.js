const { describe, test } = require("node:test");
const assert = require("node:assert");

const server = require("../src/server");

describe("Basic behaviour", () => {
  test("Opens a connection", () => {
    assert.doesNotThrow(() => {
      const s = server({ port: 7021 });
      s.close();
    });
  });

  test("Opens a ssl connection", () => {
    assert.doesNotThrow(() => {
      const s = server({ port: 7021, ssl: true });
      s.close();
    });
  });
});
