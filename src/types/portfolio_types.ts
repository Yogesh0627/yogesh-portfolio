export interface ProjectStackGroup {
    category: string;
    items: string[];
}

export interface ProjectType {
    id: number;
    title: string;
    description: string;
    src: string;      // image URL
    href: string;     // live / primary link
    github?: string;  // source repo (omit for private/company projects)
    tech?: string[];  // tech tags, mapped to icons in the UI

    // Case-study / detail-page fields (all optional)
    slug?: string;                  // /projects/{slug}
    tagline?: string;               // short one-liner under the title
    year?: string;                  // e.g. "2025"
    role?: string;                  // e.g. "Solo project" or "Software Engineer @ WoCo"
    overview?: string;              // what it is
    problem?: string;               // the problem it solves
    solution?: string;              // how it works / the approach
    features?: string[];            // key feature highlights
    stack?: ProjectStackGroup[];    // grouped tech stack
    contribution?: string[];        // my role & impact (esp. for company projects)
}

export interface BlogFrontMatterType{
    title: string,
    description: string,
    date: string,
    image?: string,
    tags?: string[]

}


export interface ExpandableChipDataType{
    id: number,
    logo: string,
    title: string
}