/* =========================================================
   SHARED APP DATA + HELPERS
   This is FAKE/MOCK data so the frontend has something to show
   before the backend team gives you a real API.
   When the backend is ready, replace the MOCK_* objects below
   with fetch() calls to your API, e.g.:

     const res = await fetch("https://your-api.com/attendance");
     const data = await res.json();

   Everything else (the HTML/CSS) can stay the same.
   ========================================================= */

// A fake logged-in member, used on member-facing pages.
// "Member" here could be a student, an employee, a gym-goer, a volunteer —
// anyone whose attendance is being tracked.
const MOCK_STUDENT = {
  name: "Thato Mokoena",
  studentNumber: "ID-20231145",
  modules: ["Product Team Standup", "New Hire Onboarding", "Tuesday Evening Yoga"],
};

// A fake week of attendance for the student dashboard's "week strip"
const MOCK_WEEK = [
  { day: "Mon", status: "present" },
  { day: "Tue", status: "present" },
  { day: "Wed", status: "absent" },
  { day: "Thu", status: "present" },
  { day: "Fri", status: "pending" },
  { day: "Sat", status: "future" },
  { day: "Sun", status: "future" },
];

// A fake organizer with multiple groups (per the "multiple modules" requirement
// — the same idea applies to a manager running several teams, a gym instructor
// running several classes, or a lecturer running several modules).
const MOCK_LECTURER = {
  name: "N. Dube",
  modules: [
    { id: "swe2", name: "Product Team Standup", students: 48 },
    { id: "db1", name: "New Hire Onboarding", students: 61 },
    { id: "net1", name: "Tuesday Evening Yoga", students: 39 },
  ],
};

// Fake weekly attendance percentages per group, used by Chart.js
const MOCK_ATTENDANCE_TRENDS = {
  swe2: { labels: ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5", "Wk6"], data: [92, 88, 85, 80, 76, 74] },
  db1:  { labels: ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5", "Wk6"], data: [95, 93, 94, 90, 91, 89] },
  net1: { labels: ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5", "Wk6"], data: [88, 84, 79, 70, 65, 60] },
};

// Fake at-risk members, used on the organizer dashboard
const MOCK_AT_RISK = [
  { name: "Lindiwe Zulu", module: "Tuesday Evening Yoga", missed: 5, level: "risk" },
  { name: "Sipho Nkosi", module: "Tuesday Evening Yoga", missed: 4, level: "risk" },
  { name: "Amanda van Wyk", module: "Product Team Standup", missed: 3, level: "watch" },
  { name: "Kagiso Molefe", module: "New Hire Onboarding", missed: 2, level: "watch" },
];

// Highlights the current page's link in the sidebar automatically.
// Call this once on every page after the sidebar HTML has loaded.
function highlightActiveNav() {
  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", highlightActiveNav);
