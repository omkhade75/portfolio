import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume(output_filename):
    doc = SimpleDocTemplate(
        output_filename,
        pagesize=letter,
        rightMargin=32,
        leftMargin=32,
        topMargin=28,
        bottomMargin=28,
        title="Om Ajinath Khade - Resume",
        author="Om Ajinath Khade",
        subject="Om Ajinath Khade - AI & Data Science Engineer Resume"
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
        fontSize=10,
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
    story.append(Paragraph("OM AJINATH KHADE", title_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("AI & DATA SCIENCE ENGINEER | FULL-STACK DEVELOPER", subtitle_style))
    story.append(Spacer(1, 3))
    
    # Contact Row
    contact_info = "Email: omkhade09@gmail.com  |  Phone: +91 7588021256  |  Location: Kolhapur, Maharashtra, India (Open to Relocation / Remote)<br/>" \
                   "GitHub: github.com/omkhade75  |  LinkedIn: linkedin.com/in/om-khade-596295372  |  Portfolio: omkhadeportfolio.onrender.com"
    story.append(Paragraph(contact_info, contact_style))
    story.append(Spacer(1, 5))
    story.append(HRFlowable(width="100%", thickness=1.2, color=colors.HexColor('#111827'), spaceAfter=5))

    # 2. Education Section
    story.append(Paragraph("EDUCATION & ACADEMIC STANDING", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#D1D5DB'), spaceAfter=4))
    
    edu_text = "<b>B.Tech in Artificial Intelligence & Data Science</b> — Next Wave Institute of Advanced Technology (collaborated with SGU)<br/>" \
               "• <b>Academic Metrics</b>: Semester 1: <b>9.5 SGPA</b> | Semester 2: <b>9.32 SGPA</b> (Current Sem 3: Advanced DSA in C++ & Distributed Backends)<br/>" \
               "• <b>Competitive Entrance</b>: MHT-CET: <b>96 Percentile</b> | JEE Main: <b>91 Percentile</b> | 10th Board: <b>92%</b>"
    story.append(Paragraph(edu_text, body_style))
    story.append(Spacer(1, 5))

    # 3. Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#D1D5DB'), spaceAfter=4))
    
    skills_text = "• <b>Languages</b>: C++, Python, JavaScript (ES6+), TypeScript, SQL<br/>" \
                  "• <b>Full-Stack & Backend</b>: React JS, Node.js, Express.js, RESTful APIs, JWT Authentication, Tailwind CSS<br/>" \
                  "• <b>Databases & ORM</b>: PostgreSQL, Prisma ORM, Supabase, MongoDB, MySQL<br/>" \
                  "• <b>AI & Emerging Systems</b>: Multi-Agent AI Systems, OpenAI API, ElevenLabs Voice, RAG Pipelines, Three.js / WebGL<br/>" \
                  "• <b>Developer Tools</b>: Git, GitHub, Postman, Vite, VS Code, Render, Vercel, Linux / Bash"
    story.append(Paragraph(skills_text, body_style))
    story.append(Spacer(1, 5))

    # 4. Featured Projects
    story.append(Paragraph("FEATURED PROJECTS & SYSTEMS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#D1D5DB'), spaceAfter=4))

    projects = [
        (
            "OmniMind AI — Enterprise Multi-Agent ERP System",
            "React, TypeScript, Node.js, Prisma ORM, PostgreSQL, Multi-Agent AI",
            "https://omni-ai-5uz8.onrender.com",
            [
                "Architected a decoupled multi-agent ERP platform orchestrating autonomous executive personas (CEO, CFO, COO agents) for automated retail risk analysis.",
                "Engineered relational PostgreSQL schema via Prisma ORM for tracking inventory ledger shifts and POS transactions, coupled with live external market data APIs."
            ]
        ),
        (
            "Saffron — Restaurant Operating System & POS",
            "React 19, Node.js, Express.js, PostgreSQL, Prisma ORM, TanStack Query",
            "https://restorant1-frontend.onrender.com/login",
            [
                "Built an end-to-end restaurant POS and Kitchen Display System (KDS) using TanStack Query server-state caching for real-time order synchronization across tablet stations.",
                "Designed Role-Based Access Control (RBAC) across waitstaff and administrative endpoints, with dynamic UPI payment QR code generation for instant table-side billing."
            ]
        ),
        (
            "Agentrix — AI Voice Agent Playground",
            "React, TypeScript, Node.js, Supabase, OpenAI API, ElevenLabs",
            "https://agentixxai.lovable.app",
            [
                "Developed a conversational voice agent orchestration playground with a low-latency Node.js audio streaming buffer proxy piping TTS chunks from ElevenLabs to client visualizers.",
                "Implemented Web Audio API AnalyserNode frequency extraction for real-time waveform visualization alongside customizable JSONB prompt profiles."
            ]
        ),
        (
            "MediCare — Cloud-Native Hospital Management OS",
            "React 18, TypeScript, Supabase Edge Functions, PostgreSQL RLS, OpenAI API",
            "https://hospital-man-fronted.onrender.com/",
            [
                "Constructed a multi-role hospital management platform utilizing Supabase Edge Functions and PostgreSQL Row Level Security (RLS) for doctor/patient data privacy.",
                "Integrated an automated OpenAI triage assistant for intelligent initial symptom pre-screening and appointment classification."
            ]
        )
    ]

    for proj_title, tech_stack, demo_url, bullets in projects:
        story.append(Paragraph(f"<b>{proj_title}</b> <font color='#4B5563'>| {tech_stack}</font>", item_title))
        story.append(Paragraph(f"<i>Live URL: {demo_url}</i>", item_sub))
        for b in bullets:
            story.append(Paragraph(f"• {b}", body_style))
        story.append(Spacer(1, 2.5))

    story.append(Spacer(1, 2))

    # 5. Hackathons & Achievements
    story.append(Paragraph("HACKATHONS & RECOGNITION", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#D1D5DB'), spaceAfter=4))

    achievements = [
        "• <b>NASA International Space Apps Challenge (2025)</b>: Awarded <b>Galactic Problem Solver</b> for building technology-driven space data analytics solutions.",
        "• <b>Smart India Hackathon (SIH 2025)</b>: <b>National Participant</b> selected in India's flagship innovation competition by the Ministry of Education & AICTE.",
        "• <b>Specialized Buildathons</b>: Competed in OpenAI Academy × NxtWave Buildathon, Murf AI Hackathon, Meta × Scaler Hackathon, and Takeover Hackathon."
    ]

    for ach in achievements:
        story.append(Paragraph(ach, body_style))
        story.append(Spacer(1, 1.5))

    doc.build(story)
    print(f"PDF successfully generated at {output_filename}")

if __name__ == "__main__":
    out1 = r"d:\projects\portfolio light\public\Om_Khade_Resume.pdf"
    out2 = r"d:\projects\portfolio light\public\resume.pdf"
    create_resume(out1)
    create_resume(out2)
