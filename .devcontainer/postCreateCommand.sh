#/bin/bash

#docker-compose build && docker-compose up -d

yes | gcloud auth login --cred-file=<(echo $GCP_CREDENTIALS)
gcloud config set project $GCP_PROJECTID

wget -qO- https://get.pnpm.io/install.sh | bash - \
    && export PNPM_HOME="/home/vscode/.local/share/pnpm" \
    && export PATH="$PNPM_HOME:$PATH"
    
exit 0