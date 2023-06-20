import { type SchemaTypeDefinition } from "sanity";
import section from "./schemas/section";
import service from "./schemas/service";
import page from "./schemas/page";
import hero from "./schemas/hero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, page, section, service],
};
