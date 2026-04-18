import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        # Start the dev server in the background
        process = await asyncio.create_subprocess_shell(
            "npm run dev",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )

        # Wait for the server to be ready
        max_retries = 30
        for i in range(max_retries):
            try:
                await page.goto("http://localhost:3000")
                break
            except:
                await asyncio.sleep(1)

        # Create directory for screenshots
        os.makedirs("verification/v2", exist_ok=True)

        # Verify Hero
        await page.screenshot(path="verification/v2/hero.png")

        # Scroll to Interlocking
        await page.evaluate("document.getElementById('galeria').scrollIntoView()")
        await asyncio.sleep(2) # Wait for animation
        await page.screenshot(path="verification/v2/interlocking.png")

        # Scroll to Bento
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight / 2)")
        await asyncio.sleep(2)
        await page.screenshot(path="verification/v2/bento_collection.png")

        # Scroll to Footer
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await asyncio.sleep(1)
        await page.screenshot(path="verification/v2/footer.png")

        # Test Hover Effect on MAVI
        await page.hover("h1:has-text('MAVI')")
        await asyncio.sleep(1)
        await page.screenshot(path="verification/v2/hero_hover.png")

        print("Verification completed successfully.")

        # Cleanup
        process.kill()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
