export default interface ProjectInterface {
    title: string; // The title of the project
    desc: string; // A brief description of the project
    images?: string[]; // Optional image URL for the project
    links?: Record<string, string>[]; // Optional link to the project or its repository
    tags?: string[];
    tech?:string[] // Optional array of tags or technologies used in the project
}