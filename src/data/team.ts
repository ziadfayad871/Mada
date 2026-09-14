export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  phone?: string;
  image: string;
  specialties: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "zahra-al-shehri",
    name: "زهراء الشهري",
    role: "Content Creator",
    phone: "0531134919",
    bio: "متخصصة في صناعة المحتوى الإبداعي وصياغة القصص التسويقية التي تلامس الجمهور وتصنع أثراً حقيقياً.",
    image: "/assets/team-zahra.svg",
    specialties: ["صناعة المحتوى", "كتابة السيناريو", "التوجيه الإبداعي"]
  },
  {
    id: "haya-al-ajmi",
    name: "هياء العجمي",
    role: "Co-Founder & Marketing",
    phone: "0557503280",
    bio: "شريكة مؤسسة وخبيرة في الاستراتيجيات التسويقية وبناء الهويات التجارية الناجحة في السوق السعودي.",
    image: "/assets/team-haya.svg",
    specialties: ["الاستراتيجيات التسويقية", "إدارة الحملات", "تطوير الأعمال"]
  }
];
