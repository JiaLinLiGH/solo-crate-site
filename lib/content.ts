export const SITE = {
  name: 'Solo Crate',
  tagline: 'Mac-native receipts, organized',
  description:
    'Solo Crate is a Mac-native receipt manager. Drag in a receipt, Apple Vision reads it locally, tags auto-apply, export a clean bundle. No subscription, 14-day free trial.',
  url: 'https://JiaLinLiGH.github.io/solo-crate-site/',
  appStoreUrl: 'https://apps.apple.com/us/app/id000000000',
  supportUrl: 'mailto:JiaLinLiGH@163.com',
  privacyUrl: '/privacy',
  termsUrl: '/terms',
};

export const NAV_LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/#export', label: 'Export' },
  { href: '/#privacy', label: 'Privacy' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
] as const;

export const FEATURES = [
  {
    title: 'Drop receipts in',
    description:
      'Drag any PDF or image — JPG, PNG, HEIC, TIFF — onto the window. Or use ⌘O to pick a file, or paste from clipboard with ⌘V. Files are added to your library in seconds.',
    icon: 'import',
  },
  {
    title: 'Apple Vision OCR, on-device',
    description:
      'Receipt parsing runs locally using Apple Vision. Vendor, date, amount, tax, currency, and a purpose guess land in editable fields. Low-confidence reads are flagged inline.',
    icon: 'ocr',
  },
  {
    title: 'Search like Spotlight',
    description:
      'Full-text search across vendor, notes, and OCR text — fast even on 1,000+ receipts. Filter by tag, tax year, date range, or amount band. The pile becomes a list.',
    icon: 'search',
  },
  {
    title: 'Tags without the chaos',
    description:
      'A dedicated Tags page to rename, merge, and see usage frequency. Tag a receipt once; the tag sticks. Bulk-apply to 30 receipts at once with multi-select.',
    icon: 'tags',
  },
  {
    title: 'Optional rule automation',
    description:
      'Write a rule once: "Vendor contains SHELL → Vehicle Expenses". Re-evaluate the entire library the moment you save. No batch jobs, no waiting.',
    icon: 'rules',
  },
  {
    title: 'Trash that forgives',
    description:
      'Deleted receipts go to Trash for 30 days — restore individual items or the whole bin. Accidentally trashing last April never hurts again.',
    icon: 'trash',
  },
  {
    title: 'Hand off a clean bundle',
    description:
      'Export a Workbook ZIP (one CSV per IRS line plus totals), a single .xlsx your CPA opens in Excel, a Receipt Bundle ZIP with every original PDF, or a PDF summary.',
    icon: 'export',
  },
  {
    title: '100% offline by default',
    description:
      'Your data lives in a sandboxed location inside your macOS user library. The App Sandbox is enforced and network access is disabled at the entitlement level. No upload, ever.',
    icon: 'local',
  },
] as const;

export const WORKFLOW_TAGS = ['software', 'meals', 'travel', 'office', 'vehicle', 'supplies'] as const;

export const FAQS = [
  {
    q: 'Is there a free trial?',
    a: 'Yes — 14 days, full access, no feature limits, no credit card up front. After the trial the app keeps working with the locked-tier limits (read, edit, Schedule C view, Trash) until you buy the unlock.',
  },
  {
    q: 'How much does it cost?',
    a: '$49.99 once. One-time purchase, lifetime updates on macOS, Family Sharing included. No subscription, no per-seat fees, no "Pro tier" appearing after you bought it.',
  },
  {
    q: 'Where does my data live?',
    a: 'On your Mac, in a SwiftData store inside a sandboxed location in your user library. Nothing leaves the device. The App Sandbox is enforced and network access is disabled at the entitlement level.',
  },
  {
    q: 'Do you link to my bank?',
    a: 'Never. We don\'t ask for bank credentials, Plaid tokens, or card numbers. If you want to pull expenses from a bank statement, you import the PDF — same as every other document.',
  },
  {
    q: 'How accurate is the OCR?',
    a: 'Apple Vision OCR is the starting point, not the verdict. Every parsed field is editable. Low-confidence reads are flagged inline so you can scan for them quickly.',
  },
  {
    q: 'Can I export everything for my CPA?',
    a: 'Yes. The ExportSheet offers four formats: Workbook ZIP, Workbook (.xlsx), Receipt Bundle ZIP, and PDF summary. The .xlsx file opens in Excel, Numbers, and Google Sheets without warnings.',
  },
  {
    q: 'What about Schedule C mapping?',
    a: 'Every receipt has tags. Every tax year has rules. Rules turn tag combinations into IRS line assignments — so a "shell" tag lands on Vehicle Expenses (Line 9), a "meals" tag lands on Line 24b at 50%. You write the rule once, the engine evaluates the library instantly.',
  },
  {
    q: 'How long do you keep deleted receipts?',
    a: '30 days in Trash, then purged from disk. Restore individual receipts or the entire Trash in one click.',
  },
  {
    q: 'What does the 14-day trial include?',
    a: 'Everything: full import, full OCR, all tag and rule features, all four export formats, Trash, Schedule C view. There are no features held back. After 14 days the app stays usable for read, edit, and Schedule C view; you\'ll be asked to buy the unlock to import new receipts or export.',
  },
] as const;

export const COMPETITORS = [
  {
    name: 'Solo Crate',
    price: '$49.99 once',
    platform: 'Mac',
    billing: 'one-time',
    storage: 'local-first',
    ocr: 'Apple Vision (on-device)',
    tags: 'tags + rule engine',
  },
  {
    name: 'Expensify',
    price: '$9 / month',
    platform: 'iOS · Web',
    billing: 'subscription',
    storage: 'cloud',
    ocr: 'cloud OCR',
    tags: 'categories',
  },
  {
    name: 'Smart Receipts',
    price: '$11 / year',
    platform: 'iOS · Android',
    billing: 'subscription',
    storage: 'cloud',
    ocr: 'cloud OCR',
    tags: 'limited',
  },
  {
    name: '1tap Receipts',
    price: '$4.99 / month',
    platform: 'iOS',
    billing: 'subscription',
    storage: 'cloud',
    ocr: 'cloud OCR',
    tags: 'auto-categorize',
  },
] as const;

export const RULES_EXAMPLES = [
  {
    title: 'Software & subscriptions',
    expression: 'tag:software OR tag:domain OR tag:hosting',
    result: 'Auto-tag',
    color: 'moss',
  },
  {
    title: 'Travel',
    expression: 'tag:flight OR tag:hotel OR tag:rideshare',
    result: 'Auto-tag',
    color: 'amber',
  },
  {
    title: 'Meals',
    expression: 'tag:meal AND NOT tag:client_entertainment',
    result: 'Auto-tag',
    color: 'amber',
  },
  {
    title: 'Vehicle',
    expression: 'tag:rideshare OR tag:fuel OR tag:parking',
    result: 'Auto-tag',
    color: 'moss',
  },
] as const;

export const SCHEDULE_C_LINES = [
  { line: 9, label: 'Vehicle expenses', amount: 1137.55 },
  { line: 18, label: 'Office expense', amount: 1095.95 },
  { line: 22, label: 'Supplies', amount: 1092.99 },
  { line: 24, label: 'Travel', amount: 1488.05 },
  { line: 25, label: 'Utilities', amount: 351.44 },
];

export const TRIAL_DAYS = 14;
export const PRO_PRICE = '$49.99';
