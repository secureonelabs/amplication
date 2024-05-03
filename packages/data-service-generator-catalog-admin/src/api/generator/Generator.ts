import { Version } from "../version/Version";

export type Generator = {
  createdAt: Date;
  fullName: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  version?: Array<Version>;
};
