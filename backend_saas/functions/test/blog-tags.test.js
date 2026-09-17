import test from "node:test";
import assert from "node:assert/strict";
import {normalizeBlogTags} from "../src/utils/blog-tags.js";

test("normalizes current tag arrays", () => {
  assert.deepEqual(normalizeBlogTags([" Negocios ", "", null, "IA"]), ["Negocios", "IA"]);
});

test("keeps compatibility with legacy single tags", () => {
  assert.deepEqual(normalizeBlogTags(" Producto "), ["Producto"]);
});

test("returns no tags for missing or invalid values", () => {
  assert.deepEqual(normalizeBlogTags(undefined), []);
  assert.deepEqual(normalizeBlogTags({name: "Producto"}), []);
});
