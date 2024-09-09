"use strict";
exports.config = {
  app_name: [`blah-blah-blah-${process.env.NODE_ENV}`],
  distributed_tracing: {
    enabled: true,
  },
  logging: {
    enabled: true,
    level: "info",
    filepath: "stdout", // Forward logs to stdout
  },
  application_logging: {
    forwarding: {
      enabled: true,
    },
  },

  // other configuration settings
};
