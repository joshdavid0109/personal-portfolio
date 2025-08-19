const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

(async () => {
  try {
    const pdfPath = path.join(__dirname, '..', 'public', 'resume.pdf');
    const dataBuffer = fs.readFileSync(pdfPath);
    const { text } = await pdf(dataBuffer);

    const result = {};

    // Normalize whitespace to catch broken links
    const flat = text.replace(/\s+/g, ' ');

    // Basic fields
    result.email = (flat.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i) || [])[0] || null;

    // Allow optional protocol
    const ghMatch = flat.match(/(?:https?:\/\/)?(?:www\.)?github\.com\/[A-Za-z0-9._-]+/i);
    result.github = ghMatch ? (ghMatch[0].startsWith('http') ? ghMatch[0] : 'https://' + ghMatch[0]) : null;

    const liMatch = flat.match(/(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/[A-Za-z0-9._%\-]+/i);
    result.linkedin = liMatch ? (liMatch[0].startsWith('http') ? liMatch[0] : 'https://' + liMatch[0]) : null;

    const twMatch = flat.match(/(?:https?:\/\/)?(?:www\.)?(?:twitter\.com|x\.com)\/[A-Za-z0-9_]+/i);
    result.twitter = twMatch ? (twMatch[0].startsWith('http') ? twMatch[0] : 'https://' + twMatch[0]) : null;

    // Try to infer name from first lines
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const nameCandidate = lines.find(l => /^[A-Z][a-z]+(?:\s[A-Z][a-z]+){1,3}$/.test(l));
    result.name = nameCandidate || 'Joshua David';

    // Naive project extraction following a 'Projects' header
    const projectsIndex = lines.findIndex(l => /^projects?\b/i.test(l));
    const projects = [];
    if (projectsIndex >= 0) {
      const windowLines = lines.slice(projectsIndex + 1, projectsIndex + 60);
      for (let i = 0; i < windowLines.length - 1; i++) {
        const title = windowLines[i].replace(/^[-•\u2022]\s*/, '');
        const next = (windowLines[i + 1] || '').replace(/^[-•\u2022]\s*/, '');
        if (/^[A-Za-z0-9][A-Za-z0-9 \-:&()/#]+$/.test(title) && title.length <= 100) {
          const urlMatch = (title + ' ' + next).match(/(?:https?:\/\/)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}\/[A-Za-z0-9\-._/#?=&%]+/i);
          projects.push({
            title,
            description: next && next.length > 0 ? next : null,
            url: urlMatch ? (urlMatch[0].startsWith('http') ? urlMatch[0] : 'https://' + urlMatch[0]) : null,
          });
        }
        if (projects.length >= 3) break;
      }
    }
    result.projects = projects;

    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})(); 