FROM nginx:latest

# Remova o arquivo de boas-vindas padrão do Nginx
RUN rm /usr/share/nginx/html/*

# Copie o arquivo HTML principal
COPY index.html /usr/share/nginx/html/

# Copie a pasta CSS
COPY css/ /usr/share/nginx/html/css/

# Copie a pasta de imagens
COPY img/ /usr/share/nginx/html/img/

# Copie o arquivo JavaScript
COPY app.js /usr/share/nginx/html/app.js