import { request, gql } from 'graphql-request'; //client library

const GRAPHQL_URL = 'http://localhost:9000/graphql';

export async function getJob(id) {
  const query = gql`
    query JobQuery($id: ID!) {
      job(id: $id) {
          id
          title
          description
          company {
            id
            name
          }
      }
}
  `;
  const variables = { id };
  const data = await request(GRAPHQL_URL, query, variables);
  return data.job;
}

export async function getJobs() {
  const query = gql`
    query {
      jobs {
          id
          title
          company {
            name
          }
      }
    }
  `;

  const data = await request(GRAPHQL_URL, query);
  return data.jobs;
}