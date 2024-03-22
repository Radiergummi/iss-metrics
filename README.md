ISS Metrics
===========
> Observability stack for the public ISS telemetry feed published by NASA. Provides a Grafana dashboard and Prometheus
> metrics for the International Space Station telemetry data, easily deployed using docker compose!

[![ISS](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/ISS_blueprint.png/2560px-ISS_blueprint.png)](https://en.m.wikipedia.org/wiki/International_Space_Station#Structure)
<sub><sup>*Image published under CC0/1.0 by Daniel Molybdenum/NASA/Roscosmos, with the help of John Chryslar and others.*</sup></sub>

**This project would not have been possible without the invaluable work of the maintainers of the [ISSMimic Project](https://www.issmimic.space/).**

System Requirements
-------------------
To run this project, you will need to have Docker and Docker Compose installed on your system. You can find the
installation instructions for your operating system on the [Docker website](https://docs.docker.com/get-docker/).

Getting Started
---------------
To start the stack locally, clone the repository and run the following command in the root directory:

```bash
docker-compose up
```

This will start the Prometheus server, Grafana, and the ISS metrics exporter. You can access the Grafana dashboard at
`http://localhost:3000` (or `https://localhost:3010` with TLS), and the Prometheus server 
at `http://localhost:3000/prometheus`. 

Production Deployment and Configuration
---------------------------------------
To deploy the stack in production, you can use the provided `docker-compose.yaml` file in conjunction with a few 
environment variables. The following variables can be set:

- **`SITE_DOMAIN`  
  The domain name of the site. Defaults to `localhost`.**  
  This is the most important variable to set when deploying the stack in production; make sure to set it to the domain
  name of your site, or you'll get invalid TLS certificate issues.
- `HTTP_PORT`  
  The port on which the stack will listen for HTTP requests. Defaults to `3000`.
- `HTTPS_PORT`  
  The port on which the stack will listen for HTTPS requests. Defaults to `3010`.
- `PROMETHEUS_RETENTION_TIME`  
  The retention time for Prometheus metrics. Defaults to `14d`.  
  This is the amount of time that Prometheus will keep metrics data before deleting it; longer retention times will
  take up more disk space, but will allow you to view historical data in Grafana.  
  Units Supported: `y`, `w`, `d`, `h`, `m`, `s`, `ms`.
- `EXPOSE_PROMETHEUS`  
  Set to the string `true` to expose the Prometheus server to the public. Defaults to `false`.  
  This is useful if you want to be able to access the Prometheus web interface directly from the internet; be advised
  that this exposes internal system metrics to the public, however.

The following, additional configuration options should be probably be left at their defaults, but can be overridden if
necessary:
- `URL_PREFIX_PROMETHEUS`  
  The URL prefix for the Prometheus server. Defaults to `/prometheus`.
- `URL_PREFIX_GRAFANA`  
  The URL prefix for the Grafana server. Defaults to `/grafana`.
- `URL_PREFIX_ASSETS`  
  The URL prefix for static assets served from the `public/` folder. Defaults to `/assets`.
- `EXPORTER_WEB_SERVER_METRICS`  
  Whether to export web server metrics for the Exporter itself. Defaults to `true`.
- `EMAIL`  
  The email address to use for Let's Encrypt certificate registration. Defaults to `root@localhost`.
- `TRUSTED_PROXIES`  
  A comma-separated list of trusted proxy IP addresses. Defaults to the special value `private_ranges`, which includes
  all private IP ranges as defined by RFC 1918.  
  This is used to determine the client's real IP address when the stack is deployed behind a reverse proxy.

Reverse Proxy Configuration
---------------------------
> **Note:** If you're _not_ using a reverse proxy, you'll want to set `HTTP_PORT` and `HTTPS_PORT` to `80` and `443`,
> so that the stack listens on the standard HTTP and HTTPS ports of your server. This will likely require running the
> stack as root, so be sure to understand the security implications of doing so.

If you're deploying the stack behind a reverse proxy, you'll need to configure the proxy to forward requests to the
appropriate services. Also, make sure to set the `SITE_DOMAIN` environment variable to the domain name of your site,
and the `TRUSTED_PROXIES` environment variable to a comma-separated list of all internal IP addresses that are trusted
to forward requests to the stack.

Here's an example configuration for Nginx:

```nginx
server {
    listen 443 ssl http2;
    server_name example.com;

    location / {
        proxy_pass https://localhost:3010;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
``` 

Contributing
------------
Contributions are welcome! If you have any ideas for improvements, or if you find any bugs, feel free to open an issue.
