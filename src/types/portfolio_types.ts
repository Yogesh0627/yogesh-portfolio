export interface ProjectType {
    id: number;
    title: string;
    description: string;
    src: string;   // image URL
    href: string;  // project link
}

export interface BlogFrontMatterType{
    title: string,
    description: string,
    date: string

}


export interface ExpandableChipDataType{
    id: number,
    logo: string,
    title: string
}