import { createContext } from "react";
import { PerssistantStore } from "../db";


export const DatabaseContext = createContext<PerssistantStore | null>(null)