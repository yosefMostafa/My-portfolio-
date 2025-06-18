export default interface ProjectInterface {
    title: string; // The title of the project
    desc: string; // A brief description of the project
    image: string; // Optional image URL for the project
    link?: string[]; // Optional link to the project or its repository
    tags?: string[]; // Optional array of tags or technologies used in the project
}