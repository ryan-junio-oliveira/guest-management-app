# Usar a imagem oficial do Node.js como base
FROM node:18-alpine

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o package.json e o package-lock.json (se houver) para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do Node.js
RUN npm install

# Copiar o restante dos arquivos do projeto para dentro do contêiner
COPY . .

# Expor a porta que o servidor vai rodar
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
