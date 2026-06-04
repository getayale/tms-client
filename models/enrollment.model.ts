import { Temporal } from "@js-temporal/polyfill";
export interface enrollmentRecord{
    readonly studentId:string;
    readonly courseCode:string;
    enrolledAt:Temporal.Instant;
}