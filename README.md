<div align="center">
  <img src="https://img.icons8.com/color/120/000000/shop.png" alt="ShopLogo" height="120">
  
  <h1>✨ E-Commerce Website Layout</h1>
  <p>
    A fully responsive, premium e-commerce web application built using HTML5, CSS3, and Vanilla JavaScript. Features a robust cart system, modern glassmorphism aesthetics, and smooth micro-animations.
  </p>

  <p>
    <a href="#features"><strong>Explore the features »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kratagy44/E-Commerce-Websit/issues">Report Bug</a>
    ·
    <a href="https://github.com/kratagy44/E-Commerce-Websit/issues">Request Feature</a>
  </p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
  </p>
</div>

<br />

## 🌟 About The Project

This project demonstrates a beautifully structured and robust e-commerce frontend. Using completely vanilla web technologies, the web app offers a premium user experience featuring **sleek glassmorphism**, intuitive **micro-animations**, and a highly scalable **CSS Variables Design System**. 

The app includes dynamic rendering of products from a local JavaScript catalog, seamless product detail views with image previews, and a solid local-storage cart management system to tally quantities accurately.

<div align="center">
  <img src="https://via.placeholder.com/600x350/f8fafc/4f46e5?text=Beautiful+Glassmorphism+Header+%26+Slider" alt="Home Page" width="45%" />
  <img src="https://via.placeholder.com/600x350/f8fafc/4f46e5?text=Sophisticated+Product+Detail+Page" alt="Product Details" width="45%" />
</div>

<br />

## 🚀 Key Features

* **🎨 Premium Aesthetics**: Built with a modern design system including a sleek Indigo (#4f46e5) accent color, custom border radii, and soft, realistic drop shadows.
* **✨ Smooth Micro-Animations**: Interactive components like product cards and buttons elevate gracefully on hover with clean CSS transitions and enhanced layered shadows (box-shadow).
* **🪟 Glassmorphism Header**: The sophisticated fixed navigation bar features beautiful backdrop-filter: blur translucent styling.
* **🛒 Robust Cart Engine**: Re-engineered JavaScript cart logic securely tracks item frequencies, dynamically updates total pricing, and stores state via local storage. Includes a flawless empty/full rendering cycle.
* **📱 Responsive Layout**: Fully fluid grid systems ensure the shopping experience looks amazing on Desktops, Tablets, and Smartphones.
* **🔔 Toast Notifications**: Interactive alerts slide into view organically to confirm cart additions.

<br />

## 🛠️ Built With

* **Vanilla JavaScript (ES6)** - Elegant DOM manipulation and cart state management
* **CSS3** - Advanced techniques including flexbox, custom properties (`:root` variables), media queries, and animations
* **HTML5** - Semantic layouts and structure
* **jQuery & Slick Carousel** - Beautiful homepage promotional hero slider

<br />

## 📁 Project Structure

```
E-Commerce-Websit/
├── index.html              # Homepage with hero slider
├── content.html            # Products listing page
├── contentDetails.html      # Product detail view
├── cart.html               # Shopping cart page
├── orderPlaced.html        # Order confirmation page
├── header.html             # Reusable header component
├── footer.html             # Reusable footer component
├── slider.html             # Promotional slider component
├── cart.js                 # Cart functionality & local storage
├── content.js              # Product catalog & rendering
├── contentDetails.js       # Product detail page logic
├── orderPlaced.js          # Order confirmation logic
├── css/                    # Stylesheets directory
├── js/                     # JavaScript modules directory
├── img/                    # Images and assets directory
├── package.json            # Project dependencies
└── .gitattributes          # Git configuration
```

<br />

## 💻 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You just need a modern web browser to view this locally! However, if you want local development servers:
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kratagy44/E-Commerce-Websit.git
   cd E-Commerce-Websit
   ```

2. Open `index.html` in your favorite web browser!

**Or using a live server (recommended for local storage cart logic):**
   ```sh
   npx serve .
   ```
   Then navigate to `http://localhost:3000`

### Alternative: Using Python
   ```sh
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`

<br />

## 🎯 Usage

1. **Browse Products**: Explore the product catalog on the products page
2. **View Details**: Click on any product to see detailed information and images
3. **Add to Cart**: Add items to your shopping cart with quantity adjustment
4. **Checkout**: Review your cart and proceed to order confirmation
5. **Cart Persistence**: Your cart is saved in local storage and persists across sessions

<br />

## 🎨 Customization

### Theme Colors
Edit CSS variables in your stylesheet:
```css
:root {
  --primary-color: #4f46e5;
  --secondary-color: #ffffff;
  --accent-color: #10b981;
}
```

### Adding Products
Modify the product catalog in `content.js` to add new items:
```javascript
const products = [
  {
    id: 1,
    name: "Product Name",
    price: 99.99,
    image: "path/to/image.jpg",
    description: "Product description"
  }
  // Add more products...
];
```

<br />

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br />

## 📝 License

This project is open source and available under the MIT License.

<br />

## 📧 Contact & Support

- **Report a Bug**: [GitHub Issues](https://github.com/kratagy44/E-Commerce-Websit/issues)
- **Request a Feature**: [GitHub Issues](https://github.com/kratagy44/E-Commerce-Websit/issues)

<br />

---

<div align="center">
  <p><strong>Designed with ❤️ for a modern web experience.</strong></p>
  <p>⭐ If you find this project helpful, please consider giving it a star!</p>
</div>