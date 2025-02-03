# REST Countries API with Theme Switcher

A responsive web application built with Next.js, TypeScript, React, and Tailwind CSS that integrates with the REST Countries API to display country information with a dark/light theme switcher.

## 🚀 Features

- View all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Toggle between light and dark mode
- Fully responsive design for mobile and desktop layouts
- Server-side rendering for improved performance
- TypeScript for enhanced type safety and developer experience

## 💻 Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [REST Countries API](https://restcountries.com/) - Countries data source

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/rest-countries-api.git
```

2. Install the dependencies:

```bash
cd rest-countries-api
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:

```
NEXT_PUBLIC_API_URL=https://restcountries.com/v3.1
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
rest-countries-api/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── [country]/
│       └── page.tsx
├── components/
│   ├── CountryCard.tsx
│   ├── SearchBar.tsx
│   ├── RegionFilter.tsx
│   ├── ThemeToggle.tsx
│   └── Header.tsx
├── lib/
│   └── api.ts
├── types/
│   └── index.ts
└── tailwind.config.ts
```

## 🎯 User Stories

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

## 🎨 Design

The application follows the design specifications provided by Frontend Mentor, ensuring:

- Responsive layout that works on mobile and desktop devices
- Interactive elements with hover and focus states
- Seamless theme switching between light and dark modes
- Accessible color contrast ratios
- Proper spacing and typography

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🙏 Acknowledgments

- Challenge by [Frontend Mentor](https://www.frontendmentor.io)
- REST Countries API for providing the data
