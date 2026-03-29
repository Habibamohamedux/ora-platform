# ORA Platform

**A Connected Digital Healthcare System for Maternal Care**

---

## Overview

ORA is a comprehensive digital healthcare platform developed as a graduation project to improve the quality, accessibility, and continuity of care in obstetrics and gynecology.

The system connects patients, healthcare professionals, and medical data within a unified ecosystem. By integrating clinical tools, educational resources, and real-time health monitoring, ORA supports more informed decision-making and more efficient healthcare delivery.

---

## Background

Maternal healthcare systems often face challenges related to fragmented data, limited patient awareness, and inefficient communication between patients and healthcare providers. These limitations can negatively impact both patient experience and clinical outcomes.

ORA addresses these challenges by providing a centralized, technology-driven platform that enhances communication, improves access to information, and supports continuous monitoring.

---

## Objectives

* Provide a unified platform for interaction between patients and healthcare providers
* Improve access to reliable and structured medical knowledge
* Support doctors with organized and accessible patient data
* Enable real-time health monitoring through wearable technology
* Enhance decision-making using both real-time and historical data

---

## System Overview

ORA is designed as an integrated ecosystem consisting of three main components:

* **Web Application (Doctor & Admin Dashboard)**
  Used by healthcare professionals to manage patients, monitor data, and access system tools

* **User Interface (Patients & Partners)**
  Provides access to medical information, personal data, and educational content

* **Smart Bracelet Integration**
  Collects real-time health data and synchronizes it with the platform

These components work together to ensure continuous data flow and seamless communication across all users.

---

## System Architecture

The system follows a modern client-server architecture:

* **Frontend Layer:**
  Built using React (Vite), responsible for user interaction and interface rendering

* **Backend Layer:**
  Managed through Supabase, handling authentication, APIs, and business logic

* **Database Layer:**
  PostgreSQL database used for storing structured medical and user data

* **Integration Layer:**
  Connects wearable device data with the backend in real time

This layered architecture ensures scalability, security, and efficient data handling.

---

## Key Features

* **Patient Management System**
  Structured records including personal history, medical data, and lifestyle factors

* **Learning Hub**
  Educational resources designed to improve patient awareness

* **Research Center**
  Access to science-based articles for academic and clinical use

* **Legal Center**
  Clear presentation of healthcare policies and compliance information

* **Authentication & Role Management**
  Secure login with role-based access (Admin, Doctor, Patient)

* **Wearable Integration**
  Real-time health tracking through a connected smart bracelet

---

## User Flow

### Doctor Flow

1. Secure login
2. Access dashboard
3. View and manage patient records
4. Monitor patient health data
5. Update medical information

### Patient Flow

1. Secure login
2. Access personal dashboard
3. View health data and history
4. Access educational content
5. Stay connected with healthcare provider

---

## Methodology

The development of ORA followed a structured approach:

* **Research Phase:**
  دراسة احتياجات المستخدمين (patients and doctors) وتحليل الأنظمة المشابهة

* **Design Phase:**
  إنشاء واجهات مستخدم تركز على سهولة الاستخدام وتجربة المستخدم (UX/UI)

* **Development Phase:**
  تنفيذ النظام باستخدام تقنيات حديثة (React, Supabase, PostgreSQL)

* **Testing Phase:**
  التأكد من كفاءة النظام، سهولة الاستخدام، وأمان البيانات

This methodology ensured that the system is both functional and user-centered.

---

## Technology Stack

* **Frontend:** React (Vite)
* **Backend:** Supabase
* **Database:** PostgreSQL

---

## Project Structure

```bash
ora-platform/
│
├── client/        # Frontend application
├── supabase/      # Backend configuration and database
├── docs/          # Documentation and design assets
│
├── .env.example
└── README.md
```

---

## Setup Instructions

```bash
git clone https://github.com/your-username/ora-platform.git
cd ora-platform/client
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the `client` directory:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

---

## Project Status

This project is currently under development as part of a graduation requirement. Additional features and improvements are planned.

---

## Future Work

* AI-assisted health insights
* Advanced data analytics for doctors
* Expanded wearable device capabilities
* Mobile application development

---

## Conclusion

ORA demonstrates how digital systems can enhance maternal healthcare by combining accessibility, structured data, and real-time monitoring into a single platform.

The project reflects an interdisciplinary approach that bridges healthcare and technology to create a more connected and efficient care experience.
