import test from "node:test";
import assert from "node:assert/strict";
import {getBlogCategories, getPostTagKeys, normalizePostTags} from "../lib/blogTags.mjs";

test("normalizes legacy strings and arrays while ignoring invalid tags", () => {
  assert.deepEqual(normalizePostTags(" Producto "), [{key: "producto", label: "Producto"}]);
  assert.deepEqual(normalizePostTags([" IA ", "", null]), [{key: "ia", label: "IA"}]);
});

test("deduplicates case variants and sorts labels using Spanish rules", () => {
  const categories = getBlogCategories([{tags: ["Negocios", " IA"]}, {tags: ["negocios", "Análisis"]}, {}]);
  assert.deepEqual(categories, [{key: "análisis", label: "Análisis"}, {key: "ia", label: "IA"}, {key: "negocios", label: "Negocios"}]);
});

test("makes every tag on a post available to filtering", () => {
  assert.deepEqual(getPostTagKeys({tags: ["Producto", "Casos"]}), ["producto", "casos"]);
  assert.deepEqual(getPostTagKeys({}), []);
});
