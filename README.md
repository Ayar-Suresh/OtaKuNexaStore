# OtakuNexa Landing Page

![OtakuNexa](https://otakunexa.online/assets/search_icon.png)

A high-performance, neon-themed landing page for **OtakuNexa** — the ultimate free anime streaming and batch download application for Android. 

Live Demo: [https://otakunexa.online](https://otakunexa.online)

## 🚀 Features

- **Cyberpunk / Neon Aesthetics:** Beautiful glowing pink and cyan accents, background particle animations, and a glitch text effect for the ultimate Otaku feel.
- **Smart Download Routing:** Built-in randomized server selector for APK downloads. Bypasses Android's Google Drive app prompt for a seamless browser-based download, with an automatic fallback mirror if the primary download fails.
- **Web App Integration:** Direct links to the lightweight web version of the platform.
- **Fully Responsive:** Perfectly optimized for all devices, preventing dropdown glitches and text overflow on smaller screens. 
- **Easy Configuration:** No need to touch HTML. Manage download links, web app URL, and tutorial videos entirely through a single `config.js` file.

## 🛠️ Configuration

To update your download links or videos, simply open the `config.js` file and edit the variables:

```javascript
const CONFIG = {
    // The "Fastest" server. Usually GitHub Releases or a direct link.
    appServer1: "YOUR_PRIMARY_LINK", 
    
    // The "Backup" server. Google Drive, MediaFire, etc.
    appServer2: "YOUR_BACKUP_LINK",
    
    // URL where your web app is hosted
    webUrl: "YOUR_WEB_URL",
    
    // The YouTube embed connection URL
    tutorialVideo: "YOUR_YOUTUBE_EMBED_URL"
};
```
No HTML knowledge required!

## 🌐 Is a README good for a landing page?

**Absolutely!** Even if it's "just" a landing page, having a `README.md` is incredibly valuable because:
1. **Professionalism:** It shows anyone looking at your source code (like future employers, open-source contributors, or developers) that you organize your projects intelligently.
2. **Easy Maintenance:** It explains how to deploy and configure the site (like the `config.js` explanation above). If you come back to the code 6 months from now, you'll immediately know how to update it.
3. **SEO & Link Building:** GitHub repositories rank high on Google. A good README with backlinks to your live site helps drive traffic and improves search engine visibility.

## 👨‍💻 Author
**Ayar Suresh**