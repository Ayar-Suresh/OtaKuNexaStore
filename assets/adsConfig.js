// ============================================================
//  OtakuNexa - ADS CONFIGURATION (The Money Maker)
// ============================================================
//  Control all your ads from this single file.
//  Set enabled: false to turn them off completely.
// ============================================================

const ADS_CONFIG = {
    // Master Switch: Set to false to hide ALL ads instantly.
    enableGlobalAds: false,

    slots: {
        // 1. Top Banner (visible on load)
        topBanner: {
            enabled: true,
            code: `
                <!-- PLACE YOUR TOP BANNER AD CODE HERE -->
             <script async="async" data-cfasync="false" src="https://pl28583757.effectivegatecpm.com/14ba1b46de6424c181d4513e22c69881/invoke.js"></script>
<div id="container-14ba1b46de6424c181d4513e22c69881"></div>
            `
        },

        // 2. Mid-Content (inside the article)
        midContent: {
            enabled: true,
            code: `
                <!-- PLACE YOUR NATIVE/MID BANNER AD CODE HERE -->
                <div style="background:#222; color:#555; padding:20px; text-align:center; border:1px dashed #444;">
                    [AD_SPACE: MID_CONTENT_300x250]
                </div>
            `
        },

        // 3. Pop-Under (sneaky but profitable)
        popUnder: {
            enabled: false, // Keep disabled for better UX unless necessary
            code: `
                <!-- PLACE POPUNDER SCRIPT HERE -->
                <script>console.log("Popunder loaded");</script>
            `
        }
    }
};

console.log("ADS_CONFIG Loaded. Global Status:", ADS_CONFIG.enableGlobalAds);

