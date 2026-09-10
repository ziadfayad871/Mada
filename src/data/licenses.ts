export interface LicenseItem {
  id: string;
  title: string;
  authority: string;
  issueNumber: string;
  description: string;
  qrPlaceholder: string;
  iconName: string;
}

export const LICENSES: LicenseItem[] = [
  {
    id: "gcam-license",
    title: "ترخيص الهيئة العامة للإعلام المرئي والمسموع",
    authority: "الهيئة العامة للإعلام المرئي والمسموع - المملكة العربية السعودية",
    issueNumber: "LIC-2024-MADA890",
    description: "ترخيص رسمي معتمد لممارسة نشاط إنتاج وتطوير المحتوى التسويقي والمرئي والإعلاني.",
    qrPlaceholder: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MADA_GCAM_LICENSE_VERIFIED",
    iconName: "ShieldCheck"
  },
  {
    id: "commercial-reg",
    title: "السجل التجاري والاعتماد التسويقي",
    authority: "وزارة التجارة - المملكة العربية السعودية",
    issueNumber: "CR-1010789234",
    description: "شهادة اعتماد وتوثيق التجارة والتسويق الرقمي وإدارة الحملات الإعلانية.",
    qrPlaceholder: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MADA_COMMERCIAL_REGISTRATION_VERIFIED",
    iconName: "FileCheck"
  }
];
