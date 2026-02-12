---
description: Repository Information Overview
alwaysApply: true
---

# MyPage Information

## Summary
MyPage is a personal portfolio web application built with **Angular 17**, featuring **Server-Side Rendering (SSR)** for better performance and SEO. It showcases sections like About, Skills, Soft Skills, and Contact.

## Structure
- **src/app/components/**: Contains the main UI components (about, contact, header, skills, softSkills).
- **src/app/**: Core application files including routing (`app.routes.ts`) and main component (`app.component.ts`).
- **src/assets/**: Static resources such as images and icons.
- **server.ts**: The entry point for the Express-based SSR server.
- **angular.json**: Angular CLI workspace configuration.
- **tsconfig.json**: TypeScript configuration for the project.

## Language & Runtime
**Language**: TypeScript  
**Version**: TypeScript ~5.4.2  
**Framework**: Angular 17.3.0  
**Runtime**: Node.js  
**Build System**: Angular CLI  
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- **@angular/core**: ^17.3.0
- **@angular/ssr**: ^17.3.6
- **express**: ^4.18.2
- **ng-circle-progress**: ^1.7.1
- **rxjs**: ~7.8.0

**Development Dependencies**:
- **@angular/cli**: ^17.3.6
- **typescript**: ~5.4.2
- **karma**: ~6.4.0
- **jasmine-core**: ~5.1.0

## Build & Installation
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build the project (including SSR)
npm run build

# Serve the SSR version
npm run serve:ssr:my-page
```

## Testing

**Framework**: Karma & Jasmine
**Test Location**: `src/` (configured in `angular.json`)
**Naming Convention**: `*.spec.ts`
**Configuration**: `tsconfig.spec.json`, `karma.conf.js` (expected by default CLI)

**Run Command**:
```bash
npm test
```
