# Derive from postgres v 10.3 alpine OS
FROM postgres:10.3-alpine

# Copy all sql files to the docker entrypoint
COPY *.sql /docker-entrypoint-initdb.d/

# Make sql files readable
RUN chmod a+r /docker-entrypoint-initdb.d/*