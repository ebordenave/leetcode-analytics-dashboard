import { gql } from 'apollo-server';

/**
 * GraphQL Schema Definition
 *
 * This schema defines the structure of our GraphQL API.
 * It includes a Query type with a leetcodeProfile field,
 * and a LeetcodeProfile type representing the user's profile data.
 */
export const typeDefs = gql`
    type Query {
        leetcodeProfile: LeetcodeProfile
    }

    type LeetcodeProfile {
        ranking: Int
    }
`;