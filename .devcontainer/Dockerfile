# BaseImages to ubuntu 20.04.4 LTS a.k.a focal
FROM mcr.microsoft.com/vscode/devcontainers/base:focal

# see also script librarys
# if you have an application you want to install, download it here
# https://github.com/microsoft/vscode-dev-containers/tree/main/script-library
COPY library-scripts/*.sh /tmp/library-scripts/
RUN bash /tmp/library-scripts/common-debian.sh && \
    bash /tmp/library-scripts/docker-debian.sh && \
    bash /tmp/library-scripts/go-debian.sh && \
    bash /tmp/library-scripts/node-debian.sh

#USER vscode
# GCP CLI Installed
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg  add - && apt-get update -y && apt-get install google-cloud-cli -y

ENTRYPOINT ["/usr/local/share/docker-init.sh"]
CMD ["sleep", "infinity"]
      