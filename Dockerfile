#Use a imagem nginx como base
FROM nginx

# Crie um diretório para armazenar os arquivos do site
RUN mkdir -p /usr/share/nginx/html

# Copie os arquivos do diretório "/create-curriculo" para o diretório do servidor nginx
COPY . /usr/share/nginx/html

# Exponha a porta 80 para o tráfego HTTP
EXPOSE 80

# Comando a ser executado quando o contêiner for iniciado
CMD ["nginx", "-g", "daemon off;"]