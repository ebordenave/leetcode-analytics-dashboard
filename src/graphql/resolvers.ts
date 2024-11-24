import { ApolloServer } from 'apollo-server';
import axios from 'axios';
import { typeDefs } from './schema';

/**
 * GraphQL Resolvers
 *
 * Resolvers are functions that determine how to fetch the data
 * associated with a particular type in your schema.
 */
const resolvers = {
  Query: {
    /**
     * Resolver for the leetcodeProfile query
     * @returns {Promise<Object>} An object containing the user's LeetCode ranking
     */
    leetcodeProfile: async (): Promise<object> => {
      try {
        // Make a POST request to the LeetCode GraphQL API
        const response = await axios.post('https://leetcode.com/graphql', {
          query: `
            query {
              matchedUser(username: "ebordenave") {
                profile {
                  ranking
                }
              }
            }
          `
        });

        // Extract the matchedUser data from the response
        const { matchedUser } = response.data.data;

        // Return an object with the ranking
        // Use optional chaining (?.) to safely access nested properties
        // Use nullish coalescing operator (??) to provide a fallback value if ranking is undefined
        return {
          ranking: matchedUser?.profile?.ranking ?? null,
        };
      } catch (error) {
        // Log any errors that occur during the API request
        console.error('Error fetching LeetCode data:', error);
        // Return a default object with null ranking in case of an error
        return { ranking: null };
      }
    },
  },
};

// Create an instance of ApolloServer with the defined GraphQL schema and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

/**
 * Start the Apollo Server
 *
 * This function initiates the server and logs the URL when it's ready.
 * The server will be accessible at the logged URL, where GraphQL
 * queries can be sent to fetch LeetCode profile data.
 */
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});