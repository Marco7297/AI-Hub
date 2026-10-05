# Bestseller Books

Extracted from bestsellers-book-showcase. Original source: public/landing-pages/bestsellers-book-showcase.html

Pinned source SHA-256: 7c1ed1ca4a4c58f1c33956c84edd8f7ba450ea0312df718701e634a207568138

The 3 original titles are edition inputs of one book construction. The first source title is the default. Surrounding shelves, page copy, navigation, dust, and unrelated scene artwork are excluded.

Open preview.html using a static HTTP server. Query options: edition, controls=false, background=dark|light|checker|transparent, open=true. The React BestsellerBooks component accepts the same props, plus className and style; copy the relevant dist/3d-assets/books directories into the host public directory.

mountBestsellers(host, options) creates the CSS perspective book and returns dispose and select. The original three JPEG covers and muted looping MP4 artwork remain unchanged.

Binary media uses immutable Supabase URLs. assets.js lists the byte-identical optional local assets for explicit self-hosting; it is not an automatic network fallback. Fonts are loaded only by the constructions that use them. Included font licenses cover those source fonts.

Controls: edition selection; pointer or arrow-key rotation; R/Home resets; background selection. Reading books also support Space to open/close and PageUp/PageDown to turn pages. Respect reduced motion and call dispose when removing the standalone view.
