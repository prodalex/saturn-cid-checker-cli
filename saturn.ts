#!/usr/bin/env node

const axios = require('axios');

// Function to send a HEAD request to the specified URL
async function sendHeadRequest(cid) {
  const url = `https://saturn.ms/ipfs/${cid}`;
  try {
    const response = await axios.head(url);

    // Check if the 'Saturn-Cache-Status' header exists in the response
    if (response.headers['saturn-cache-status']) {
      const cacheStatus = response.headers['saturn-cache-status'];
      console.log(`CID ${cid} is available.`);
      console.log(`Cache Status: ${cacheStatus}`);
    } else {
      console.log(`CID ${cid} is available, but the 'Saturn-Cache-Status' header is missing.`);
    }

    // Extract and output the 'Saturn-Node-Id' header if it exists
    if (response.headers['saturn-node-id']) {
      const nodeId = response.headers['saturn-node-id'];
      console.log(`Saturn Node ID: ${nodeId}`);
    } else {
      console.log(`'Saturn-Node-Id' header is missing in the response.`);
    }

    // Extract and output the IP address of the responding node
    const ipAddress = response.request.res.socket.remoteAddress;
    console.log(`IP Address of Responding Node: ${ipAddress}`);
  } catch (error) {
    console.error(`CID ${cid} is not found.`);
  }
}

// Parse command-line arguments
const args = process.argv.slice(2);

if (args.length !== 2 || args[0] !== 'check') {
  console.error('Usage: saturn check <CID>');
  process.exit(1);
}

const cid = args[1];

// Send the HEAD request
sendHeadRequest(cid);
