import { client } from "./client";

type SanityFetchProps = {
  query: string;
  params?: Record<string, any>;
};

export async function sanityFetch({ query, params = {} }: SanityFetchProps) {
  return client.fetch(query, params);
}