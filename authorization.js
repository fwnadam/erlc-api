const fetch = require("node-fetch");

/**
 * @param {string} token - Server's API token
 * @returns {Promise<Object>} - Promise resolving to the fetched data
 */

const getBans = async (token) => {
  try {
    const res = await fetch(
      `https://api.policeroleplay.community/v1/server/bans`,
      {
        headers: {
          Authorization: process.env.PRC_KEY,
          "Server-Key": token,
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getCommandLogs = async (token) => {
  try {
    const res = await fetch(
      `https://api.policeroleplay.community/v1/server/commandlogs`,
      {
        headers: {
          Authorization: process.env.PRC_KEY,
          "Server-Key": token,
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getJoinLogs = async (token) => {
  try {
    const res = await fetch(
      `https://api.policeroleplay.community/v1/server/joinlogs`,
      {
        headers: {
          Authorization: process.env.PRC_KEY,
          "Server-Key": token,
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getKillLogs = async (token) => {
  try {
    const res = await fetch(
      `https://api.policeroleplay.community/v1/server/killlogs`,
      {
        headers: {
          Authorization: process.env.PRC_KEY,
          "Server-Key": token,
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getModcallLogs = async (token) => {
  try {
    const res = await fetch(
      `https://api.policeroleplay.community/v1/server/modcalls`,
      {
        headers: {
          Authorization: process.env.PRC_KEY,
          "Server-Key": token,
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPlayers = async (token) => {
  try {
    const res = await fetch(
      `https://api.policeroleplay.community/v1/server/players`,
      {
        headers: {
          Authorization: process.env.PRC_KEY,
          "Server-Key": token,
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getQueue = async (token) => {
  try {
    const res = await fetch(
      `https://api.policeroleplay.community/v1/server/queue`,
      {
        headers: {
          Authorization: process.env.PRC_KEY,
          "Server-Key": token,
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getServer = async (token) => {
  try {
    const res = await fetch(`https://api.policeroleplay.community/v1/server`, {
      headers: {
        Authorization: process.env.PRC_KEY,
        "Server-Key": token,
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * @param {string} token - Server's API token
 * @param {string} command - Command to run
 * @returns {Promise<Object>} - Promise resolving to the fetched data
 */

const runCommand = async (token, command) => {
  try {
    const params = JSON.stringify({ command: `${command}` });
    const res = await fetch(
      `https://api.policeroleplay.community/v1/server/command`,
      {
        headers: {
          Authorization: process.env.PRC_KEY,
          "Server-Key": token,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: params,
      }
    );

    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getBans,
  getCommandLogs,
  getJoinLogs,
  getKillLogs,
  getModcallLogs,
  getPlayers,
  getQueue,
  getServer,
  runCommand,
};
