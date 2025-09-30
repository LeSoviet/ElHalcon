# El Halcon - Body Shop & Paint

Website for an automotive body shop with quote generator.

## Features

- 🎨 Modern and responsive design
- 📝 Quote generator with parts management
- 💾 Local storage of quote history
- 📄 PDF generation for quotes
- 🖨️ Direct printing functionality
- 📱 WhatsApp and email integration
- 🔐 Login system for generator access

## Technologies

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- jsPDF
- Framer Motion

## Installation

\`\`\`bash
npm install
\`\`\`

## Development

\`\`\`bash
npm run dev
\`\`\`

## Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Application pages
│   ├── page.tsx           # Home page
│   ├── login/             # Login page
│   ├── quote/             # Contact/quote page
│   └── presupuestos/      # Quote generator (Spanish)
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── ...               # Other components
└── lib/                  # Utilities and functions
\`\`\`

## Configuration

For production use, update:
- Contact information in `components/footer.tsx`
- Company information in `app/page.tsx`
- Login credentials in `app/login/page.tsx`

## License

© 2025 El Halcon. All rights reserved.
