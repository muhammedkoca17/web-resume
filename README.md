# Muhammed Koca — Editorial AI/ML Engineer Portfolio & Web Resume

[![Build Status](https://img.shields.io/badge/Build-Passing-18C153?style=for-the-badge&logo=vite&logoColor=white)](https://github.com/muhammedkoca17/web-resume)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Netlify-Ready-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

A luxury, award-winning **Editorial Graphic Design (Modernist Swiss / Bio-Tech Minimalist)** web resume and interactive portfolio showcasing **Muhammed Koca**'s expertise across Applied Machine Learning, Industrial Robotics Automation, and Autonomous Generative AI systems.

---

## 🌟 Proje Özeti ve Vizyon

Bu proje, eğitmen **Onur Yalçın** tarafından verilen **"Web Geliştirme; Yapay Zeka Proje Yönergesi (2026)"** kapsamında geliştirilmiş; sıradan AI şablonları ("AI slop") yerine dünya çapında 7 açık tasarım kütüphanesinin (`emilkowalski/skills`, `pbakaus/impeccable`, `leonxlnx/taste-skill`, `nextlevelbuilder/ui-ux-pro-max-skill`, `mrdoob/three.js`) prensiplerini uygulayan üretim sınıfı bir web deneyimidir.

### 🎨 Editoryal Tasarım Paleti
* **Zemin:** Sıcak Doğal Krem (`#FBFBF9` / `#F5F4EE`)
* **Yüzey:** Saf Beyaz Kartlar (`#FFFFFF`) ve İnce Lüks Çerçeveler (`rgba(18, 19, 22, 0.07)`)
* **Tipografi:** İsviçre Editoryal Mürekkep Siyahı (`#121316`) ve Okunabilir İkincil Metin (`#575965`)
* **Vurgu:** Canlı Yeşil (`#18C153` / `#22C55E`) ve Nane Tonları (`#DCFCE7`)
* **Font Ailesi:** `Syne` (Display) + `Plus Jakarta Sans` (Body) + `JetBrains Mono` (Technical Data)

---

## ⚡ 60 FPS Sıfır Gecikmeli İmleç Takip Motoru (Hero Canvas)

Web sitesinin hero alanı, MP4 video arama (`currentTime`) gecikmelerini ve donmalarını engellemek için önceden çıkarılmış **64 adet 1080p dairesel WebP kareyi** (`public/frames/`) ve tam karşıya bakan merkez kareyi (`center.webp`) kullanır:

1. **Dairesel Açı Enterpolasyonu:** `Math.atan2(dy, dx)` açısı, en kısa yol dairesel lerp (`lerpAngle`) fonksiyonu ve `0.24` sönümleme faktörüyle ~35ms içinde imleci sıfır gecikmeyle takip eder.
2. **Merkez Göz Teması (Deadzone):** İmleç karakterin yüzüne yaklaştığında (%15 ekran yarıçapı) doğrudan kullanıcının gözünün içine bakan `center.webp` karesi devreye girer.
3. **Sıfır Hayalet (Zero Ghosting):** Alfa harmanlama yapılmaz; canvas üzerine 60 FPS hızında tek bir kristal netliğinde kare çizilir.

---

## 📋 Yönerge Kriterleri & Uyum Tablosu (Onur Yalçın 2026)

| Yönerge Şartı | Durum | Projede Uygulanan Çözüm |
| :--- | :---: | :--- |
| **1. Modern JS Kütüphanesi / Çatısı** | ✅ Eksiksiz | **React 19 + Vite (TypeScript)**: Sıfır gecikmeli HMR ve ultra hafif bundle. |
| **2. CSS Kütüphanesi** | ✅ Eksiksiz | **Tailwind CSS v3**: Özel İsviçre tipografisi ve Emil Kowalski fizik token'ları. |
| **3. LocalStorage Veri Kalıcılığı** | ✅ Eksiksiz | **`useLocalStorage`**: Ziyaretçi not defteri, proje favorileme ve form taslağı saklama. |
| **4. Yapay Zeka Süreci** | ✅ Eksiksiz | ChatGPT DALL-E 3, Google Flow ve Antigravity çoklu ajan ekibi ile geliştirildi. |
| **5. GitHub Teslimi** | ✅ Eksiksiz | `https://github.com/muhammedkoca17/web-resume` public deposu. |
| **6. Netlify / Vercel Canlı Linki** | ✅ Eksiksiz | `netlify.toml` SPA yönlendirmeleri ve statik derleme uyumu. |

---

## 🛠️ Yerel Kurulum & Çalıştırma

```bash
# 1. Proje dizinine gidin
cd web-resume

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm run dev

# 4. Üretim derlemesi (Production Build) alın
npm run build
```

---

## 🚀 Netlify Canlı Yayın Adımları

Proje kökündeki `netlify.toml` dosyası Netlify için optimize edilmiştir:

1. [Netlify](https://app.netlify.com/)'a giriş yapın.
2. **"Add new site"** -> **"Import an existing project"** seçeneğine tıklayın.
3. GitHub hesabınızı bağlayıp **`muhammedkoca17/web-resume`** deposunu seçin.
4. Derleme ayarları otomatik tanınacaktır:
   * **Build command:** `npm run build`
   * **Publish directory:** `dist`
5. **"Deploy site"** butonuna basın; siteniz saniyeler içinde canlıya alınacaktır!

---

## 🤖 Yapay Zeka İstemleri Günlüğü (AI Prompts Log)

### 1. ChatGPT DALL-E 3 (Editoryal 3D Karakter Portresi):
```text
Create a stylized, vibrant, premium 3D digital character portrait using my uploaded photo as the PRIMARY IDENTITY REFERENCE.
Preserve my exact facial structure, jawline, eye shape, eyebrows, skin tone, hairstyle, and recognizable facial features.
Style: Modern stylish designer apparel — a tailored light bone-white / cream overshirt layered over a subtle sage-green minimalist inner tee.
Background: Perfectly flat, 100% uniform, solid bright green background (#18C153 / #22C55E) with ZERO shadows and ZERO gradients.
```

### 2. Google Flow (8 Yönlü İmleç Takip Videosu):
```text
Use the uploaded character image as the exact visual reference.
Create a smooth, seamless interactive-character animation designed specifically for a website cursor-tracking hero section.
The camera and subject's shoulders remain 100% rock-solid and motionless. ONLY the eyes and head turn to naturally follow a cursor.
Continuous 8-direction rotational sweep: Center -> Up -> Up-Right -> Right -> Down-Right -> Down -> Down-Left -> Left -> Up-Left -> Center eye contact.
```

---

© 2026 Muhammed Koca. Designed with Engineering Precision.
