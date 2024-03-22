ISS Exporter
============
> An Exporter that listens to the telemetry feed of the International Space Station and exposes all telemetry signals as
> Prometheus metrics.

Getting started
---------------
Start by installing the dependencies:
```shell
npm install
```

You can then use the bundled `npm` commands as a convenient way to build the application:
```shell
# Build the app in production mode
npm run build

# Watch the source code for changes
npm run dev
```
Output artifacts will be located in the `dist/` folder.

Configuration
-------------
The exporter can be configured via environment variables. The following values are available:

| Variable                    | Default                                   | Description                                                                                               |
|-----------------------------|-------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| `LOG_LEVEL`                 | `info`                                    | Log level for Exporter logging.                                                                           |
| `UPDATE_FREQUENCY`          | `1000`                                    | Interval in ms between metrics updates. This is the minimum scrape interval for Prometheus.               |
| `METRICS_PREFIX`            | `iss`                                     | Prefix for all telemetry metrics.                                                                         |
| `NODE_SERVER_METRICS`       | `node`                                    | Prefix for all Node.js runtime metrics.                                                                   |
| `NODE_METRICS_PREFIX`       | `node`                                    | Prefix for all Node.js runtime metrics.                                                                   |
| `WEB_SERVER_METRICS`        | `true`                                    | Collect metrics on the Express server itself.                                                             |
| `WEB_SERVER_METRICS_PREFIX` | `express`                                 | Prefix for all metrics emitted on the Express server itself.                                              |
| `POSITION_UPDATE_FREQUENCY` | `2000`                                    | Interval in ms between position update requests.                                                          |
| `POSITION_API_URL`          | `http://api.open-notify.org/iss-now.json` | URL to the position API endpoint to query.                                                                |
| `SUBSCRIPTION_ENDPOINT`     | `https://push.lightstreamer.com`          | Lightstreamer subscription endpoint to listen to.                                                         |
| `SUBSCRIPTION_ADAPTER`      | `ISSLIVE`                                 | Lightstreamer [adapter set](https://lightstreamer.com/docs/ls-server/latest/General%20Concepts.pdf) name. |
| `LISTEN_PORT`               | `3000`                                    | Port to listen for HTTP requests on.                                                                      | 
| `METRICS_ENDPOINT`          | `/metrics`                                | URI to respond for metric collection requests.                                                            | 
| `STATUS_ENDPOINT`           | `/status`                                 | URI to respond for status check requests.                                                                 | 

Why didn't you use Python?
--------------------------
Fair point. I actually considered doing so, until I remembered how managing dependencies consistently sucks every single 
last ounce of joy out of working on side projects, and settled on TypeScript instead: Proper static analysis, installing
dependencies with a single command, package it all up in a Docker container, no further ado. Compare this experience to
Python: Ask five Python developers on the proper way to manage packages, and you'll get seven opinions! From virtual 
environments that require using bash to activate, package managers without a way to write a lock file, to hard-wired
dependencies on system packages: No, thank you. If Python ever settles on a single darn way to manage packages that 
doesn't make me want to choose another career path, I'll reconsider. 
