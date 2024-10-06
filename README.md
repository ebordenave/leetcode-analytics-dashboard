LeetCode Profile GraphQL Server
This project implements a GraphQL server that fetches and serves a user's LeetCode ranking. It uses Apollo Server to create a GraphQL endpoint and Axios to make requests to the LeetCode GraphQL API.
Features

GraphQL API to fetch LeetCode user ranking
Error handling for API requests
Easy to extend for additional LeetCode profile data

Planned Features

Frontend application to display LeetCode profile data (to be implemented)

Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed (version 12.x or higher recommended)
npm (Node Package Manager) installed

Installation
To install the LeetCode Profile GraphQL Server, follow these steps:

Clone the repository:
Copygit clone https://github.com/yourusername/leetcode-profile-graphql-server.git

Navigate to the project directory:
Copycd leetcode-profile-graphql-server

Install the dependencies:
Copynpm install


Usage
To run the GraphQL server, follow these steps:

Make sure you're in the project directory.
Start the server by running:
Copynode index.js
If you've set up a start script in your package.json, you can use:
Copynpm start

Once the server starts, you'll see a message in the console similar to:
Copy🚀 Server ready at http://localhost:4000

Open the provided URL in your web browser. This will take you to the GraphQL Playground, where you can interact with your API.
In the GraphQL Playground, you can run queries. To fetch the LeetCode profile ranking, use this query:
graphqlCopyquery {
leetcodeProfile {
ranking
}
}

Click the "Play" button or press Ctrl+Enter to execute the query.

To stop the server, press Ctrl+C in the terminal where the server is running.
Future Development: Frontend
A frontend application to display the LeetCode profile data is planned for future development. This will provide a user-friendly interface to interact with the GraphQL API. Stay tuned for updates!
Configuration
The current implementation fetches the ranking for a hardcoded username ("ebordenave"). To change this, modify the username in the GraphQL query within the leetcodeProfile resolver in the index.js file.
Contributing
Contributions to the LeetCode Profile GraphQL Server are welcome. Please feel free to submit a Pull Request.
License
This project uses the following license: MIT License