# !/bin/bash

content=$(curl -L http://localhost:8080/openapi.json)
echo $content > openapi-schema.json

docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -g typescript-axios -i /local/openapi-schema.json -o /local/src/openapi
