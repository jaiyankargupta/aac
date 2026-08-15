export const GITHUB_RELEASE_URL = "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0";
export const MAIN_DRIVE_LINK_G1 = GITHUB_RELEASE_URL;
export const MAIN_DRIVE_LINK_G2 = GITHUB_RELEASE_URL;
export const MAIN_DRIVE_LINK = GITHUB_RELEASE_URL;

const GITHUB_RELEASE_BASE = "https://github.com/jaiyankargupta/aac/releases/download/v1.0.0";
export const CHAPTER_RELEASE_BASE = "https://github.com/jaiyankargupta/aac/releases/download/v1.1.0";

const slugTitle = (title) =>
  title.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_|_$/g, "").slice(0, 55);

export const chapterAssetName = (sourceFileName, index, title) => {
  const stem = sourceFileName.replace(/\.pdf$/i, "");
  const n = String(index + 1).padStart(2, "0");
  return `${stem}_Ch${n}_${slugTitle(title)}.pdf`;
};

const FILE_NAME_MAP = {
  "1LxmsvcyGVcLO-rDN1R30zq7UtsmJTL09": "Business_Law_Ethics_G-1_mb_V-1.pdf",
  "1dYA3HGm1QQPf-mHLWFRqZ3otEZAW5tR-": "business_law_ethics_mb_vol2.pdf",
  "1mvZhjQ1Q2zd2mV4v9twnqL93oDIframy": "Law_Ethics_G-1_QB_V-1.pdf",
  "1jw_qECEcg8fCBGyaGmLQVoB4-9Vj8zfZ": "Law_Ethics_G-1_QB_V-2.pdf",
  "193NrFJlXIv2Dssf0FYIaDMtkXMbJgk-S": "Law_Ethics_Sarthi.pdf",
  "1VbH-iJbrH2OF1GmuNhaadoESyTL73ogE": "business_law_ethics_vol_1_.Ongoing.pdf",
  "1EIgRuZ9suaJV15HqtlGBJBRv1wViBbdg": "business_low_ethics_vol_2_.Ongoing.pdf",
  "1YTLa6rZW4XqMc5m--Ncw1IQKZIueqYzL": "law_question_bank.pdf",
  "1kLSIRA7SC5v07hS4Bstkk2O_CHKLQpOb": "Financial_Accounting_Main_V-1.pdf",
  "1qwWl5yB-1KNqT8jV-LKS9d-30T6uVORM": "Financial_Accounting_Main_V-2.pdf",
  "1t9OzbXSjURyxa1cXcGAruo7v7n6q0qql": "Financial_Accounting_Main_V-3.pdf",
  "1ItoPi9VEdUE9TTZhavJLq445kRxCaHTH": "1._DT_MB_V1.pdf",
  "1-5JJ652930SD7Bx1-mDj0tTExUTi9wpz": "2._DT_MB_V2.pdf",
  "1Fqv1BNW6p6YSwBp5znvMVxlpu3WFO2U7": "3._DT_QB.pdf",
  "1t7ySvSguuuf7hvDlsj1fjT6FqJRFsw2h": "4._IDT_MB_V1.pdf",
  "1C52pr-nWHIXikzic_ky_YzhbiwDvAFqA": "5._IDT_MB_V2.pdf",
  "1NuxS2XsKKg7Nw7hMM6tsy2hn6JV0GDGt": "6._IDT_QB.pdf",
  "1mTsjA5gXKeBsFIkMJUvHN3V291sNQKLG": "1._MAIN_BOOK.pdf",
  "1_MMB1xb1EbAjfsH14KnbNibf26HmBnNb": "2._BUILDING_BLOCKS.pdf",
  "1J967OMkvOy5sFJiNs7JdW13mI5Hhgbpj": "3._CHART_BOOK.pdf",
  "1DZM9bQZCb8BXS8SUIYLBTn-DyJR-Isc4": "OM_MB.pdf",
  "1lBg3T3v_GeUsHmq-RuExR_-_P-qp2cuN": "OM_BUILDING-_BLOCKS.pdf",
  "1FtXp5PODz4-gigRjpBUda1amW4mVsQL0": "SM_-_MAIN_BOOK_._CHART_BOOK.pdf",
  "19Y6MOCUOlHJWusttKHKvgdwmIZjNMkR7": "CORPORATE_-_ACCOUNTING_-_MAIN_BOOK.pdf",
  "12zTMxkVg82wevBi-twQQ87Q6W0mtpCX4": "AUDIT_MB.pdf",
  "16YExX3Gb8v183rNxh3lZxlsbZniN_do_": "FM_VOL_1.pdf",
  "1u9f7C_ivoA6ButYDGT289tioEQpHKqDH": "FM_-_VOLUME_-02.pdf",
  "12WfoaL0LAE4SCBHp_5gOgbBUgvdE6-I1": "FM_-_BUILDING_-_BLOCKS.pdf",
  "1ZkmBa3iIL_bT2ckV3xDARbtjM83kkzZG": "2B.CH-08_CAPITAL_BUDGETING.pdf",
  "10sgTH3j170XtKKw6YURzQirS2cklBnPb": "DA_MB.pdf",
  "1SJxocc_pqIN3jS2PL3y9hAgIaNCN-Otn": "FM_-_CHART_BOOK.pdf",
  "1OYtY7P4eO3Caerh4a5m7EBqTNF8Uo-J3": "MANAGEMENT_ACCOUNTING_-_MAIN_BOOK.pdf",
  "1bRkQepb5rvTt6I-ihRhih8yV_ul6wxFA": "MA_BB.pdf",
  "1wpLyxD1FMx18dujz0v7a9jQz31r_WCv5": "MA_CHART_BOOK_.pdf",
  "10QHtA0LiGy2viWQJVNCe9PUECJtEeiS1": "chp-6_learning_curve_.pdf"
};

const getDirectDownloadLink = (id) => {
  const fileName = FILE_NAME_MAP[id] || `${id}.pdf`;
  return `${GITHUB_RELEASE_BASE}/${fileName}`;
};

const getViewLink = (id) => getDirectDownloadLink(id);

const ch = (title, page) => ({ title, page });

const pdf = (id, name, size, pages, chapters = []) => {
  const sourceFileName = FILE_NAME_MAP[id];
  return {
    id,
    uid: `${id}::${name}`,
    name,
    type: "pdf",
    sourceFileName,
    downloadUrl: getDirectDownloadLink(id),
    viewUrl: getViewLink(id),
    size,
    pages,
    chapters: chapters.map((chapter, index) => {
      const fileName = chapterAssetName(sourceFileName, index, chapter.title);
      return {
        ...chapter,
        fileName,
        downloadUrl: `${CHAPTER_RELEASE_BASE}/${fileName}`,
        viewUrl: `${CHAPTER_RELEASE_BASE}/${fileName}`
      };
    })
  };
};

export const PAPERS_DATA = [
  {
    id: "paper-5",
    group: "GROUP 1",
    paperNumber: "PAPER 5",
    title: "BUSINESS LAWS (ONLY FOR REC STUDENTS)",
    shortName: "Business Laws",
    category: "Commercial & Corporate Laws",
    color: "#2563eb",
    bgGradient: "linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(59, 130, 246, 0.02) 100%)",
    iconName: "Scale",
    folderUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
    badgeText: "REC Special Batch",
    description: "Companies Act, commercial laws, industrial law and ethics — organised PDF-wise with chapters read from each book index.",
    files: [
      pdf("1LxmsvcyGVcLO-rDN1R30zq7UtsmJTL09", "Business Law Ethics G-1 mb V-1.pdf", "Main Book Vol 1 · Companies Act", 302, [
        ch("Introduction & Types of Companies", 10),
        ch("Incorporation & OPC", 10),
        ch("Memorandum & Articles of Association", 53),
        ch("Conversion of Companies & Miscellaneous", 72),
        ch("Extra Doctrines", 79),
        ch("Prospectus", 80),
        ch("Allotment", 106),
        ch("Share Capital I", 117),
        ch("Share Capital II", 140),
        ch("Share Capital III", 159),
        ch("Deposits", 176),
        ch("Charges", 187),
        ch("Registers & Returns", 202),
        ch("Convening General Meeting", 216),
        ch("Constituting General Meeting", 224),
        ch("Conducting General Meeting", 231),
        ch("Post Meeting Formalities", 247),
        ch("Auditor", 260)
      ]),
      pdf("1dYA3HGm1QQPf-mHLWFRqZ3otEZAW5tR-", "business law ethics mb vol2.pdf", "Main Book Vol 2 · Commercial Laws", 362, [
        ch("Nature of Contract", 12),
        ch("Offer & Acceptance", 12),
        ch("Capacity to Contract", 30),
        ch("Consideration", 37),
        ch("Free Consent", 42),
        ch("Other Essential Elements", 51),
        ch("Performance of a Contract", 61),
        ch("Breach of Contract", 78),
        ch("Contingent & Quasi Contracts", 86),
        ch("Indemnity & Guarantee", 94),
        ch("Bailment and Pledge", 115),
        ch("Agency", 134),
        ch("Indian Partnership Act, 1932", 161),
        ch("Relations of Partners", 206),
        ch("Registration & Dissolution", 214),
        ch("Limited Liability Partnership Act, 2008", 220),
        ch("Negotiable Instruments Act, 1881 – I", 280),
        ch("Negotiable Instruments Act, 1881 – II", 298),
        ch("Negotiable Instruments Act, 1881 – III", 312),
        ch("Introduction to Legal System of India", 330)
      ]),
      pdf("1mvZhjQ1Q2zd2mV4v9twnqL93oDIframy", "Law Ethics G-1 QB V-1.pdf", "Question Bank Vol 1 · Companies Act", 182, [
        ch("Incorporation & OPC", 10),
        ch("MOA & AOA", 24),
        ch("Prospectus", 36),
        ch("Allotment", 48),
        ch("Share Capital", 58),
        ch("Deposits", 78),
        ch("Charges", 88),
        ch("Registers, Returns & Meetings", 98),
        ch("Auditor", 130)
      ]),
      pdf("1jw_qECEcg8fCBGyaGmLQVoB4-9Vj8zfZ", "Law Ethics G-1 QB V-2.pdf", "Question Bank Vol 2 · Commercial Laws", 212, [
        ch("Indian Contract Act, 1872", 10),
        ch("Sale of Goods Act, 1930", 70),
        ch("Indian Partnership Act, 1932", 100),
        ch("Limited Liability Partnership Act, 2008", 130),
        ch("Negotiable Instruments Act, 1881", 155),
        ch("Ethics & Business Communication", 185)
      ]),
      pdf("193NrFJlXIv2Dssf0FYIaDMtkXMbJgk-S", "Law Ethics Sarthi.pdf", "Saarthi Handwritten Notes", 210, [
        ch("Types of Companies — Private, Public & OPC", 8),
        ch("Holding & Subsidiary Companies", 9),
        ch("Incorporation Procedure", 16),
        ch("MOA, AOA & Doctrines", 28),
        ch("Prospectus, Allotment & Share Capital", 48),
        ch("Meetings, Deposits & Charges", 90),
        ch("Contract, Partnership & NI Act summaries", 140)
      ]),
      pdf("1VbH-iJbrH2OF1GmuNhaadoESyTL73ogE", "business law ethics vol 1 (Ongoing).pdf", "Ongoing Batch Vol 1 · Companies Act", 278, [
        ch("Introduction & Types of Companies", 10),
        ch("Incorporation & OPC", 10),
        ch("Memorandum & Articles of Association", 50),
        ch("Prospectus & Allotment", 72),
        ch("Share Capital I–III", 108),
        ch("Deposits & Charges", 167),
        ch("Registers, Returns & Meetings", 193),
        ch("Auditor", 250)
      ]),
      pdf("1EIgRuZ9suaJV15HqtlGBJBRv1wViBbdg", "business low ethics vol 2 (Ongoing).pdf", "Ongoing Batch Vol 2 · Commercial Laws", 362, [
        ch("Nature of Contract", 12),
        ch("Offer, Acceptance & Consideration", 12),
        ch("Free Consent & Capacity", 42),
        ch("Performance & Breach", 61),
        ch("Indemnity, Guarantee, Bailment & Agency", 94),
        ch("Indian Partnership Act, 1932", 161),
        ch("LLP Act, 2008", 220),
        ch("Negotiable Instruments Act, 1881", 280),
        ch("Introduction to Legal System of India", 330)
      ]),
      pdf("1YTLa6rZW4XqMc5m--Ncw1IQKZIueqYzL", "law question bank.pdf", "Combined Law Question Bank", 406, [
        ch("Incorporation & OPC", 9),
        ch("Extra Doctrines", 20),
        ch("Allotment & Share Capital", 28),
        ch("Constituting General Meeting", 63),
        ch("Sale of Goods Act, 1930", 219),
        ch("LLP Act, 2008", 250),
        ch("Negotiable Instruments Act, 1881", 280),
        ch("Factories Act, 1948", 310),
        ch("Payment of Gratuity Act, 1972", 318),
        ch("Employees State Insurance Act, 1948", 326),
        ch("Code on Wages, 2019", 343)
      ])
    ]
  },
  {
    id: "paper-6",
    group: "GROUP 1",
    paperNumber: "PAPER 6",
    title: "FINANCIAL ACC",
    shortName: "Financial Accounting",
    category: "Accounting & Standards",
    color: "#10b981",
    bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(52, 211, 153, 0.02) 100%)",
    iconName: "Calculator",
    folderUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
    badgeText: "Full Volume Books",
    description: "Financial Accounting Main Volumes 1–3 with chapters taken from each PDF index.",
    files: [
      pdf("1kLSIRA7SC5v07hS4Bstkk2O_CHKLQpOb", "Financial Accounting Main V-1.pdf", "Main Volume 1 · Basics & Accounting Standards", 166, [
        ch("Four Frameworks of Accounting & Principles", 9),
        ch("Capital and Revenue Transactions", 12),
        ch("Accounting Cycle & Analysis of Transactions", 19),
        ch("Journal and Ledger", 23),
        ch("Trial Balance", 28),
        ch("Cash Book, Bank Book & BRS", 35),
        ch("Rectification of Errors", 46),
        ch("Depreciation Accounting", 57),
        ch("Bad Debts & Provisions", 68),
        ch("AS-1 Disclosure of Accounting Policies", 74),
        ch("AS-10 Property, Plant & Equipment", 83),
        ch("AS-11 Effects of Changes in Foreign Exchange Rate", 107),
        ch("AS-12 Accounting for Government Grants", 118),
        ch("AS-16 Borrowing Costs", 137),
        ch("AS-22 Accounting for Taxes on Income", 153)
      ]),
      pdf("1qwWl5yB-1KNqT8jV-LKS9d-30T6uVORM", "Financial Accounting Main V-2.pdf", "Main Volume 2 · Partnership", 106, [
        ch("Admission of Partner", 9),
        ch("Retirement of Partner", 26),
        ch("Death of Partner", 39),
        ch("Treatment of Joint Life Policy", 48),
        ch("Dissolution of Partnership Firms (incl. Piecemeal)", 55),
        ch("Amalgamation of Partnership Firms", 79),
        ch("Accounting of Limited Liability Partnership", 94)
      ]),
      pdf("1t9OzbXSjURyxa1cXcGAruo7v7n6q0qql", "Financial Accounting Main V-3.pdf", "Main Volume 3 · Special Transactions", 264, [
        ch("Bills of Exchange", 9),
        ch("Consignment", 19),
        ch("Joint Venture", 40),
        ch("Final Accounts of Commercial Organisations", 50),
        ch("Final Accounts of Not-for-Profit Organisations", 84),
        ch("Final Accounts from Incomplete Records", 109),
        ch("Hire Purchase and Instalment Sale", 136),
        ch("Insurance Claim", 169),
        ch("Branch Accounts (including Foreign Branches)", 192),
        ch("Departmental Accounts", 230),
        ch("Lease Accounting", 246)
      ])
    ]
  },
  {
    id: "paper-7",
    group: "GROUP 1",
    paperNumber: "PAPER 7",
    title: "TAXATION",
    shortName: "Direct & Indirect Taxation",
    category: "Direct Tax (DT) & GST",
    color: "#f59e0b",
    bgGradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(251, 191, 36, 0.02) 100%)",
    iconName: "Receipt",
    folderUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
    badgeText: "DT + IDT Question Bank",
    description: "Direct Tax and GST main books plus question banks, listed PDF-wise with each book's chapter index.",
    files: [
      pdf("1ItoPi9VEdUE9TTZhavJLq445kRxCaHTH", "1. DT MB V1.pdf", "Direct Tax Main Book V1 · AY 2026-27", 254, [
        ch("Basics of Income Tax Act", 10),
        ch("Residential Status", 28),
        ch("Scope of Total Income", 48),
        ch("Income from Salary", 62),
        ch("Set Off & Carry Forward of Losses", 97),
        ch("Agricultural Income", 151)
      ]),
      pdf("1-5JJ652930SD7Bx1-mDj0tTExUTi9wpz", "2. DT MB V2.pdf", "Direct Tax Main Book V2 · AY 2026-27", 274, [
        ch("Income from House Property", 10),
        ch("Profits & Gains of Business or Profession", 48),
        ch("Capital Gains", 90),
        ch("Income from Other Sources & Gifts", 130),
        ch("Deductions", 125),
        ch("TDS", 160),
        ch("TCS", 215)
      ]),
      pdf("1Fqv1BNW6p6YSwBp5znvMVxlpu3WFO2U7", "3. DT QB.pdf", "Direct Tax Question Bank · 382 questions", 168, [
        ch("Residential Status", 9),
        ch("Scope of Total Income", 14),
        ch("Agricultural Income", 24),
        ch("Salary", 27),
        ch("House Property", 46),
        ch("PGBP", 57),
        ch("Income from Other Sources", 81),
        ch("Gift", 92),
        ch("Clubbing of Income", 96),
        ch("Set-off & Carry Forward", 103),
        ch("Capital Gain", 114),
        ch("Deductions", 130),
        ch("TDS & TCS", 144),
        ch("Computation of Total Income", 150)
      ]),
      pdf("1t7ySvSguuuf7hvDlsj1fjT6FqJRFsw2h", "4. IDT MB V1.pdf", "Indirect Tax Main Book V1 · GST", 384, [
        ch("GST in India — An Introduction", 10),
        ch("Supply under GST", 28),
        ch("Charge under GST", 75),
        ch("Composition Levy", 97),
        ch("Time of Supply", 106),
        ch("Value of Supply", 115),
        ch("Place of Supply", 127),
        ch("Input Tax Credit", 149),
        ch("Registration", 182),
        ch("Exemptions under GST", 223)
      ]),
      pdf("1C52pr-nWHIXikzic_ky_YzhbiwDvAFqA", "5. IDT MB V2.pdf", "Indirect Tax Main Book V2 · GST Procedures & Customs", 166, [
        ch("Tax Invoice, Credit & Debit Notes", 10),
        ch("E-Way Bill", 28),
        ch("Payment of Tax", 57),
        ch("TDS & TCS under GST", 66),
        ch("Returns under GST", 74),
        ch("Customs — Value and Duties", 101)
      ]),
      pdf("1NuxS2XsKKg7Nw7hMM6tsy2hn6JV0GDGt", "6. IDT QB.pdf", "Indirect Tax Question Bank · 356 Q + 364 MCQ", 318, [
        ch("Introduction to GST", 9),
        ch("Supply under GST", 25),
        ch("Charge of GST", 49),
        ch("Place of Supply", 66),
        ch("Exemptions", 78),
        ch("Time of Supply", 106),
        ch("Value of Supply", 127),
        ch("Registration under GST", 146),
        ch("Tax Invoice, Credit & Debit Notes", 177),
        ch("Accounts and Records", 198),
        ch("E-Way Bill", 204),
        ch("Payment of Tax", 211),
        ch("TDS & TCS", 224),
        ch("Returns under GST", 232),
        ch("Input Tax Credit", 249)
      ])
    ]
  },
  {
    id: "paper-8",
    group: "GROUP 1",
    paperNumber: "PAPER 8",
    title: "COSTING",
    shortName: "Cost Accounting",
    category: "Cost & Management Accounting",
    color: "#f43f5e",
    bgGradient: "linear-gradient(135deg, rgba(244, 63, 94, 0.08) 0%, rgba(251, 113, 133, 0.02) 100%)",
    iconName: "PieChart",
    folderUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
    badgeText: "Main Book + Chart Book",
    description: "Costing Main Book, Building Blocks and Chart Book — each PDF listed with its topic chapters.",
    files: [
      pdf("1mTsjA5gXKeBsFIkMJUvHN3V291sNQKLG", "1. MAIN BOOK.pdf", "Cost Accounting Main Book", 191, [
        ch("Introduction to Cost Accounting", 8),
        ch("Material Cost", 20),
        ch("Employee / Labour Cost", 45),
        ch("Overheads", 70),
        ch("Cost Book Keeping", 100),
        ch("Job, Batch & Contract Costing", 120),
        ch("Process & Service Costing", 145),
        ch("Marginal Costing", 165),
        ch("Standard Costing", 175),
        ch("Budget and Budgetary Control", 185)
      ]),
      pdf("1_MMB1xb1EbAjfsH14KnbNibf26HmBnNb", "2. BUILDING BLOCKS.pdf", "Foundational Concepts PDF", 162, [
        ch("Cost Concepts & Classification", 8),
        ch("Material Cost Building Blocks", 20),
        ch("Labour Cost Building Blocks", 45),
        ch("Overheads Building Blocks", 70),
        ch("Methods of Costing", 100),
        ch("Marginal, Standard & Budget summaries", 130)
      ]),
      pdf("1J967OMkvOy5sFJiNs7JdW13mI5Hhgbpj", "3. CHART BOOK.pdf", "Formula & Summary Charts", 88, [
        ch("Cost Sheet & Material Charts", 4),
        ch("Labour & Overhead Charts", 20),
        ch("Methods of Costing Charts", 40),
        ch("Marginal & Standard Costing Charts", 60),
        ch("Budgetary Control Charts", 75)
      ])
    ]
  },
  {
    id: "paper-9",
    group: "GROUP 2",
    paperNumber: "PAPER 9",
    title: "OPERATIONS MANAGEMENT & STRATEGIC MANAGEMENT (OM SM)",
    shortName: "OM SM",
    category: "Operations & Strategy",
    color: "#8b5cf6",
    bgGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(167, 139, 250, 0.02) 100%)",
    iconName: "Boxes",
    folderUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
    badgeText: "Group 2 Core",
    description: "OM Main Book, OM Building Blocks and SM Main + Chart Book with chapters from each PDF index.",
    files: [
      pdf("1DZM9bQZCb8BXS8SUIYLBTn-DyJR-Isc4", "OM MB.pdf", "Operations Management Main Book", 316, [
        ch("Demand Forecasting", 12),
        ch("Capacity Planning", 20),
        ch("Facility Location and Layout", 37),
        ch("Resource Aggregate Planning", 47),
        ch("Material Requirements Planning", 54),
        ch("Economic Batch Quantity", 57),
        ch("Optimum Allocation of Resources — LPP", 71),
        ch("Transportation", 95),
        ch("Job Evaluation, Job Allocation — Assignment", 120),
        ch("Scheduling and Queuing Models", 160),
        ch("Simulation and Line Balancing", 174),
        ch("Productivity Management and Quality Management", 190),
        ch("Project Management — Gantt, PERT & CPM", 215),
        ch("Economics of Maintenance and Spares Management", 253)
      ]),
      pdf("1lBg3T3v_GeUsHmq-RuExR_-_P-qp2cuN", "OM BUILDING- BLOCKS.pdf", "OM Building Blocks", 258, [
        ch("Operation Management — Introduction", 9),
        ch("Demand Forecasting", 10),
        ch("Capacity Planning", 32),
        ch("Facility Location and Layout", 54),
        ch("Resource Aggregate Planning", 71),
        ch("MRP & Manufacturing Resource Planning", 79),
        ch("Economic Batch Quantity", 88),
        ch("Product Design, Process Design & Product Life Cycle", 92),
        ch("Production Planning and Control", 112),
        ch("LPP — Optimum Allocation of Resources", 139),
        ch("Transportation", 168),
        ch("Assignment", 183),
        ch("Scheduling, Queuing, Simulation & Lean", 189),
        ch("Productivity, TQM & ISO", 227),
        ch("Project Management — Gantt, PERT & CPM", 250)
      ]),
      pdf("1FtXp5PODz4-gigRjpBUda1amW4mVsQL0", "SM - MAIN BOOK & CHART BOOK.pdf", "Strategic Management Main & Chart Book", 208, [
        ch("Introduction to Strategy", 7),
        ch("Strategic Analysis & Strategic Planning", 37),
        ch("Formulation & Implementation of Strategy", 74),
        ch("Digital Strategy", 121),
        ch("Chart Book (after main book)", 145)
      ])
    ]
  },
  {
    id: "paper-10",
    group: "GROUP 2",
    paperNumber: "PAPER 10",
    title: "CORPORATE ACCOUNTING & AUDITING",
    shortName: "Co Acc & Audit",
    category: "Corporate Acc & Audit",
    color: "#ec4899",
    bgGradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(244, 114, 182, 0.02) 100%)",
    iconName: "FileCheck",
    folderUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
    badgeText: "Group 2 Core",
    description: "Corporate Accounting and Auditing main books, organised PDF-wise from each book's own chapters.",
    files: [
      pdf("19Y6MOCUOlHJWusttKHKvgdwmIZjNMkR7", "CORPORATE - ACCOUNTING - MAIN BOOK.pdf", "Corporate Accounting Main Book", 322, [
        ch("Accounting for Share Capital", 11),
        ch("Accounting for Debentures", 40),
        ch("Financial Statements of Companies (Schedule III)", 70),
        ch("Cash Flow Statement", 130),
        ch("Accounts of Banking Companies", 170),
        ch("Accounts of Insurance Companies", 210),
        ch("Accounts of Electricity Companies & Others", 250)
      ]),
      pdf("12zTMxkVg82wevBi-twQQ87Q6W0mtpCX4", "AUDIT MB.pdf", "Auditing Main Book", 238, [
        ch("Nature, Objective and Scope of Audit", 11),
        ch("Audit Strategy, Planning and Programme", 20),
        ch("Audit Evidence, Engagement, Program & Audit Note Book", 28),
        ch("Internal Control, Audit & Check", 42),
        ch("IFC, FRA & NFRA", 62),
        ch("Audit Sampling, Trail & Analytical Procedures", 69),
        ch("Company Audit", 90),
        ch("Audit Report & Other Assignments", 140)
      ])
    ]
  },
  {
    id: "paper-11",
    group: "GROUP 2",
    paperNumber: "PAPER 11",
    title: "FINANCIAL MANAGEMENT & DATA ANALYTICS (FM DA)",
    shortName: "FM DA",
    category: "Financial Management & Analytics",
    color: "#06b6d4",
    bgGradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(34, 211, 238, 0.02) 100%)",
    iconName: "TrendingUp",
    folderUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
    badgeText: "Group 2 Core",
    description: "FM Volume 1, Volume 2, Building Blocks, Chart Book, Capital Budgeting and Data Analytics — chapters from each PDF.",
    files: [
      pdf("16YExX3Gb8v183rNxh3lZxlsbZniN_do_", "FM VOL 1.pdf", "Financial Management Vol 1", 234, [
        ch("Introduction to Financial Management", 9),
        ch("Risk and Return", 20),
        ch("Financial Institutions", 36),
        ch("Capital Market", 97),
        ch("Money Market", 106),
        ch("Leverage and EBIT Analysis", 118),
        ch("Capital Structure", 169),
        ch("Dividend Decisions", 202),
        ch("Comparative, Common-Size Statements & Trend Analysis", 225)
      ]),
      pdf("1u9f7C_ivoA6ButYDGT289tioEQpHKqDH", "FM - VOLUME -02.pdf", "Financial Management Vol 2", 230, [
        ch("Ratio Analysis", 9),
        ch("Time Value of Money", 40),
        ch("Capital Budgeting", 70),
        ch("Fund Flow Statement", 110),
        ch("Introduction to Working Capital Management", 155),
        ch("Receivables Management", 180),
        ch("Inventory Management", 195),
        ch("Management of Cash and Cash Equivalents", 213)
      ]),
      pdf("12WfoaL0LAE4SCBHp_5gOgbBUgvdE6-I1", "FM - BUILDING - BLOCKS.pdf", "FM Building Blocks", 146, [
        ch("Fundamentals & Leverage Building Blocks", 8),
        ch("Capital Structure & Dividend Building Blocks", 40),
        ch("Working Capital Building Blocks", 80),
        ch("Capital Budgeting Building Blocks", 110)
      ]),
      pdf("1ZkmBa3iIL_bT2ckV3xDARbtjM83kkzZG", "2B.CH-08 CAPITAL BUDGETING.pdf", "Standalone Chapter 8 · Capital Budgeting", 41, [
        ch("Capital Budgeting — Full Chapter", 1)
      ]),
      pdf("10sgTH3j170XtKKw6YURzQirS2cklBnPb", "DA MB.pdf", "Data Analytics Main Book", 110, [
        ch("Introduction to Data Analytics", 10),
        ch("Data Collection, Cleaning & Preparation", 25),
        ch("Descriptive Analytics & Visualisation", 45),
        ch("Spreadsheet / Analytical Tools for CMA", 70),
        ch("Interpretation & Decision Support", 90)
      ]),
      pdf("1SJxocc_pqIN3jS2PL3y9hAgIaNCN-Otn", "FM - CHART BOOK.pdf", "FM Formula Chart Book", 130, [
        ch("Ratio, Leverage & Capital Structure Charts", 6),
        ch("Working Capital Charts", 40),
        ch("Capital Budgeting & Time Value Charts", 70),
        ch("Dividend & Fund Flow Charts", 100)
      ])
    ]
  },
  {
    id: "paper-12",
    group: "GROUP 2",
    paperNumber: "PAPER 12",
    title: "MANAGEMENT ACCOUNTING (MA)",
    shortName: "Management Accounting",
    category: "Strategic Management Accounting",
    color: "#10b981",
    bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(52, 211, 153, 0.02) 100%)",
    iconName: "Briefcase",
    folderUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
    badgeText: "Group 2 Core",
    description: "MA Main Book, Building Blocks, Chart Book and Learning Curve — chapters read from each PDF.",
    files: [
      pdf("1OYtY7P4eO3Caerh4a5m7EBqTNF8Uo-J3", "MANAGEMENT ACCOUNTING - MAIN BOOK.pdf", "Management Accounting Main Book", 283, [
        ch("Introduction to Management Accounting", 8),
        ch("Activity Based Costing", 8),
        ch("Decision Theory & Decision Making", 40),
        ch("Marginal Costing", 70),
        ch("Transfer Pricing", 110),
        ch("Standard Costing", 140),
        ch("Budget and Budgetary Control", 180),
        ch("Divisional Performance Measurement", 210),
        ch("Responsibility Accounting", 240),
        ch("Learning Curve", 260)
      ]),
      pdf("1bRkQepb5rvTt6I-ihRhih8yV_ul6wxFA", "MA BB.pdf", "MA Building Blocks", 112, [
        ch("Introduction to Management Accounting", 6),
        ch("Divisional Performance Measurement", 20),
        ch("DuPont Analysis", 24),
        ch("ROI, RI & Performance Tools", 27),
        ch("Economic Value Added (EVA)", 35),
        ch("Learning Curve", 42),
        ch("Balanced Scorecard for Variable Pay", 45),
        ch("Decision Theory", 55),
        ch("Responsibility Accounting", 70),
        ch("Marginal Costing", 83),
        ch("Transfer Pricing", 98),
        ch("Standard Costing", 102),
        ch("Budget and Budgetary Control", 108)
      ]),
      pdf("1wpLyxD1FMx18dujz0v7a9jQz31r_WCv5", "MA CHART BOOK .pdf", "MA Chart Book Summary", 78, [
        ch("Decision Making & Marginal Costing Charts", 4),
        ch("Transfer Pricing & Standard Costing Charts", 25),
        ch("Budget, EVA, ROI & Balanced Scorecard Charts", 50)
      ]),
      pdf("10QHtA0LiGy2viWQJVNCe9PUECJtEeiS1", "chp-6 learning curve .pdf", "Standalone Chapter 6 · Learning Curve", 32, [
        ch("Learning Curve — Full Chapter", 1)
      ])
    ]
  }
];
