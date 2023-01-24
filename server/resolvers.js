import { Job } from "./db.js";

export const resolvers = {
  Query: {
    jobs: () => Job.findAll()
  },

  Job: {
    company: (job) => {
      //each resolver function auto receives the parent object, in this case is job. 
      console.log('Returns each of the 3 jobs from jobs.json: ', job);
      return {
        id: 'fake',
        name: 'Fake Inc.'
      }
    }
  }
};