# Assets Folder

This folder is for storing images and other media files for your portfolio.

## 📁 Recommended Structure

```
assets/
├── images/
│   ├── profile.jpg          # Your profile photo
│   ├── projects/
│   │   ├── project1.jpg     # Project 1 screenshot
│   │   ├── project2.jpg     # Project 2 screenshot
│   │   └── project3.jpg     # Project 3 screenshot
│   └── background.jpg       # Optional background image
├── icons/                   # Custom icons (if any)
└── documents/              # Resume, CV, etc. (if any)
```

## 🖼️ Image Guidelines

- **Profile Photo**: Recommended size: 400x400px or larger (square aspect ratio)
- **Project Screenshots**: Recommended size: 800x600px or 1200x800px
- **Format**: Use JPG for photos, PNG for screenshots with text
- **File Size**: Keep images under 500KB for fast loading
- **Optimization**: Compress images before adding them

## 🔗 How to Use

1. Place your images in the appropriate subfolder
2. Update the image paths in `index.html`:

```html
<!-- Profile photo -->
<img src="assets/images/profile.jpg" alt="Your Name" class="w-full h-full object-cover">

<!-- Project image -->
<img src="assets/images/projects/project1.jpg" alt="Project Name" class="w-full h-48 object-cover">
```

## 🛠️ Image Optimization Tools

- **Online**: TinyPNG, Compressor.io, Squoosh.app
- **Desktop**: ImageOptim (Mac), FileOptimizer (Windows)
- **Command Line**: ImageMagick, jpegoptim

## 📱 Responsive Images

For better performance on mobile devices, consider using different image sizes:

```html
<picture>
    <source media="(min-width: 768px)" srcset="assets/images/projects/project1-large.jpg">
    <source media="(min-width: 480px)" srcset="assets/images/projects/project1-medium.jpg">
    <img src="assets/images/projects/project1-small.jpg" alt="Project Name" class="w-full h-48 object-cover">
</picture>
```

## 🎨 Image Sources

- **Free Stock Photos**: Unsplash, Pexels, Pixabay
- **Icons**: Font Awesome (already included), Feather Icons, Heroicons
- **Placeholder Images**: Placeholder.com, Lorem Picsum

---

*Remember to optimize your images for web use to ensure fast loading times!* 