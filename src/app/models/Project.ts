export class Project{
    constructor(title:string, url:string, description:string, collaborators:string){
        this.title = title;
        this.url = url;
        this.description = description;
        this.collaborators = collaborators;
    }
    title:string;
    url:string;
    description:string;
    collaborators:string;
}