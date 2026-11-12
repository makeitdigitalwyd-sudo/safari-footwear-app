# SAFARI FOOTWEAR - Store POS & Daily Ledger Web Application

A mobile-friendly, single-page retail store management and Point-of-Sale (POS) ledger built for **SAFARI FOOTWEAR** (Main Bazaar Road, Ernakulam, Kochi).

This application allows the store owner and retail staff to record footwear sales, manage categorized expenses, track supplier stock bills and dues, log daily staff attendance and operating hours, perform physical cash drawer reconciliations, and generate daily/weekly/monthly statements with PDF and CSV export.

---

## 🌟 Key Features

### 1. Roles & Attribution with Financial Privacy
- **Owner Mode (`Rajesh Kumar` / `admin123`)**:
  - Full access to store net profits, owner personal drawings, all staff salary terms, and bank balances.
  - 1-click single and batch confirmation of pending sales, expenses, supplier invoices, and cash reconciliations.
  - Ability to edit store details, GSTIN, branding, and staff profiles.
- **Staff Mode (`Rahul M.`, `Anand V.`, `Priya S.`)**:
  - Counter sales entry, expense logging, 1-tap attendance marking, and thermal receipt printing.
  - **Financial Privacy Shield**: Automatically masks owner drawings, overall profit margins, other staff salaries, and bank account totals with lock indicators.

### 2. Footwear Sales POS & Receipt Printing
- Quick presets for popular footwear (Sneakers, Leather Sandals, Formals, Sports Runners, Flip-Flops, School Shoes).
- Auto-calculated discount and percentage off based on MRP and Selling Price.
- Multiple payment modes: **Cash**, **UPI / QR Scan**, or **Split Payment**.
- Attributed staff selector for sales commissions.
- Instant thermal bill preview with 1-click **Print Receipt** and **WhatsApp Share** simulation.

### 3. Double-Counting Safeguard & Supplier Ledger
- **Operating Expenses**: Categorized into Business (Rent, power, bags, tea), Personal (Owner drawings), and Staff (Salary advances, meals).
- **Supplier Stock Ledger**: Tracks vendor invoices (VKC, Walkaroo, Relaxo, Metro Leather, Paragon), payments, and outstanding balances.
- **Protection Logic**: Supplier stock payments are strictly isolated from general store petty cash expenses to guarantee no payment is ever double-counted in the cash drawer or bank balances.

### 4. Opening & Closing Cash Balances + Drawer Audit
- Configurable morning opening balances for both Cash in Hand and UPI Bank Account.
- Automated carry-forward of yesterday's confirmed closing funds to today's opening funds.
- End-of-day physical cash drawer denomination counter (₹500, ₹200, ₹100, ₹50, ₹20, ₹10) with exact variance tracking (Balanced, Cash Excess, or Shortage).

### 5. Staff Attendance & Operating Hours
- 1-tap status toggles: **Present**, **Half-Day**, **Absent**.
- Real-time Check-In and Check-Out timestamp logging.
- Monthly attendance scorecard with advances taken and net salary estimation.
- Dedicated **Download Staff Statement PDF**.

### 6. Reports Hub & Historical Search
- **Daily Report**: Itemized inflow/outflow balance sheet with cash audit results.
- **Weekly Report**: 7-day rolling revenue trend, pairs sold, and daily breakdown.
- **Monthly Report**: Monthly turnover, estimated gross margin (32% retail markup), operating expenses, and payroll liabilities.
- **Global Historical Search**: Real-time cross-date search across all bills, customer names/phones, article numbers, suppliers, and staff.
- **Export Options**: 1-click **Download Report PDF** (via `html2pdf.js`) and **Export to CSV/Excel**.

---

## 🚀 How to Run Locally

Since this is a self-contained, standalone web application, you do not need Node.js, Python, or any backend server:

1. Clone or download this repository.
2. Double-click `index.html` to open it in any web browser (Chrome, Safari, Edge, Firefox).
3. All data persists automatically in your browser's `localStorage`.

---

## 🌐 Deploy to GitHub Pages (Free Web Hosting)

To host this application online so your staff can access it on their phones or store counter tablets:

1. Create a new repository on GitHub (e.g., `safari-footwear-pos`).
2. Push or upload `index.html` and `README.md` to the `main` branch.
3. In your GitHub repository, go to **Settings** > **Pages**.
4. Under **Branch**, select `main` and click **Save**.
5. Your live app will be published at `https://<your-username>.github.io/safari-footwear-pos/`.

---

## 🔐 Default Demo Accounts

| User | Role | PIN / Password | Permissions |
| :--- | :--- | :--- | :--- |
| **Rajesh Kumar** | Store Owner | `admin123` | Full financial access, approvals, settings |
| **Rahul M.** | Counter 1 Senior Sales | N/A | Counter sales, attendance, masked privacy |
| **Anand V.** | Counter 2 Billing & Stock | N/A | Counter sales, attendance, masked privacy |
| **Priya S.** | Floor & Stock Assistant | N/A | Counter sales, attendance, masked privacy |

---

## 📄 License

MIT License. Open for customization for retail store management.
