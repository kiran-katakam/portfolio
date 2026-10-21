// Fails the build when project data would crash a page or ship a broken link.
import assert from "node:assert/strict";
import { projects, STATUS } from "../src/data/projects.js";

const slugs = new Set();
for (const p of projects) {
  assert.ok(!slugs.has(p.slug), `duplicate slug: ${p.slug}`);
  slugs.add(p.slug);
  assert.ok(STATUS[p.status], `${p.slug}: unknown status "${p.status}"`);
  assert.match(p.abbr ?? "", /^[A-Z]{3}$/, `${p.slug}: abbr must be 3 capital letters`);
  assert.ok(p.links?.repos?.length, `${p.slug}: needs at least one repo link`);
  for (const url of [p.links.live, ...p.links.repos.map((r) => r.url), p.code?.url].filter(Boolean)) {
    assert.match(url, /^https:\/\//, `${p.slug}: link must be https: ${url}`);
  }
}
console.log(`project data ok (${projects.length} projects)`);
