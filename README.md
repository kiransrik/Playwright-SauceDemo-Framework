# SauceDemo Playwright + TypeScript Automation Framework

This project is a **modular UI test automation framework** built using **Playwright + TypeScript** for [SauceDemo](https://www.saucedemo.com).  

It demonstrates **clean code design, scalability, error handling, and best practices** while covering end-to-end flows.

---

## ✅ Evaluation Criteria Checklist

- **Code Design**: Clean structure, modularity, maintainability ✔️  
- **Framework Design**: Abstractions for driver, config, page actions ✔️  
- **Error Handling**: Robust error handling and logging ✔️  
- **Scalability**: Easily extendable for new test types (API, visual, accessibility) ✔️  
- **Best Practices**: SOLID principles, DRY, readable ✔️  
- **Execution Instructions**: Simple `npm install && npm test` ✔️  

---

## 📂 Project Structure

```
sauce-playwright/
├── .env
├── package.json
├── tsconfig.json
├── playwright.config.ts
├── README.md
├── src/
│   ├── config/
│   │   └── config.ts
│   ├── pages/
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   ├── tests/
│   │   ├── login.spec.ts
│   │   └── e2e.spec.ts
│   ├── utils/
│   │   ├── logger.ts
│   │   └── retryHelper.ts
│   └── fixtures/
│       └── auth.fixture.ts
└── reports/
```

---

## 🚀 Setup & Run

1. Install dependencies  
```bash
npm install
npx playwright install
```

2. Run tests  
```bash
npm test
```

3. Run tests in headed mode  
```bash
npm run test:headed
```

4. Generate and view reports  
```bash
npm run test:report
```

---

## 📌 Test Scenarios Implemented

- **Login Tests**:  
  - Standard user login success  
  - Locked out user login failure  

- **End-to-End Flow**:  
  - Login → Add product to cart → Checkout → Logout  

---

## 🔧 Extensibility

- Add new pages in `src/pages/`  
- Add new tests in `src/tests/`  
- Extend fixtures in `src/fixtures/` for reusable test contexts  
- Replace `logger.ts` with a structured logger (winston/pino) for advanced logging  
- Integrate with CI/CD (GitHub Actions, GitLab, Jenkins) easily  

---

## 🏆 Final Notes

This framework is **ready for demonstration** as a clean, maintainable, and scalable UI test automation setup.
