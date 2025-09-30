# Technology Consultant Portfolio Website

A modern, professional portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🏠 Landing page with hero section and call-to-action
- 📝 Blog with markdown support
- 📧 Contact form with API integration
- ⚡ Fast performance with Next.js optimizations
- 📱 Mobile-friendly navigation
- 🎯 SEO-optimized

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Personal Information

Update the following files with your information:

**Navigation (`components/Navigation.tsx`)**
- Change "Your Name" to your actual name (line 17)

**Layout (`app/layout.tsx`)**
- Update the site title and description (lines 17-18)

**Landing Page (`app/page.tsx`)**
- Customize the hero section headline and description
- Update the services section with your actual services
- Replace the portfolio examples with your real projects
- Modify the call-to-action text

**Contact Page (`app/contact/page.tsx`)**
- Update social media links (lines 154-162)
- Add your actual email, LinkedIn, and GitHub URLs

### 2. Blog Posts

Add new blog posts by creating `.md` files in `content/posts/` with this format:

```markdown
---
title: "Your Blog Post Title"
date: "2024-03-15"
excerpt: "A brief description of your post"
---

# Your Blog Post Title

Your content here...
```

### 3. Contact Form Integration

To receive contact form submissions, edit `app/api/contact/route.ts`:

**Option 1: Email Service (Recommended)**
- Use SendGrid, AWS SES, or Resend
- Install the service's npm package
- Add API keys to `.env.local`
- Implement email sending in the API route

**Option 2: Database Storage**
- Set up a database (PostgreSQL, MongoDB, etc.)
- Store submissions for review
- Add email notifications

**Example with Resend:**

```bash
npm install resend
```

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'contact@yourdomain.com',
  to: 'your.email@example.com',
  subject: `New contact from ${name}`,
  text: message,
});
```

### 4. Styling

The site uses Tailwind CSS. Customize colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#yourcolor',
      secondary: '#yourcolor',
    },
  },
},
```

### 5. Add a Favicon

Replace the favicon by adding your icon files to the `app` directory:
- `favicon.ico`
- `icon.png` or `icon.svg`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Other Platforms

This Next.js app can also be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Self-hosted with Node.js

## Environment Variables

Create a `.env.local` file for sensitive data:

```env
# Email Service
RESEND_API_KEY=your_api_key
SENDGRID_API_KEY=your_api_key

# Database (if using)
DATABASE_URL=your_connection_string
```

## File Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   └── Navigation.tsx     # Navigation component
├── content/               # Content files
│   └── posts/            # Blog posts (.md files)
├── lib/                   # Utility functions
│   └── blog.ts           # Blog post utilities
└── public/               # Static files
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter
- **Deployment**: Vercel-ready

## License

MIT License - Feel free to use this for your own portfolio!
