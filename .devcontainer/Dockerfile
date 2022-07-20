# BaseImages to ubuntu 20.04.4 LTS a.k.a focal
ARG VARIANT
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

ARG INSTALL_ZSH="true"
ARG ENABLE_NONROOT_DOCKER="true"
ARG USERNAME

# see also script librarys
# if you have an application you want to install, download it here
# https://github.com/microsoft/vscode-dev-containers/tree/main/script-library
COPY library-scripts/*.sh /tmp/library-scripts/
RUN bash /tmp/library-scripts/common-debian.sh "${INSTALL_ZSH}" "${USERNAME}"
ENV DOCKER_BUILDKIT=1
RUN apt-get update && ash /tmp/library-scripts/docker-in-docker-debian.sh "${ENABLE_NONROOT_DOCKER}" "${USERNAME}"
RUN apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/library-scripts

VOLUME [ "/var/lib/docker" ]
ENTRYPOINT ["/usr/local/share/docker-init.sh"]
CMD ["sleep", "infinity"]
      