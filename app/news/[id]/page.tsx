// app/news/[id]/page.tsx

import Link from 'next/link';
import { notFound } from 'next/navigation';

// In a real application, you would fetch this data from an API or database
const getNewsArticle = (id: string) => {
  const articles = [
    {
      id: "1",
      title: "GBR Students Shine in State Science Fair",
      date: "July 12, 2026",
      author: "Academic Dept.",
      content: `Our high school students secured the top three positions in the annual State Science Exhibition with their innovative renewable energy models. The exhibition, which saw participation from over 50 schools across the district, was a testament to the rigorous practical training provided at our A.C. Campus labs.
      
      The winning project, a cost-effective solar water purification system, was developed by a team of Class 9 students. They will now proceed to represent the district at the National Science Conclave in New Delhi next month. We congratulate the students and the science faculty for their outstanding dedication.`,
      category: "Achievement",
    },
    {
      id: "2",
      title: "New Synthetic Basketball Court Inaugurated",
      date: "June 28, 2026",
      author: "Sports Dept.",
      content: `Expanding our sports infrastructure, the A.C. Campus proudly inaugurates a state-of-the-art synthetic basketball court for our athletes. The inauguration ceremony was led by our Principal and featured a friendly exhibition match between the alumni and the current senior school team.
      
      This new facility is equipped with all-weather synthetic flooring and professional-grade lighting, ensuring our students can practice safely and effectively year-round.`,
      category: "Infrastructure",
    },
    {
      id: "3",
      title: "Annual Cultural Fest 'Tarang' Announced",
      date: "June 15, 2026",
      author: "Cultural Committee",
      content: `Get ready for a week of music, dance, and art. The much-awaited annual cultural festival, 'Tarang', is scheduled for the first week of September. This year's theme is "Heritage of India," and we encourage all students from Nursery to Class 10 to participate.
      
      Auditions for group dances, solo singing, and drama will begin in mid-August. Parents are warmly invited to attend the grand finale on September 5th.`,
      category: "Events",
    }
  ];

  return articles.find(article => article.id === id);
};

export default async function NewsArticlePage({ params }: { params: { id: string } }) {
  const article = getNewsArticle(params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Link href="/news" className="inline-flex items-center text-sm font-medium text-text-muted hover:text-primary transition-colors mb-8 min-h-[44px]">
        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back to Updates
      </Link>

      <article>
        <div className="h-48 sm:h-72 bg-surface-alt flex items-center justify-center border border-border rounded-[var(--radius-lg)]" aria-hidden="true">
          <span className="text-text-muted text-sm font-medium">Article Image Placeholder</span>
        </div>
        
        <div className="pt-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-[var(--radius-sm)]">
              {article.category}
            </span>
            <span className="text-sm text-text-muted">{article.date}</span>
            <span className="text-sm text-text-muted border-l border-border pl-4">By {article.author}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-8 leading-tight">
            {article.title}
          </h1>

          <div className="prose-width text-text-muted">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-5 text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}