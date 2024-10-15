# Descripción

Instancia para usar Next-auth/prisma mysql

## Correr en dev

1. Clonar el repositorio.
2. Crear una copia del `.env.template` y renombrarlo a `.env` y cambiar las variables de entorno.
3. Instalar dependencias `npm install`
4. Instalar el npx auth secret
5. Crear la base de datos mysql ingresarla al `.env`
6. Crear una segunda base de datos para evitar el error de shadow data base = SHADOW_DATABASE_URL
7. generar el prisma init
8. npx prisma generate
9. npx prisma migrate dev --name prisma mysql

#
