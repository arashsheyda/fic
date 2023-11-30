// In this file we'll have the utility functions ...

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[\s_]/g, '-') // Replace spaces and underscores with hyphens
    .replace(/[^\w-]/g, '') // Remove non-word characters (excluding hyphens)
    .replace(/--+/g, '-') // Replace multiple consecutive hyphens with a single hyphen
    .trim() // Trim leading and trailing hyphens
}
