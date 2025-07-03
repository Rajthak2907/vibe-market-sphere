
# Obeyyo E-commerce Platform - Developer Documentation

## Project Overview
Obeyyo is a modern e-commerce platform built with React, TypeScript, and Tailwind CSS. The platform supports multiple product categories including Men's, Women's, Kids', Beauty, Footwear, and Accessories.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   └── Sidebar.tsx         # Navigation sidebar
│   ├── shared/                 # Reusable components
│   │   ├── FashionCarousel.tsx # Hero section carousel
│   │   ├── TabSection.tsx      # Category navigation tabs
│   │   ├── ProductCard.tsx     # Product display card
│   │   ├── ProductSlider.tsx   # Horizontal product slider
│   │   ├── ImageCarousel.tsx   # Image carousel component
│   │   ├── BrandsFlexSection.tsx # Brand grid display
│   │   ├── TShirtCategoriesSection.tsx # T-shirt categories
│   │   ├── OffersAndCouponsSection.tsx # Coupon display
│   │   ├── BiggestOfferSection.tsx # Special offers grid
│   │   ├── EverythingInOfferSection.tsx # Category offers
│   │   ├── PromoBanner.tsx     # Promotional banners
│   │   ├── RoundCategorySection.tsx # Round category icons
│   │   └── DealOfTheDay.tsx    # Daily deals component
│   ├── home/                   # Home page specific components
│   │   └── HeroSection.tsx     # Homepage hero section
│   ├── men/                    # Men's section components
│   │   ├── MenHeroSection.tsx  # Men's page hero
│   │   ├── MenShopByStyle.tsx  # Style categories
│   │   ├── MenBrandsSection.tsx # Brand promotions
│   │   ├── MenOffersSection.tsx # Offers and deals
│   │   └── MenProductSections.tsx # Product categories
│   ├── women/                  # Women's section components
│   │   ├── WomenHeroSection.tsx
│   │   ├── WomenShopByStyle.tsx
│   │   ├── WomenBrandsSection.tsx
│   │   ├── WomenOffersSection.tsx
│   │   └── WomenProductSections.tsx
│   └── ui/                     # UI components (shadcn/ui)
├── pages/
│   ├── home/
│   │   └── Index.tsx           # Homepage
│   ├── men/
│   │   └── MenPage.tsx         # Men's category page
│   ├── women/
│   │   └── WomenPage.tsx       # Women's category page
│   └── [other-pages].tsx       # Individual page files
├── data/
│   ├── homePageData.ts         # Homepage data
│   ├── menPageData.ts          # Men's page data
│   └── womenPageData.ts        # Women's page data
└── integrations/
    └── supabase/               # Database integration
```

## 🏗️ Architecture Overview

### Component Organization
- **Layout Components**: Header, footer, navigation, and overall page structure
- **Shared Components**: Reusable UI components used across multiple pages
- **Page-Specific Components**: Components unique to specific sections (men, women, etc.)
- **UI Components**: Base UI components from shadcn/ui library

### Data Management
- **Static Data**: Product data, categories, and content stored in `/data` folder
- **Local Storage**: Cart and wishlist functionality
- **Supabase Integration**: Database for dynamic content and user data

## 📄 Page Structure

### Homepage (`/`)
- **File**: `src/pages/home/Index.tsx`
- **Components**: Uses multiple home-specific sections
- **Data**: `src/data/homePageData.ts`

### Men's Page (`/men`)
- **File**: `src/pages/men/MenPage.tsx`
- **Components**: 
  - `MenHeroSection` - Hero carousel and navigation
  - `MenShopByStyle` - Style subcategories
  - `MenBrandsSection` - Brand promotions and T-shirt categories
  - `MenOffersSection` - Coupons and special offers
  - `MenProductSections` - Product categories (beauty, footwear, etc.)
- **Data**: `src/data/menPageData.ts`

### Women's Page (`/women`)
- **File**: `src/pages/women/WomenPage.tsx`
- **Components**: Similar structure to men's page but with women-specific content
- **Data**: `src/data/womenPageData.ts`

## 🎨 Styling & Themes

### Brand Colors
- **Primary Blue**: `obeyyo-blue` (#08a0ef)
- **Primary Pink**: `obeyyo-pink` (#fc2682)
- **Primary Red**: `obeyyo-red` (#fc334d)
- **Primary Orange**: `obeyyo-orange` (#fb8619)
- **Primary Yellow**: `obeyyo-yellow` (#f9b704)

### Typography
- **Font Family**: Poppins
- **Font Weights**: Regular (400), Medium (500), Semibold (600), Bold (700), Black (900)

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## 🛠️ Key Features

### Product Management
- **Product Cards**: Standardized product display with ratings, prices, and actions
- **Product Sliders**: Horizontal scrolling product lists
- **Product Grids**: Responsive grid layouts for product listings

### Cart & Wishlist
- **Local Storage**: Cart and wishlist data persisted locally
- **Event System**: Custom events for cart/wishlist updates
- **Badge Updates**: Real-time count updates in navigation

### Navigation
- **Multi-level**: Category tabs, subcategories, and filters
- **Mobile Optimized**: Collapsible sidebar and bottom navigation
- **Search**: Global search functionality

### Promotional Features
- **Banners**: Promotional banners with call-to-action buttons
- **Coupons**: Copy-to-clipboard coupon codes
- **Deals**: Time-limited offers and special promotions
- **Brand Promotions**: Brand-specific offers and showcases

## 🔧 Development Guidelines

### Adding New Components
1. Create component in appropriate folder (`shared/`, `men/`, `women/`, etc.)
2. Use TypeScript interfaces for props
3. Follow existing naming conventions
4. Add to appropriate page component

### Adding New Pages
1. Create page component in `src/pages/[category]/`
2. Add route to `src/App.tsx`
3. Create corresponding data file in `src/data/`
4. Update navigation links

### Data Structure
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  brand: string;
  isNew?: boolean;
  isTrending?: boolean;
}
```

### Component Props
- Always use TypeScript interfaces
- Include optional props with `?`
- Use descriptive prop names
- Document complex props with JSDoc comments

## 🚀 Deployment & Build

### Build Process
```bash
npm run build
```

### Development Server
```bash
npm run dev
```

### Environment Variables
- Configure in `.env` files
- Use `VITE_` prefix for client-side variables

## 📱 Mobile Optimization

### Touch Interactions
- Optimized touch targets (minimum 44px)
- Swipe navigation for carousels
- Pull-to-refresh functionality

### Performance
- Lazy loading for images
- Virtualized lists for long product lists
- Optimized bundle sizes

## 🔍 SEO & Accessibility

### SEO
- Semantic HTML structure
- Meta tags for all pages
- Structured data for products
- Optimized images with alt text

### Accessibility
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast support

## 🧪 Testing

### Component Testing
- Unit tests for individual components
- Integration tests for complex interactions
- Visual regression testing

### E2E Testing
- User journey testing
- Cart and checkout flow testing
- Cross-browser compatibility

## 📊 Analytics & Monitoring

### User Analytics
- Page view tracking
- Product interaction tracking
- Conversion funnel analysis

### Performance Monitoring
- Core Web Vitals tracking
- Error monitoring and reporting
- Performance optimization insights

## 🔧 Maintenance

### Regular Updates
- Dependency updates
- Security patches
- Performance optimizations

### Code Quality
- ESLint and Prettier configuration
- TypeScript strict mode
- Code review processes

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com/)

### Tools
- [Vite](https://vitejs.dev/) - Build tool
- [React Router](https://reactrouter.com/) - Client-side routing
- [Tanstack Query](https://tanstack.com/query/) - Data fetching
- [Supabase](https://supabase.com/) - Backend services

This documentation provides a comprehensive guide for developers working on the Obeyyo e-commerce platform. Each section is designed to help developers understand the codebase structure, implement new features, and maintain code quality.
