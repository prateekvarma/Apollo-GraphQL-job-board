import { Company, Job } from "./db.js";

export const resolvers = {
  Query: {
    job: (_root, args) => {
      // the root here is similar to the below function that receives the parent object.
      // the 2nd param is the arguments that we receive from the url
      //console.log('args: ', args); //logs an object with id on server
      return Job.findById(args.id);
    },
    jobs: () => Job.findAll()
  },

  Job: {
    company: (job) => {
      //each resolver function auto receives the parent object, in this case is job. 
      //console.log('Returns each of the 3 jobs from jobs.json: ', job);

      return Company.findById(job.companyId); // returns the specific company object.
    }
  }
};