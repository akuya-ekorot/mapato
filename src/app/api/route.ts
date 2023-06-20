import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../../../sanity/env";
import { NextResponse } from "next/server";

// Set up the client for fetching data
const client = createClient({
  projectId,
  dataset,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion,
});

// build the query
const query = `
*[_type == "page" && title == "Home"]{
	"hero": hero->{title, subtitle, "backgroundImage": backgroundImage.asset->url},
	"sections": sections[]->{
		"title": display_title,
		"description": description,
		"slug": slug.current
	},
}[0]
`;

const servicesQuery = `
*[_type == "service"]{
	name,
	"slug": slug.current,
	"image": image.asset->url,
	description,
}
`;

export async function GET() {
  const pageData = await client.fetch(query);
  const serviceData = await client.fetch(servicesQuery);

  return NextResponse.json({ page: pageData, services: serviceData });
}
