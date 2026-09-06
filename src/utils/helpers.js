/**
 * filterProjects — filter projects by category and/or search query.
 * @param {Array} projects
 * @param {string} category  - "All" or a specific category string
 * @param {string} query     - free-text search string
 * @returns {Array} filtered projects
 */
export function filterProjects(projects, category = "All", query = "") {
  let result = projects;

  if (category && category !== "All") {
    result = result.filter((p) =>
      p.categories?.some(
        (c) => c.toLowerCase() === category.toLowerCase()
      )
    );
  }

  if (query.trim()) {
    const q = query.toLowerCase();
    result = result.filter(
      (p) =>
        p.title?.toLowerCase().includes(q) ||
        p.shortDescription?.toLowerCase().includes(q) ||
        p.technologies?.some((t) => t.toLowerCase().includes(q)) ||
        p.categories?.some((c) => c.toLowerCase().includes(q))
    );
  }

  return result;
}

/**
 * getProjectById — find a project by its id string.
 * @param {Array} projects
 * @param {string} id
 * @returns {Object|undefined}
 */
export function getProjectById(projects, id) {
  return projects.find((p) => p.id === id);
}

/**
 * formatDate — format a date string nicely
 */
export function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}
