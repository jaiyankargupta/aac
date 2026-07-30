export const GITHUB_RELEASE_URL = "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0";
export const MAIN_DRIVE_LINK_G1 = GITHUB_RELEASE_URL;
export const MAIN_DRIVE_LINK_G2 = GITHUB_RELEASE_URL;
export const MAIN_DRIVE_LINK = GITHUB_RELEASE_URL;

const GITHUB_RELEASE_BASE = "https://github.com/jaiyankargupta/aac/releases/download/v1.0.0";

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

export const PAPERS_DATA = [
  // --- GROUP 1 PAPERS ---
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
    description: "Complete batch notes and lectures for Commercial, Corporate & Industrial Laws.",
    files: [
      {
        id: "1LxmsvcyGVcLO-rDN1R30zq7UtsmJTL09",
        name: "Business Law Ethics G-1 mb V-1.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1LxmsvcyGVcLO-rDN1R30zq7UtsmJTL09"),
        viewUrl: getViewLink("1LxmsvcyGVcLO-rDN1R30zq7UtsmJTL09"),
        size: "Main Book Vol 1"
      },
      {
        id: "1dYA3HGm1QQPf-mHLWFRqZ3otEZAW5tR-",
        name: "business law ethics mb vol2.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1dYA3HGm1QQPf-mHLWFRqZ3otEZAW5tR-"),
        viewUrl: getViewLink("1dYA3HGm1QQPf-mHLWFRqZ3otEZAW5tR-"),
        size: "Main Book Vol 2"
      },
      {
        id: "1mvZhjQ1Q2zd2mV4v9twnqL93oDIframy",
        name: "Law Ethics G-1 QB V-1.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1mvZhjQ1Q2zd2mV4v9twnqL93oDIframy"),
        viewUrl: getViewLink("1mvZhjQ1Q2zd2mV4v9twnqL93oDIframy"),
        size: "Question Bank Vol 1"
      },
      {
        id: "1jw_qECEcg8fCBGyaGmLQVoB4-9Vj8zfZ",
        name: "Law Ethics G-1 QB V-2.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1jw_qECEcg8fCBGyaGmLQVoB4-9Vj8zfZ"),
        viewUrl: getViewLink("1jw_qECEcg8fCBGyaGmLQVoB4-9Vj8zfZ"),
        size: "Question Bank Vol 2"
      },
      {
        id: "193NrFJlXIv2Dssf0FYIaDMtkXMbJgk-S",
        name: "Law Ethics Sarthi.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("193NrFJlXIv2Dssf0FYIaDMtkXMbJgk-S"),
        viewUrl: getViewLink("193NrFJlXIv2Dssf0FYIaDMtkXMbJgk-S"),
        size: "Law Sarthi Summary PDF"
      },
      {
        id: "1VbH-iJbrH2OF1GmuNhaadoESyTL73ogE",
        name: "business law ethics vol 1 (Ongoing).pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1VbH-iJbrH2OF1GmuNhaadoESyTL73ogE"),
        viewUrl: getViewLink("1VbH-iJbrH2OF1GmuNhaadoESyTL73ogE"),
        size: "Ongoing Batch Vol 1"
      },
      {
        id: "1EIgRuZ9suaJV15HqtlGBJBRv1wViBbdg",
        name: "business low ethics vol 2 (Ongoing).pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1EIgRuZ9suaJV15HqtlGBJBRv1wViBbdg"),
        viewUrl: getViewLink("1EIgRuZ9suaJV15HqtlGBJBRv1wViBbdg"),
        size: "Ongoing Batch Vol 2"
      },
      {
        id: "1YTLa6rZW4XqMc5m--Ncw1IQKZIueqYzL",
        name: "law question bank.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1YTLa6rZW4XqMc5m--Ncw1IQKZIueqYzL"),
        viewUrl: getViewLink("1YTLa6rZW4XqMc5m--Ncw1IQKZIueqYzL"),
        size: "Law Question Bank"
      }
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
    description: "Financial Accounting Main Volumes 1, 2, 3 PDF Books & Complete Problem Solutions.",
    files: [
      {
        id: "1kLSIRA7SC5v07hS4Bstkk2O_CHKLQpOb",
        name: "Financial Accounting Main V-1.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1kLSIRA7SC5v07hS4Bstkk2O_CHKLQpOb"),
        viewUrl: getViewLink("1kLSIRA7SC5v07hS4Bstkk2O_CHKLQpOb"),
        size: "Main Volume 1 PDF"
      },
      {
        id: "1qwWl5yB-1KNqT8jV-LKS9d-30T6uVORM",
        name: "Financial Accounting Main V-2.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1qwWl5yB-1KNqT8jV-LKS9d-30T6uVORM"),
        viewUrl: getViewLink("1qwWl5yB-1KNqT8jV-LKS9d-30T6uVORM"),
        size: "Main Volume 2 PDF"
      },
      {
        id: "1t9OzbXSjURyxa1cXcGAruo7v7n6q0qql",
        name: "Financial Accounting Main V-3.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1t9OzbXSjURyxa1cXcGAruo7v7n6q0qql"),
        viewUrl: getViewLink("1t9OzbXSjURyxa1cXcGAruo7v7n6q0qql"),
        size: "Main Volume 3 PDF"
      },
      {
        id: "1GBuEKW5ONRqGuxmqY4oSxtZ1ronYVXj6",
        name: "SOLUTIONS & PRACTICE SETS",
        type: "folder",
        downloadUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
        viewUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
        size: "Folder / Solutions"
      }
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
    description: "Direct Tax Modules (V1, V2, QB) & Indirect Tax (GST) Modules (V1, V2, QB) PDFs.",
    files: [
      {
        id: "1ItoPi9VEdUE9TTZhavJLq445kRxCaHTH",
        name: "1. DT MB V1.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1ItoPi9VEdUE9TTZhavJLq445kRxCaHTH"),
        viewUrl: getViewLink("1ItoPi9VEdUE9TTZhavJLq445kRxCaHTH"),
        size: "Direct Tax Main Book V1"
      },
      {
        id: "1-5JJ652930SD7Bx1-mDj0tTExUTi9wpz",
        name: "2. DT MB V2.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1-5JJ652930SD7Bx1-mDj0tTExUTi9wpz"),
        viewUrl: getViewLink("1-5JJ652930SD7Bx1-mDj0tTExUTi9wpz"),
        size: "Direct Tax Main Book V2"
      },
      {
        id: "1Fqv1BNW6p6YSwBp5znvMVxlpu3WFO2U7",
        name: "3. DT QB.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1Fqv1BNW6p6YSwBp5znvMVxlpu3WFO2U7"),
        viewUrl: getViewLink("1Fqv1BNW6p6YSwBp5znvMVxlpu3WFO2U7"),
        size: "Direct Tax Question Bank"
      },
      {
        id: "1t7ySvSguuuf7hvDlsj1fjT6FqJRFsw2h",
        name: "4. IDT MB V1.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1t7ySvSguuuf7hvDlsj1fjT6FqJRFsw2h"),
        viewUrl: getViewLink("1t7ySvSguuuf7hvDlsj1fjT6FqJRFsw2h"),
        size: "Indirect Tax Main Book V1"
      },
      {
        id: "1C52pr-nWHIXikzic_ky_YzhbiwDvAFqA",
        name: "5. IDT MB V2.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1C52pr-nWHIXikzic_ky_YzhbiwDvAFqA"),
        viewUrl: getViewLink("1C52pr-nWHIXikzic_ky_YzhbiwDvAFqA"),
        size: "Indirect Tax Main Book V2"
      },
      {
        id: "1NuxS2XsKKg7Nw7hMM6tsy2hn6JV0GDGt",
        name: "6. IDT QB.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1NuxS2XsKKg7Nw7hMM6tsy2hn6JV0GDGt"),
        viewUrl: getViewLink("1NuxS2XsKKg7Nw7hMM6tsy2hn6JV0GDGt"),
        size: "Indirect Tax Question Bank"
      },
      {
        id: "1w4_K8_5LbuNjAxEMuaXHOfb1rFefuWLG",
        name: "EXAMPLE & HW QUESTIONS",
        type: "folder",
        downloadUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
        viewUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
        size: "Folder / Practice"
      },
      {
        id: "1CDrvdME5EAKr0DyhZEdFN0ICZI-twoAU",
        name: "EXTRA FILES & AMENDMENTS",
        type: "folder",
        downloadUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
        viewUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
        size: "Folder / Amendments"
      }
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
    description: "Costing Main Book, Building Blocks PDF, and Formula Chart Book.",
    files: [
      {
        id: "1mTsjA5gXKeBsFIkMJUvHN3V291sNQKLG",
        name: "1. MAIN BOOK.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1mTsjA5gXKeBsFIkMJUvHN3V291sNQKLG"),
        viewUrl: getViewLink("1mTsjA5gXKeBsFIkMJUvHN3V291sNQKLG"),
        size: "Cost Accounting Main Book"
      },
      {
        id: "1_MMB1xb1EbAjfsH14KnbNibf26HmBnNb",
        name: "2. BUILDING BLOCKS.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1_MMB1xb1EbAjfsH14KnbNibf26HmBnNb"),
        viewUrl: getViewLink("1_MMB1xb1EbAjfsH14KnbNibf26HmBnNb"),
        size: "Foundational Concepts PDF"
      },
      {
        id: "1J967OMkvOy5sFJiNs7JdW13mI5Hhgbpj",
        name: "3. CHART BOOK.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1J967OMkvOy5sFJiNs7JdW13mI5Hhgbpj"),
        viewUrl: getViewLink("1J967OMkvOy5sFJiNs7JdW13mI5Hhgbpj"),
        size: "Formula & Summary Charts"
      },
      {
        id: "1FuVvb3r0_UBhm3V5VFXYlfSeCaoqNhvx",
        name: "EXTRA FILES",
        type: "folder",
        downloadUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
        viewUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
        size: "Folder / Practice"
      }
    ]
  },

  // --- GROUP 2 PAPERS ---
  {
    id: "paper-9",
    group: "GROUP 2",
    paperNumber: "PAPER 9",
    title: "OPERATIONS MANAGEMENT & STRATEGIC MANAGEMENT (OM SM)",
    shortName: "OM SM",
    category: "Operations & Strategy",
    color: "#8b5cf6", // Purple accent
    bgGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(167, 139, 250, 0.02) 100%)",
    iconName: "Boxes",
    folderUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
    badgeText: "Group 2 Core",
    description: "Operations Management Main Book, Building Blocks & Strategic Management Chart Book.",
    files: [
      {
        id: "1DZM9bQZCb8BXS8SUIYLBTn-DyJR-Isc4",
        name: "OM MB.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1DZM9bQZCb8BXS8SUIYLBTn-DyJR-Isc4"),
        viewUrl: getViewLink("1DZM9bQZCb8BXS8SUIYLBTn-DyJR-Isc4"),
        size: "Operations Management Main Book"
      },
      {
        id: "1lBg3T3v_GeUsHmq-RuExR_-_P-qp2cuN",
        name: "OM BUILDING- BLOCKS.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1lBg3T3v_GeUsHmq-RuExR_-_P-qp2cuN"),
        viewUrl: getViewLink("1lBg3T3v_GeUsHmq-RuExR_-_P-qp2cuN"),
        size: "Building Blocks PDF"
      },
      {
        id: "1FtXp5PODz4-gigRjpBUda1amW4mVsQL0",
        name: "SM - MAIN BOOK & CHART BOOK.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1FtXp5PODz4-gigRjpBUda1amW4mVsQL0"),
        viewUrl: getViewLink("1FtXp5PODz4-gigRjpBUda1amW4mVsQL0"),
        size: "Strategic Management Main & Chart Book"
      }
    ]
  },
  {
    id: "paper-10",
    group: "GROUP 2",
    paperNumber: "PAPER 10",
    title: "CORPORATE ACCOUNTING & AUDITING",
    shortName: "Co Acc & Audit",
    category: "Corporate Acc & Audit",
    color: "#ec4899", // Pink accent
    bgGradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(244, 114, 182, 0.02) 100%)",
    iconName: "FileCheck",
    folderUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
    badgeText: "Group 2 Core",
    description: "Corporate Accounting Main Book, Schedule III Solutions, and Auditing Main Book.",
    files: [
      {
        id: "19Y6MOCUOlHJWusttKHKvgdwmIZjNMkR7",
        name: "CORPORATE - ACCOUNTING - MAIN BOOK.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("19Y6MOCUOlHJWusttKHKvgdwmIZjNMkR7"),
        viewUrl: getViewLink("19Y6MOCUOlHJWusttKHKvgdwmIZjNMkR7"),
        size: "Corporate Accounting Main Book"
      },
      {
        id: "12zTMxkVg82wevBi-twQQ87Q6W0mtpCX4",
        name: "AUDIT MB.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("12zTMxkVg82wevBi-twQQ87Q6W0mtpCX4"),
        viewUrl: getViewLink("12zTMxkVg82wevBi-twQQ87Q6W0mtpCX4"),
        size: "Auditing Main Book"
      },
      {
        id: "1wseXO86hEkXyCpZOwpd4YJJZWXXorBzM",
        name: "COMPANY ACCOUNTS SCHEDULE 3 HW SOLUTIONS",
        type: "folder",
        downloadUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
        viewUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
        size: "Folder / Solutions"
      }
    ]
  },
  {
    id: "paper-11",
    group: "GROUP 2",
    paperNumber: "PAPER 11",
    title: "FINANCIAL MANAGEMENT & DATA ANALYTICS (FM DA)",
    shortName: "FM DA",
    category: "Financial Management & Analytics",
    color: "#06b6d4", // Cyan accent
    bgGradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(34, 211, 238, 0.02) 100%)",
    iconName: "TrendingUp",
    folderUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
    badgeText: "Group 2 Core",
    description: "Financial Management Vol 1, Vol 2, Capital Budgeting, Data Analytics MB & Chart Book.",
    files: [
      {
        id: "16YExX3Gb8v183rNxh3lZxlsbZniN_do_",
        name: "FM VOL 1.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("16YExX3Gb8v183rNxh3lZxlsbZniN_do_"),
        viewUrl: getViewLink("16YExX3Gb8v183rNxh3lZxlsbZniN_do_"),
        size: "Financial Management Vol 1"
      },
      {
        id: "1u9f7C_ivoA6ButYDGT289tioEQpHKqDH",
        name: "FM - VOLUME -02.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1u9f7C_ivoA6ButYDGT289tioEQpHKqDH"),
        viewUrl: getViewLink("1u9f7C_ivoA6ButYDGT289tioEQpHKqDH"),
        size: "Financial Management Vol 2"
      },
      {
        id: "12WfoaL0LAE4SCBHp_5gOgbBUgvdE6-I1",
        name: "FM - BUILDING - BLOCKS.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("12WfoaL0LAE4SCBHp_5gOgbBUgvdE6-I1"),
        viewUrl: getViewLink("12WfoaL0LAE4SCBHp_5gOgbBUgvdE6-I1"),
        size: "FM Building Blocks PDF"
      },
      {
        id: "1ZkmBa3iIL_bT2ckV3xDARbtjM83kkzZG",
        name: "2B.CH-08 CAPITAL BUDGETING.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1ZkmBa3iIL_bT2ckV3xDARbtjM83kkzZG"),
        viewUrl: getViewLink("1ZkmBa3iIL_bT2ckV3xDARbtjM83kkzZG"),
        size: "Capital Budgeting Chapter 8"
      },
      {
        id: "10sgTH3j170XtKKw6YURzQirS2cklBnPb",
        name: "DA MB.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("10sgTH3j170XtKKw6YURzQirS2cklBnPb"),
        viewUrl: getViewLink("10sgTH3j170XtKKw6YURzQirS2cklBnPb"),
        size: "Data Analytics Main Book"
      },
      {
        id: "1SJxocc_pqIN3jS2PL3y9hAgIaNCN-Otn",
        name: "FM - CHART BOOK.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1SJxocc_pqIN3jS2PL3y9hAgIaNCN-Otn"),
        viewUrl: getViewLink("1SJxocc_pqIN3jS2PL3y9hAgIaNCN-Otn"),
        size: "FM Formula Chart Book"
      },
      {
        id: "1CH2buSEXd8ghxKhsuTnm29YuEcYQYbDN",
        name: "HW SOLUTION",
        type: "folder",
        downloadUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
        viewUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
        size: "Folder / HW Solutions"
      }
    ]
  },
  {
    id: "paper-12",
    group: "GROUP 2",
    paperNumber: "PAPER 12",
    title: "MANAGEMENT ACCOUNTING (MA)",
    shortName: "Management Accounting",
    category: "Strategic Management Accounting",
    color: "#10b981", // Emerald accent
    bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(52, 211, 153, 0.02) 100%)",
    iconName: "Briefcase",
    folderUrl: "https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0",
    badgeText: "Group 2 Core",
    description: "Management Accounting Main Book, Building Blocks, Chart Book & Learning Curve PDF.",
    files: [
      {
        id: "1OYtY7P4eO3Caerh4a5m7EBqTNF8Uo-J3",
        name: "MANAGEMENT ACCOUNTING - MAIN BOOK.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1OYtY7P4eO3Caerh4a5m7EBqTNF8Uo-J3"),
        viewUrl: getViewLink("1OYtY7P4eO3Caerh4a5m7EBqTNF8Uo-J3"),
        size: "Management Accounting Main Book"
      },
      {
        id: "1bRkQepb5rvTt6I-ihRhih8yV_ul6wxFA",
        name: "MA BB.pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1bRkQepb5rvTt6I-ihRhih8yV_ul6wxFA"),
        viewUrl: getViewLink("1bRkQepb5rvTt6I-ihRhih8yV_ul6wxFA"),
        size: "MA Building Blocks"
      },
      {
        id: "1wpLyxD1FMx18dujz0v7a9jQz31r_WCv5",
        name: "MA CHART BOOK .pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("1wpLyxD1FMx18dujz0v7a9jQz31r_WCv5"),
        viewUrl: getViewLink("1wpLyxD1FMx18dujz0v7a9jQz31r_WCv5"),
        size: "MA Chart Book Summary"
      },
      {
        id: "10QHtA0LiGy2viWQJVNCe9PUECJtEeiS1",
        name: "chp-6 learning curve .pdf",
        type: "pdf",
        downloadUrl: getDirectDownloadLink("10QHtA0LiGy2viWQJVNCe9PUECJtEeiS1"),
        viewUrl: getViewLink("10QHtA0LiGy2viWQJVNCe9PUECJtEeiS1"),
        size: "Learning Curve Chapter 6"
      }
    ]
  }
];
