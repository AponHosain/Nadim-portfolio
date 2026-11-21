# Arjun Dev Portfolio (Hugo)

## Chalano
1. Hugo install korun (extended version): https://gohugo.io/installation/
2. Folder e giye:
   ```
   hugo server
   ```
   Browser e http://localhost:1313 khulun.
3. Production build:
   ```
   hugo --minify
   ```
   `public/` folder deploy korun (Netlify, Vercel, GitHub Pages etc.)

## Kothay ki change korben
| Ki | Kothay |
|---|---|
| Naam, role, email, phone, intro, about text | `hugo.toml` -> `[params]` |
| Menu | `hugo.toml` -> `[[menus.main]]` |
| Social links | `data/socials.yaml` |
| Services | `data/services.yaml` |
| Projects | `data/projects.yaml` |
| Testimonials | `data/testimonials.yaml` |
| Profile photo | `static/images/` e rekhe `hugo.toml` e `profileImage` update korun (transparent PNG best) |
| Resume | `static/files/resume.pdf` |
| Contact form | `hugo.toml` -> `formAction` e Formspree/Netlify endpoint din |
| Colors | `static/css/style.css` -> `:root` |
