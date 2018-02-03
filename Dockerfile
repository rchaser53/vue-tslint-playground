FROM node:8.9.4

RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app

WORKDIR $HOME/

RUN chown -R app:app $HOME/ \ 
    && apt-get update -y