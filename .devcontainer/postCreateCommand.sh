#/bin/bash

docker-compose build && docker-compose up -d

yes | gcloud auth login --cred-file=<(echo $GCP_CREDENTIALS)
gcloud config set project $GCP_PROJECTID

exit 0