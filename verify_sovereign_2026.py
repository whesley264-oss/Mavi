import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1920, 'height': 1080})

        process = await asyncio.create_subprocess_shell(
            "npm run dev",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )
        print("Starting dev server...")
        await asyncio.sleep(45)

        try:
            await page.goto("http://localhost:3000", timeout=60000)
            os.makedirs("verification/sovereign_2026", exist_ok=True)

            # 1. Kinetic Hero
            await page.screenshot(path="verification/sovereign_2026/01_hero.png")
            print("Captured Hero.")

            # 2. Manifesto Reveal
            await page.mouse.wheel(0, 1500)
            await asyncio.sleep(2)
            await page.screenshot(path="verification/sovereign_2026/02_manifesto.png")
            print("Captured Manifesto.")

            # 3. Fluid Gallery
            await page.mouse.wheel(0, 2500)
            await asyncio.sleep(2)
            await page.screenshot(path="verification/sovereign_2026/03_gallery.png")
            print("Captured Gallery.")

            # 4. Final Bento
            await page.mouse.wheel(0, 4000)
            await asyncio.sleep(2)
            await page.screenshot(path="verification/sovereign_2026/04_bento.png")
            print("Captured Bento.")

            print("Sovereign 2026 Verification Complete.")

        finally:
            process.terminate()
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
