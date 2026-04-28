# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

# Stage 2: Serve
FROM nginx:alpine
# In Angular 17+, the build usually goes to dist/ecommapii/browser
# If your build fails, check if it should be /app/dist/ecommapii
COPY --from=build /app/dist/ecommapii/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]