// Create a interface for the Candidate object
export interface Candidate {
  readonly avatar_url: string;
  readonly login: string;
  readonly location?: string;
  readonly email?: string;
  readonly company?: string;
  readonly bio?: string;
}
