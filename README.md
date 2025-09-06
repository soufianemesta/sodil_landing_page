# Sodil Delivery Landing Page

Welcome to the Sodil Delivery Landing Page project! This project is designed for Sodil, a Moroccan e-commerce startup targeting delivery agents in Casablanca. The landing page is built using Next.js with a mobile-first approach and styled with TailwindCSS.

## Features

- **Bilingual Support**: The landing page supports both French and Arabic languages, with a simple language switcher.
- **Responsive Design**: The layout is clean and responsive, ensuring a great user experience on all devices.
- **Sections**:
  - Hero section with a headline, subtext, and a call-to-action button emphasizing Casablanca.
  - "Why Join Sodil" section highlighting the benefits of joining.
  - "How It Works" section providing a step-by-step guide.
  - Application form integrated with Google Sheets via API.
  - FAQ section addressing common queries.
  - Final strong call-to-action.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/sodil-delivery-landing.git
   cd sodil-delivery-landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the landing page.

## Project Structure

- `src/app/layout.tsx`: Main layout of the application.
- `src/app/page.tsx`: Main landing page component.
- `src/app/api/submit/route.ts`: API route for form submission.
- `src/components/`: Contains all the React components used in the landing page.
- `src/lib/translations.ts`: Translation strings for French and Arabic.
- `src/types/index.ts`: TypeScript types and interfaces.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to refine the text content and add any additional information as needed!