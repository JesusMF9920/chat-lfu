# Use the official Node.js 16.x.x image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build TypeScript files
RUN npm run build

# Expose the port on which your Node.js app will run
EXPOSE 3000

# Command to run your Node.js app using ts-node
CMD ["npm", "start"]
