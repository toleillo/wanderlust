/**
 * batch-generate.js
 * Genera múltiples artículos en secuencia desde un fichero de destinos.
 *
 * Uso:
 *   node batch-generate.js [destinations-file.json]
 *   node batch-generate.js  (usa destinations.json por defecto)
 *
 * El fichero de destinos sigue el formato de destinations.example.json.
 * Los artículos se guardan en scripts/output/ y se muestra un resumen al final.
 */

import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── load destinations ───────────────────────────────────────────────────────

const inputFile = process.argv[2] || path.join(__dirname, "destinations.json");

if (!fs.existsSync(inputFile)) {
  console.error(`❌  No se encontró el fichero: ${inputFile}`);
  console.error(`   Crea un fichero destinations.json basándote en destinations.example.json`);
  process.exit(1);
}

const destinations = JSON.parse(fs.readFileSync(inputFile, "utf8"));
console.log(`🗺️  ${destinations.length} destinos a generar\n`);

// ─── run sequentially ────────────────────────────────────────────────────────

const results = [];
let totalCost = 0;

for (const [i, dest] of destinations.entries()) {
  const { city, country, category = "europe", narrator = "carmen", heroImage = "" } = dest;
  console.log(`\n[${i + 1}/${destinations.length}] 🌍 ${city}, ${country}`);

  try {
    const args = [city, country, category, narrator, heroImage]
      .map((a) => `"${a}"`)
      .join(" ");

    const output = execSync(`node ${path.join(__dirname, "generate-article.js")} ${args}`, {
      encoding: "utf8",
      cwd: __dirname,
      env: process.env,
      timeout: 120_000,
    });

    // Extract cost from output
    const costMatch = output.match(/Coste estimado: \$([0-9.]+)/);
    if (costMatch) totalCost += parseFloat(costMatch[1]);

    console.log(output);
    results.push({ city, status: "ok" });
  } catch (err) {
    console.error(`❌  Error generando ${city}: ${err.message}`);
    results.push({ city, status: "error", error: err.message });
  }

  // Delay between calls to avoid rate limits
  if (i < destinations.length - 1) {
    console.log("⏳  Esperando 3s antes del siguiente...");
    await new Promise((r) => setTimeout(r, 3000));
  }
}

// ─── summary ─────────────────────────────────────────────────────────────────

console.log("\n" + "─".repeat(50));
console.log("📊  RESUMEN");
console.log("─".repeat(50));
for (const r of results) {
  console.log(`  ${r.status === "ok" ? "✅" : "❌"}  ${r.city}${r.status === "error" ? ` — ${r.error}` : ""}`);
}
console.log(`\n💰  Coste total estimado: $${totalCost.toFixed(4)}`);
console.log(`\n📁  Artículos guardados en: ${path.join(__dirname, "output/")}`);
console.log(`\n📋  Próximo paso: añade los artículos al array ARTICLES en src/data/articles.js`);
