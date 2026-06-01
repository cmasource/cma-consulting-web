import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("CMA Consulting landing", () => {
  test("loads the home, header, CTAs and main sections", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Gestión, procesos y software para operar mejor.",
    );

    const headerLogos = page.getByRole("banner").getByAltText("CMA Consulting");
    await expect(headerLogos).toHaveCount(1);
    await expect(headerLogos.first()).toBeVisible();

    await expect(
      page.getByRole("link", { name: /Solicitar diagnóstico/i }).first(),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /Ver soluciones/i })).toBeVisible();

    for (const section of [
      "Del desorden operativo al sistema de gestión.",
      "Nuestro método operativo",
      "Criterio empresarial. Implementación digital.",
      "Software boutique para problemas concretos de negocio.",
      "Un ecosistema de herramientas para diagnosticar, operar y medir.",
      "Casos y laboratorios",
      "De la idea a la implementación",
      "Consultoría con visión de negocio y tecnología",
      "Hablemos de tu empresa",
    ]) {
      await expect(page.getByRole("heading", { name: section })).toBeVisible();
    }

    await expect(page.getByText("Operación dispersa")).toBeVisible();
    await expect(page.getByText("Diagnóstico CMA")).toBeVisible();
    await expect(page.getByText("Empresa con sistema")).toBeVisible();
    await expect(page.getByText("cma_source").first()).toBeVisible();
    await expect(page.getByText("cmaQuantBot")).toBeVisible();
    const bodyText = await page.locator("body").innerText();
    expect(bodyText).not.toContain("CMA_SOURCE");
    expect(bodyText).not.toContain("CMA Source");
    expect(bodyText).not.toContain("CMA_Source");
    expect(bodyText).not.toContain("cma source");
    expect(bodyText).not.toContain("cmQuantBot");
    await expect(page.locator("form")).toBeVisible();
  });

  test("mobile layout has no horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth - window.innerWidth;
    });

    expect(overflow).toBeLessThanOrEqual(1);
    await expect(page.getByRole("button", { name: /Abrir menú/i })).toBeVisible();
  });

  test("contact form shows simulated success state", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const form = page.locator("form");
    await form.scrollIntoViewIfNeeded();
    await form.getByLabel("Nombre").fill("Cliente demo");
    await form.getByLabel("Email").fill("demo@empresa.com");
    await form
      .getByLabel("Mensaje")
      .fill("Necesito ordenar procesos y evaluar una solución digital.");
    await expect(form.getByLabel("Nombre")).toHaveValue("Cliente demo");
    await expect(form.getByLabel("Email")).toHaveValue("demo@empresa.com");
    await form.getByRole("button", { name: /Enviar consulta/i }).click();

    await expect(page.getByText(/Consulta registrada en modo demo/i)).toBeVisible();
  });

  test("primary diagnosis CTAs are visible", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const diagnosisLinks = page.getByRole("link", {
      name: /Solicitar diagnóstico/i,
    });

    await expect(diagnosisLinks.first()).toBeVisible();
    await expect(diagnosisLinks.nth(1)).toBeVisible();
  });

  test("theme toggle switches between light and dark mode", async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem("theme", "light");
    });
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const isMobileNav = (page.viewportSize()?.width ?? 0) < 1024;

    if (isMobileNav) {
      await page.getByRole("button", { name: /Abrir menú/i }).click();
    }

    const toggle = isMobileNav
      ? page
          .locator("#mobile-menu")
          .getByRole("button", { name: /Activar modo oscuro|Activar modo claro/i })
      : page
          .getByRole("banner")
          .getByRole("button", { name: /Activar modo oscuro|Activar modo claro/i });

    await expect(toggle).toBeVisible();
    await toggle.click();
    await expect(page.locator("html")).toHaveClass(/dark/);
    await expect(
      page.getByRole("button", { name: /Activar modo claro/i }).first(),
    ).toBeVisible();
  });

  test("floating WhatsApp widget is available", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const whatsappLink = page.getByTestId("whatsapp-widget");

    await expect(whatsappLink).toBeVisible();
    await expect(whatsappLink).toHaveAttribute("href", /#contacto|https?:\/\//);
  });

  test("basic accessibility scan has no serious or critical violations", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    const seriousOrCritical = results.violations.filter(
      (violation) =>
        violation.impact === "critical" || violation.impact === "serious",
    );

    expect(seriousOrCritical).toEqual([]);
  });
});
