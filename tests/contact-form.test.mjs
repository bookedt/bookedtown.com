import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire, Module } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { renderToStaticMarkup } from "react-dom/server";

const filename = fileURLToPath(new URL("../components/ContactForm.tsx", import.meta.url));
const compiled = ts.transpileModule(readFileSync(filename, "utf8"), {
  compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS },
}).outputText;

function render(bookingUrl) {
  const component = new Module(filename);
  const require = createRequire(filename);
  component.require = id => id === "../lib/config" ? { BOOKING_URL: bookingUrl } : require(id);
  component._compile(compiled, filename);
  return renderToStaticMarkup(component.exports.default());
}

test("an unconfigured booking route cannot collect data or claim a lead was received", () => {
  const html = render("");
  assert.match(html, /Online booking is being set up/);
  assert.match(html, /role="status"/);
  assert.doesNotMatch(html, /<form|<input|<textarea|we.ve got it|be in touch/i);
});

test("a configured calendar provides a direct booking route without a fake submission", () => {
  const html = render("https://booking.example.test/calendar");
  assert.match(html, /href="https:\/\/booking.example.test\/calendar"/);
  assert.match(html, /Open booking calendar/);
  assert.doesNotMatch(html, /<form|<input|we.ve got it/i);
});
