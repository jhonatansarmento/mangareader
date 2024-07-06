/**
 * Generates a URL-friendly slug from a given title.
 *
 * @param {string} title - The title to be converted into a slug.
 * @returns {string} The generated slug.
 */
export const slugify = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};
