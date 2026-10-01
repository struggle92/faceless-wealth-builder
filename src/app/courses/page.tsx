const courseCatalog = [
  { title: "Digital Asset Blueprint", level: "Beginner", price: "$79", lessons: 12, summary: "Create a clear offer, asset stack, and first revenue system without relying on a personal brand." },
  { title: "Affiliate Funnel Playbook", level: "Intermediate", price: "$129", lessons: 10, summary: "Learn how to build repeatable affiliate offers that expand your reach and improve conversion quality." },
  { title: "Automated Revenue OS", level: "Advanced", price: "$199", lessons: 16, summary: "Turn lead generation, email funnels, and digital offers into an automated business engine." },
];

export default function CoursesPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-top">
          <span className="kicker">Course library</span>
          <h1>Build your knowledge stack.</h1>
          <p>Each course focuses on creating repeatable revenue systems instead of chasing constant attention.</p>
        </div>

        <div className="course-list">
          {courseCatalog.map((course) => (
            <article key={course.title} className="course-card">
              <div className="course-image" aria-label={course.title} />
              <div className="course-body">
                <div className="course-meta">
                  <span>{course.level}</span>
                  <span>{course.lessons} lessons</span>
                </div>
                <h3>{course.title}</h3>
                <p>{course.summary}</p>
                <div style={{ marginTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>{course.price}</strong>
                  <a href="/pricing" className="button-secondary">Enroll now</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
