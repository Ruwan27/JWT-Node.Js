Data migrate command 


npx prisma migrate dev --name init


User register curl command 


curl --location 'http://localhost:4000/register' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMSIsImlhdCI6MTcyNzc2NDM2NSwiZXhwIjoxNzI3NzY3MzY1fQ.sLEy-sp5pHJg45x-eOjBu6eJTOEHiUOAUw7G9FR8dFE' \
--header 'Cookie: JSESSIONID=D691DE4D403EDCBE8896F40CFA1709F5; JSESSIONID=D691DE4D403EDCBE8896F40CFA1709F5' \
--data-raw '{
    
    "username":"nuwan123",
    "name":"nuwan",
    "password":"password132",
    "email":"liyanage.nuwan23@gmail.com"
}'


User login curl command 


curl --location 'http://localhost:4000/login' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=D691DE4D403EDCBE8896F40CFA1709F5; JSESSIONID=D691DE4D403EDCBE8896F40CFA1709F5; JSESSIONID=D691DE4D403EDCBE8896F40CFA1709F5' \
--data '{
    
    "username":"nuwan123kamal",
    "password":"password132"
}'


JWT token checking curl command


curl --location 'http://localhost:4000/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicnV3YW4iLCJ1c2VybmFtZSI6InVzZXIxIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3Mjc4ODIyMjYsImV4cCI6MTcyNzg4MjgyNn0.lokRqAwcLvlZyiNvFBu6KAi1809riXACKH3ae6yGQhc' \
--header 'Cookie: JSESSIONID=D691DE4D403EDCBE8896F40CFA1709F5; JSESSIONID=D691DE4D403EDCBE8896F40CFA1709F5; JSESSIONID=D691DE4D403EDCBE8896F40CFA1709F5; JSESSIONID=D691DE4D403EDCBE8896F40CFA1709F5'
