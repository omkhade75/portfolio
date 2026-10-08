import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

def create_resume(output_filename):
    doc = SimpleDocTemplate(
        output_filename,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=32,
        bottomMargin=32,
        title="Om Khade - Resume",
        author="Om Khade",
        subject="Om Khade - Full Stack Intern Resume"
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=colors.HexColor('#121212'),
        alignment=TA_CENTER
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=colors.HexColor('#1D4ED8'),
        alignment=TA_CENTER
    )

    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=colors.HexColor('#374151'),
        alignment=TA_CENTER
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=colors.HexColor('#111827'),
        alignment=TA_LEFT
    )

    item_title = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#111827')
    )

    item_sub = ParagraphStyle(
        'ItemSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=7.5,
        leading=9.5,
        textColor=colors.HexColor('#4B5563')
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=colors.HexColor('#1F2937')
    )

    story = []

    # 1. Header Name & Subtitle
    story.append(Paragraph("OM KHADE", title_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("FULL STACK INTERN", subtitle_style))
    story.append(Spacer(1, 3))
    
    # Contact Row
    contact_info = "Kolhapur, Maharashtra  •  7588021256  •  omkhade09@gmail.com  •  GitHub: github.com/omkhade75  •  LinkedIn: linkedin.com/in/om-khade-596295372  •  Portfolio: omkhadeportfolio.onrender.com"
    story.append(Paragraph(contact_info, contact_style))
    story.append(Spacer(1, 5))
    story.append(HRFlowable(width="100%", thickness=1.2, color=colors.HexColor('#111827'), spaceAfter=5))

    # 2. Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#D1D5DB'), spaceAfter=4))
    summary_text = "B.Tech CSE (AI & Data Science) student at Sanjay Ghodawat University with hands-on experience building full-stack applications, backend APIs and AI-powered systems. Skilled in React, JavaScript, Node.js, Express.js, PostgreSQL, MongoDB, Prisma and Supabase, with practical experience in REST APIs, authentication, RBAC/RLS and AI/API integrations. Seeking a Full Stack/SDE internship to build reliable, user-focused software across frontend, backend and AI layers."
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 5))

    # 3. Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#D1D5DB'), spaceAfter=4))
    skills_text = "• <b>Languages</b>: C++, JavaScript, Python, SQL<br/>" \
                  "• <b>Frontend</b>: React.js, Vite, HTML, CSS, Tailwind CSS<br/>" \
                  "• <b>Backend</b>: Node.js, Express.js, REST APIs, Prisma ORM<br/>" \
                  "• <b>Databases & Auth</b>: PostgreSQL, MongoDB, Supabase, JWT, RBAC, Row Level Security<br/>" \
                  "• <b>AI Tools & Integrations</b>: Gemini API, Vapi, ElevenLabs, AssemblyAI, Murf AI, Lovable, Antigravity<br/>" \
                  "• <b>Developer Tools</b>: Git, GitHub, Postman, VS Code, npm, Render"
    story.append(Paragraph(skills_text, body_style))
    story.append(Spacer(1, 5))

    # 4. Selected Projects
    story.append(Paragraph("SELECTED PROJECTS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#D1D5DB'), spaceAfter=4))

    projects = [
        (
            "OmniMind AI — Decision Intelligence OS",
            "React, Node.js, Prisma, PostgreSQL, Tailwind CSS",
            "GitHub: github.com/omkhade75/omni-mind-vue  |  Live Demo: bizora-owner.onrender.com",
            [
                "Built a modular decision-intelligence platform spanning billing/POS, inventory, CRM, suppliers, finance, operations, forecasting and AI workflows.",
                "Designed a normalized PostgreSQL schema with 18+ interconnected models using Prisma ORM; implemented RBAC, protected routes and audit logging.",
                "Built role-aware dashboards and business workflows for sales, inventory, CRM, finance and operations with AI-assisted decision support."
            ]
        ),
        (
            "MediCare Hospital Management System",
            "React, Vite, Tailwind CSS, Supabase, PostgreSQL",
            "GitHub: github.com/omkhade75/hospital_man  |  Live Demo: hospital-man-fronted.onrender.com",
            [
                "Built a multi-role hospital platform for patient registration, appointments, doctor/nurse workflows, wards/beds and emergency operations.",
                "Implemented Supabase Auth, PostgreSQL Row Level Security and server-side functions; added dashboards, PDF reports and AI voice/chat integrations.",
                "Created responsive role-based dashboards and reporting workflows for hospital administration and clinical operations."
            ]
        ),
        (
            "Agentrix — Enterprise Voice Agent Platform",
            "React, Vite, Node.js, Express, Supabase, JWT",
            "GitHub: github.com/omkhade75/ai-calling-agent",
            [
                "Built a full-stack platform for configuring and managing AI voice agents, including onboarding, settings, phone routing and browser testing.",
                "Developed modular Express APIs and reusable React components with JWT authentication and voice/AI service integrations.",
                "Integrated browser-based voice-agent testing and configurable agent settings into the platform workflow."
            ]
        )
    ]

    for proj_title, tech_stack, demo_url, bullets in projects:
        story.append(Paragraph(f"<b>{proj_title}</b> <font color='#4B5563'>| {tech_stack}</font>", item_title))
        story.append(Paragraph(f"<i>{demo_url}</i>", item_sub))
        for b in bullets:
            story.append(Paragraph(f"• {b}", body_style))
        story.append(Spacer(1, 2.5))

    story.append(Spacer(1, 2))

    # 5. Education
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#D1D5DB'), spaceAfter=4))
    story.append(Paragraph("<b>B.Tech CSE (AI & Data Science)</b> | Sanjay Ghodawat University, Kolhapur | NIAT Upskilling Program | 2025–2029 | CGPA: 9.40", body_style))
    story.append(Paragraph("<b>HSC (12th)</b> | Shanti Junior College | 2025 | 68%", body_style))
    story.append(Paragraph("<b>SSC (10th)</b> | Model Public School | 2023 | 92%", body_style))
    story.append(Spacer(1, 4))

    # 6. Leadership & Achievements
    story.append(Paragraph("LEADERSHIP & ACHIEVEMENTS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#D1D5DB'), spaceAfter=4))
    achievements = [
        "• General Secretary, E-Cell, Sanjay Ghodawat University - led entrepreneurship activities, event coordination and team operations.",
        "• Hackathons: NASA Space Apps Challenge 2025 | Smart India Hackathon (SIH) | OpenAI Academy x NxtWave Buildathon 2026",
        "• Murf AI Hackathon 2026 | Meta x Scaler School of Technology Hackathon 2026 | NIAT TakeOver Hackathon 2026",
        "• JEE Main - 91 Percentile | MHT-CET - 95 Percentile."
    ]
    for ach in achievements:
        story.append(Paragraph(ach, body_style))
        story.append(Spacer(1, 1.5))

    doc.build(story)
    print(f"PDF successfully generated at {output_filename}")

if __name__ == "__main__":
    out1 = os.path.join(os.path.dirname(__file__), "public", "Om_Khade_Resume.pdf")
    create_resume(out1)
