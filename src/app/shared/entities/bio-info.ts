import { techStack, TechStackInfo } from "./tech-stack";

export const bio: Bio = {
    fName: 'Eric',
    lName: 'Johnson',
    locCity: 'Los Angeles',
    locState: 'CA',
    techStack,
};

export interface Bio {
    fName: string,
    lName: string,
    locCity: string,
    locState: string,
    techStack: TechStackInfo[]
}

export enum ServerSide {
    Front = 1,
    Back = 2
}

export const ServerSidemap: Map<ServerSide, string> = new Map<ServerSide, string>([
    [ServerSide.Front, 'Front End'],
    [ServerSide.Back, 'Back End']
])
