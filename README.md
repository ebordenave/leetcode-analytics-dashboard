# LeetCode Profile GraphQL Server

This project implements a GraphQL server that fetches and serves a user's LeetCode ranking. It uses Apollo Server to create a GraphQL endpoint and Axios to make requests to the LeetCode GraphQL API.

## Features

- GraphQL API to fetch LeetCode user ranking
- Error handling for API requests
- Easy to extend for additional LeetCode profile data

### Planned Features
- Frontend application to display LeetCode profile data (to be implemented)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 12.x or higher recommended)
- npm (Node Package Manager) installed

## Installation

To install the LeetCode Profile GraphQL Server, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/leetcode-profile-graphql-server.git
   ```

2. Navigate to the project directory:
   ```
   cd leetcode-profile-graphql-server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the GraphQL server:

1. Make sure you're in the project directory.

2. Start the server:
   ```
   node index.js
   ```
   Or, if you've set up a start script in your package.json:
   ```
   npm start
   ```

3. Once the server starts, you'll see a message like:
   ```
   🚀 Server ready at http://localhost:4000
   ```

4. Open the provided URL in your browser to access the GraphQL Playground.

5. In the Playground, you can run queries. To fetch the LeetCode profile ranking:
   ```graphql
   query {
     leetcodeProfile {
       ranking
     }
   }
   ```

6. Click the "Play" button or press Ctrl+Enter to execute the query.

7. To stop the server, press Ctrl+C in the terminal.

## Configuration

The current implementation fetches the ranking for a hardcoded username ("ebordenave"). To change this, modify the username in the GraphQL query within the `leetcodeProfile` resolver in `index.js`.

## Future Development: Frontend

A frontend application to display the LeetCode profile data is planned for future development. This will provide a user-friendly interface to interact with the GraphQL API.

## Contributing

Contributions to the LeetCode Profile GraphQL Server are welcome. Please feel free to submit a Pull Request.

## License

This project uses the MIT License.